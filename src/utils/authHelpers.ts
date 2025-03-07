
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import { UserProfile } from '@/types/auth';

/**
 * Safely checks for and queries a table in Supabase
 * Uses a dynamic approach to handle both "profiles" and "user_profiles" tables
 */
export const fetchUserProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    // Try to query user_profiles first (raw query to avoid TypeScript errors)
    const { data: userProfileData, error: userProfileError } = await supabase
      .from('user_profiles' as any)
      .select('*')
      .eq('id', userId)
      .maybeSingle();
    
    // If user_profiles query failed, try profiles
    if (userProfileError || !userProfileData) {
      const { data: profileData, error: profileError } = await supabase
        .from('profiles' as any)
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      
      if (profileError || !profileData) {
        console.error("Error fetching profile data:", profileError);
        return null;
      }
      
      return profileData as unknown as UserProfile;
    }
    
    return userProfileData as unknown as UserProfile;
  } catch (error) {
    console.error("Error in profile fetch:", error);
    return null;
  }
};

export const createUserProfile = async (
  userId: string, 
  userData: Omit<UserProfile, 'id'>
): Promise<{ success: boolean; error?: any }> => {
  try {
    // Try user_profiles first
    let { error: userProfilesError } = await supabase
      .from('user_profiles' as any)
      .insert({
        id: userId,
        full_name: userData.full_name,
        email: userData.email,
        country: userData.country,
        phone: userData.phone,
        preferred_language: userData.preferred_language,
      } as any);
    
    // If user_profiles insert failed, try profiles
    if (userProfilesError) {
      console.log("Falling back to profiles table");
      const { error: profilesError } = await supabase
        .from('profiles' as any)
        .insert({
          id: userId,
          full_name: userData.full_name,
          email: userData.email,
          country: userData.country,
          phone: userData.phone,
          preferred_language: userData.preferred_language,
        } as any);
      
      if (profilesError) {
        console.error("Error creating profile:", profilesError);
        return { success: false, error: profilesError };
      }
    }
    
    return { success: true };
  } catch (error) {
    console.error("Error in createUserProfile:", error);
    return { success: false, error };
  }
};

export const loginUser = async (
  email: string, 
  password: string
): Promise<{ success: boolean; error?: any }> => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    
    toast({
      title: "Successfully logged in",
      description: "Welcome back to Sofitel Frankfurt Opera",
    });
    
    return { success: true };
  } catch (error: any) {
    console.error("Login error:", error);
    toast({
      title: "Login failed",
      description: error.message || "Invalid email or password",
      variant: "destructive",
    });
    
    return { success: false, error };
  }
};

export const signupUser = async (
  email: string,
  password: string,
  userData: Omit<UserProfile, 'id'>
): Promise<{ success: boolean; error?: any; userId?: string }> => {
  try {
    // 1. Create auth user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) throw error;
    
    if (!data.user) {
      return { success: false, error: new Error("User creation failed") };
    }
    
    // 2. Create profile
    const { success, error: profileError } = await createUserProfile(data.user.id, userData);
    
    if (!success) {
      throw profileError;
    }
    
    toast({
      title: "Account created successfully",
      description: "Welcome to Sofitel Frankfurt Opera",
    });
    
    return { success: true, userId: data.user.id };
  } catch (error: any) {
    console.error("Signup error:", error);
    toast({
      title: "Signup failed",
      description: error.message || "Could not create account",
      variant: "destructive",
    });
    
    return { success: false, error };
  }
};

export const logoutUser = async (): Promise<{ success: boolean; error?: any }> => {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) throw error;
    
    toast({
      title: "Logged out successfully",
    });
    
    return { success: true };
  } catch (error: any) {
    console.error("Logout error:", error);
    toast({
      title: "Error signing out",
      description: error.message,
      variant: "destructive",
    });
    
    return { success: false, error };
  }
};

export const sendPasswordReset = async (email: string): Promise<{ success: boolean; error?: any }> => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    
    if (error) throw error;
    
    toast({
      title: "Password reset email sent",
      description: "Check your email for the password reset link",
    });
    
    return { success: true };
  } catch (error: any) {
    console.error("Password reset error:", error);
    toast({
      title: "Password reset failed",
      description: error.message,
      variant: "destructive",
    });
    
    return { success: false, error };
  }
};

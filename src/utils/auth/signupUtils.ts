
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import { UserProfile } from '@/types/auth';
import { createUserProfile } from './profileUtils';

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

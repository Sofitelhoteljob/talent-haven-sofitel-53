
import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

// Update the user_profiles table in Supabase to include these fields
export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  country: string;
  phone: string;
  preferred_language: string;
}

interface AuthContextType {
  user: any | null;
  profile: UserProfile | null;
  loading: boolean;
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  signup: (email: string, password: string, userData: Omit<UserProfile, 'id'>) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for active session
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Error checking session:", error);
          return;
        }
        
        if (data?.session) {
          setUser(data.session.user);
          // Fetch user profile data
          await fetchUserProfile(data.session.user.id);
        }
      } catch (error) {
        console.error("Auth state check error:", error);
      } finally {
        setLoading(false);
      }
    };

    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session) {
          setUser(session.user);
          await fetchUserProfile(session.user.id);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
          setProfile(null);
        }
      }
    );

    checkSession();

    // Clean up subscription
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      // First, check if the table exists by getting the table schema
      const { data: tableInfo, error: tableError } = await supabase
        .from('user_profiles')
        .select('*')
        .limit(1);
        
      // If user_profiles table doesn't exist, try profiles
      const tableName = (tableError || !tableInfo) ? 'profiles' : 'user_profiles';
      
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error(`Error fetching user profile from ${tableName}:`, error);
        return;
      }

      if (data) {
        setProfile(data as unknown as UserProfile);
      }
    } catch (error) {
      console.error("Error in profile fetch:", error);
    }
  };

  const login = async (email: string, password: string, rememberMe: boolean) => {
    try {
      setLoading(true);
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      toast({
        title: "Successfully logged in",
        description: "Welcome back to Sofitel Frankfurt Opera",
      });
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: error.message || "Invalid email or password",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (
    email: string, 
    password: string, 
    userData: Omit<UserProfile, 'id'>
  ) => {
    try {
      setLoading(true);
      
      // 1. Create auth user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) throw error;
      
      if (data.user) {
        // Check if the table exists by getting the table schema
        const { data: tableInfo, error: tableError } = await supabase
          .from('user_profiles')
          .select('*')
          .limit(1);
          
        // If user_profiles table doesn't exist, use profiles
        const tableName = (tableError || !tableInfo) ? 'profiles' : 'user_profiles';
        
        // 2. Create user profile
        const { error: profileError } = await supabase
          .from(tableName)
          .insert({
            id: data.user.id,
            full_name: userData.full_name,
            email: userData.email,
            country: userData.country,
            phone: userData.phone,
            preferred_language: userData.preferred_language,
          });
          
        if (profileError) {
          console.error(`Error creating profile in ${tableName}:`, profileError);
          // If profile creation fails, we should delete the auth user
          // Note: Admin delete is not available in client-side code
          throw profileError;
        }
        
        toast({
          title: "Account created successfully",
          description: "Welcome to Sofitel Frankfurt Opera",
        });
      }
    } catch (error: any) {
      console.error("Signup error:", error);
      toast({
        title: "Signup failed",
        description: error.message || "Could not create account",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) throw error;
      
      toast({
        title: "Logged out successfully",
      });
    } catch (error: any) {
      console.error("Logout error:", error);
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setLoading(true);
      
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) throw error;
      
      toast({
        title: "Password reset email sent",
        description: "Check your email for the password reset link",
      });
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast({
        title: "Password reset failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      profile, 
      loading, 
      login, 
      signup, 
      logout, 
      resetPassword 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

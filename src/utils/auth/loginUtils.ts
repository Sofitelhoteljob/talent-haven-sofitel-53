
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

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

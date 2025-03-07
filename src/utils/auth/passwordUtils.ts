
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

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


import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

/**
 * Utility function to check Supabase connection status
 * Returns true if connection is successful, false otherwise
 */
export const checkSupabaseConnection = async (): Promise<boolean> => {
  try {
    const { data, error } = await supabase.from('jobs').select('id').limit(1);
    if (error) {
      console.error('Supabase connection error:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to check Supabase connection:', err);
    return false;
  }
};

/**
 * Handle Supabase errors in a consistent way
 */
export const handleSupabaseError = (error: any, customMessage?: string) => {
  console.error('Supabase error:', error);
  toast({
    title: 'Error',
    description: customMessage || error.message || 'An error occurred with the database connection',
    variant: 'destructive',
  });
};

/**
 * Get connection status for UI components
 */
export const getConnectionStatus = async () => {
  const isConnected = await checkSupabaseConnection();
  return {
    isConnected,
    message: isConnected ? 'Connected to Supabase' : 'Not connected to Supabase'
  };
};

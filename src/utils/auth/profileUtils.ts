
import { supabase } from '@/integrations/supabase/client';
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

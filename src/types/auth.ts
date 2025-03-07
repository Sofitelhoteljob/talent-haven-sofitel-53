
export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  country: string;
  phone: string;
  preferred_language: string;
}

export interface AuthContextType {
  user: any | null;
  profile: UserProfile | null;
  loading: boolean;
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  signup: (email: string, password: string, userData: Omit<UserProfile, 'id'>) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

export type ProfileData = Omit<UserProfile, 'id'>;

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  password?: string;
  profile: UserProfile;
}

export interface UserProfile {
  phone?: string;
  address?: string;
  dob?: string;
}
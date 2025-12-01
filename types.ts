export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

export interface User {
  id: string;
  email: string;
  password: string; // In a real app, this would be hashed
  name: string;
}

export interface Profile {
  id: string; // unique username
  ownerId: string; // ID of the User who owns this profile
  firstName: string;
  lastName: string;
  email: string; // Gmail ID for display
  phone?: string;
  bio?: string;
  avatarUrl?: string;
  socials: SocialLinks;
  themeColor: string;
  createdAt: number;
}

export type ProfileFormData = Omit<Profile, 'createdAt' | 'ownerId'>;
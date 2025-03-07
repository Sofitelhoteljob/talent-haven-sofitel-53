
export type ApplicationStatus = 
  | 'pending' 
  | 'under_review'
  | 'interview_scheduled'
  | 'offer_extended'
  | 'accepted'
  | 'rejected'
  | 'withdrawn';

export type BondStatus = 'pending' | 'paid' | 'refunded';

export type NotificationPriority = 'low' | 'medium' | 'high';

export interface ApplicationStage {
  id: number;
  name: string;
  completed: boolean;
  date: string;
  description?: string;
}

export interface Notification {
  id: number;
  title: string;
  content: string;
  date: string;
  read: boolean;
  sender: string;
  priority?: NotificationPriority;
}

export interface Document {
  id: number;
  title: string;
  type: string;
  size: string;
  uploadDate: string;
  url: string;
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  size: string;
  url: string;
  new?: boolean;
  category?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface BondDetails {
  amount: string;
  status: BondStatus;
  paymentDate?: string;
  paymentMethod?: string;
  paymentDeadline?: string;
  refundDate?: string;
  transactionId?: string;
}

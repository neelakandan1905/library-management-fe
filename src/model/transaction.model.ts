export interface Transaction {
  userId: string;
  borrowedDate: string; // ISO format
  returnedDate?: string; // optional if not yet returned
}
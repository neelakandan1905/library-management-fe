import { Transaction } from "./transaction.model";

export interface Book {
  title: string;
  author: string;
  isbn: string;
  pages: number;
  publication_year: number;
  genres: string[];
  currentStatus: 'available' | 'borrowed';
  transactions: Transaction[];
}

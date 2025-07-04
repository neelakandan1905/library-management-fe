import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  pageOnEdit: number =  1;
  
  constructor() { }

  private addBook$ = new BehaviorSubject<Book | null>(null);
  private updateBook$ = new BehaviorSubject<Book | null>(null);

  addBook(book: any): void {
    this.addBook$.next(book);
  }

  getBook(): Observable<any> {
    return this.addBook$.asObservable();
  }

  clearBook(): void {
    this.addBook$.next(null);
  }

  updateBook(book: Book): void {
    this.updateBook$.next(book);
  }

  getupdatedBook(): Observable<any> { 
    return this.updateBook$.asObservable();
  }

  clearupdatedBook(): void {
    this.updateBook$.next(null);
  }

  getBookByIsbn(isbn: string): Book | null {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    return books.find((book: Book) => book.isbn === isbn) || null;
  }

}

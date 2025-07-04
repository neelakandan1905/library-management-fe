import { LoginService } from './../../login/login.service';
import { Component } from '@angular/core';
import { User } from '../../../model/user.model';
import { Book } from '../../../model/book.model';
import { books } from '../../../hardcoded-data/books-data';
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  itemsPerPage = 5;
  booksData: Book[] = [];
  availableBooks: Book[] = [];
  avlBooksCurrentPage = 1;
  borrowedBooks: Book[] = [];
  borrBooksCurrentPage = 1;
  currentUser: User | null = null;


  constructor(private loginService: LoginService) {
    this.currentUser =  this.loginService.currentUser;
    if (!this.booksData.length && !localStorage.getItem('books')) localStorage.setItem('books', JSON.stringify(books));
    this.booksData = JSON.parse(localStorage.getItem('books') || '[]');
    this.availableBooks = this.booksData.filter((book: Book) => book?.currentStatus === "available");
    this.borrowedBooks = this.booksData.filter(book => book.currentStatus === 'borrowed' && book.transactions.some(transaction =>
      transaction.userId === this.currentUser?.id && !transaction.returnedDate
    ));
  }

  get paginatedAvailableBooks(): Book[] {
    const startIndex = (this.avlBooksCurrentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.availableBooks.slice(startIndex, endIndex);
  }

  get paginatedBorrowedBooks(): Book[] {
    const startIndex = (this.borrBooksCurrentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.borrowedBooks.slice(startIndex, endIndex);
  }

  trackByIsbn(index: number, book: Book): string {
    return book.isbn;
  }

  changeAvlBooksPage(page: number): void {
    this.avlBooksCurrentPage = page;
  }

  changeBorrBooksPage(page: number): void {
    this.borrBooksCurrentPage = page;
  }

  borrowBook(book: Book): void {
    if (!this.currentUser) return;
    if (this.borrowedBooks.length >= 3) {
      alert('You can only borrow Maximum of 3 books at a time.');
      return;
    }
    const transaction = {
      userId: this.currentUser?.id,
      borrowedDate: new Date().toISOString(),
    };
    book.transactions.unshift(transaction);
    book.currentStatus = 'borrowed';
    localStorage.setItem('books', JSON.stringify(this.booksData));
    this.availableBooks = this.availableBooks.filter(b => b.isbn !== book.isbn);
    this.borrowedBooks.push(book);
  }

  returnBook(book: Book): void {
    const transaction = book.transactions.find(t => t.userId === this.currentUser?.id && !t.returnedDate);
    if (transaction) {
      transaction.returnedDate = new Date().toISOString();
      book.currentStatus = 'available';
      localStorage.setItem('books', JSON.stringify(this.booksData));
      this.borrowedBooks = this.borrowedBooks.filter(b => b.isbn !== book.isbn);
      this.availableBooks.push(book);
    }
  }

  // updateCurrentPage(totalPages: number, fromAvailabeBooks: boolean): void {
  // if ((totalPages > 1) && (this.borrBooksCurrentPage > totalPages) && !fromAvailabeBooks) {
  //   this.borrBooksCurrentPage = totalPages;
  // } else {
  //   this.avlBooksCurrentPage = totalPages;
  // }
  // }

}

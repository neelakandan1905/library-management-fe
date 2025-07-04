import { Component, OnDestroy } from '@angular/core';
import { Book } from '../../../model/book.model';
import { Transaction } from '../../../model/transaction.model';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Subscription } from 'rxjs';
import { User } from '../../../model/user.model';
import { books } from '../../../hardcoded-data/books-data';
import { users } from '../../../hardcoded-data/users-data';
import { MatDialog } from '@angular/material/dialog';
import { PreviewUserDetailsComponent } from '../preview-user-details/preview-user-details.component';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnDestroy {
  itemsPerPage = 5;
  currentPage = 1;
  data: Book[] = [];
  userData: User[] = []; 
  addBook$: Subscription;
  updateBook$: Subscription;

  constructor(private router: Router, private adminService: AdminService, private dialog: MatDialog) {
    if (!this.data.length && !localStorage.getItem('books')) localStorage.setItem('books', JSON.stringify(books));
    if (!this.userData.length && !localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify(users));
    this.data = JSON.parse(localStorage.getItem('books') || '[]');
    this.userData = JSON.parse(localStorage.getItem('users') || '[]');
    this.addBook$ = this.adminService.getBook().subscribe(book => {
      if (book) {
        this.data.unshift(book);
        this.adminService.clearBook();
        localStorage.setItem('books', JSON.stringify(this.data));
      }
    });
    this.updateBook$ = this.adminService.getupdatedBook().subscribe(updatedBook => {
      if (updatedBook) {
        this.data = this.data.map(book => updatedBook.isbn === book.isbn ? updatedBook : book);
        this.currentPage = this.adminService.pageOnEdit;
        this.adminService.pageOnEdit = 1; // Reset to first page after update
        this.adminService.clearupdatedBook();
        localStorage.setItem('books', JSON.stringify(this.data));
      }
    });
  }

  get paginatedData(): Book[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

  trackByIsbn(index: number, book: Book): string {
    return book.isbn;
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  getTransactionData(book: Book, field: keyof Transaction, isReturned: boolean): string {
    return book.transactions
      ?.filter(t => isReturned ? t.returnedDate : t.borrowedDate)
      .map(t => t[field])
      .filter(Boolean)
      .join(', ') || (isReturned ? 'No Returned' : 'No Transactions');
  }

  goToAddBook(): void {
    this.router.navigate(['/add-book']);
  }

  onEdit(book: Book) {
    this.adminService.pageOnEdit = this.currentPage;
    this.router.navigate(['/edit-book', book.isbn]); // or use book.id if applicable
  }

  openUserDetails(userId: string): void {
  const user = this.userData.find(u => u.id === userId);
  if (user) {
    this.dialog.open(PreviewUserDetailsComponent, {
      width: '500px',
      data: user
    });
  }
}

  ngOnDestroy(): void {
    if (this.addBook$) {
      this.addBook$.unsubscribe();
    }
    if (this.updateBook$) {
      this.updateBook$.unsubscribe();
    }
  }
}

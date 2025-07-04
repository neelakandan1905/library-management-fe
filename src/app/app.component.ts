import { AdminService } from './admin/admin.service';
import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { books } from '../hardcoded-data/books-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../model/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'library-management-fe';
}

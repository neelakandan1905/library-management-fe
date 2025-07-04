import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../../model/book.model';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-add',
  standalone: false,
  templateUrl: './admin-add.component.html',
  styleUrl: './admin-add.component.scss'
})
export class AdminAddComponent implements OnInit {
  // create book code
  bookForm: FormGroup;
  isEditMode: boolean = false;
  isbn: string | null = null;
  editBookData: Book | null = null;

  constructor(private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn: ['', Validators.required],
      pages: [null, [Validators.required, Validators.min(1)]],
      publication_year: [null, [Validators.required, Validators.min(1000)]],
      genres: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.paramMap.get('isbn');
    if (this.isbn) {
      this.isEditMode = true;
      const existingBook = this.adminService.getBookByIsbn(this.isbn);
      if (existingBook) {
        this.bookForm.patchValue(existingBook);
        this.bookForm.get('isbn')?.disable(); // Disable ISBN during edit
        this.editBookData = existingBook;
      }
    }
  }

  onSubmit() {
    if (this.bookForm.valid) {
      let formData: Book;
      if (!this.isEditMode) {
        formData = {
          ...this.bookForm.value,
          genres: this.bookForm.controls['genres'].touched ?
            this.bookForm.value.genres.split(',').map((g: string) => g.trim()) : this.bookForm.value.genres,
          currentStatus: 'available',
          transactions: []
        };
      } else {
        formData = {
          ...this.editBookData,
          ...this.bookForm.getRawValue() as Book,
          genres: this.bookForm.controls['genres'].touched ?
            this.bookForm.value.genres.split(',').map((g: string) => g.trim()) : this.bookForm.getRawValue().genres,
        };
      }
      if (this.isEditMode) {
        this.adminService.updateBook(formData);
      } else {
        this.adminService.addBook(formData);
      }
      this.router.navigate(['/admin']);
      this.bookForm.reset();

      // Your save logic goes here (to local array, or file/DB via backend)
    } else {
      this.bookForm.markAllAsTouched();
    }
  }

  onBack(): void {
    if (this.bookForm.dirty) {
      const confirmLeave = confirm('You have unsaved changes. Are you sure you want to go back?');
      if (!confirmLeave) return;
    }
    this.router.navigate(['/admin']);
  }


}

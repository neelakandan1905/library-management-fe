import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number = 0;
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;
  totalPages: number = 0;
  // @Input() set totalItems(data: number) {
  //   this.totalPages = Math.ceil(data / this.itemsPerPage);
  //   this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  // }

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  pages: number[] = [];

  ngOnInit(): void {
    if (this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  onPageChange(page: number): void {
    if (page > this.totalPages) return;
    this.pageChange.emit(page);
  }

}

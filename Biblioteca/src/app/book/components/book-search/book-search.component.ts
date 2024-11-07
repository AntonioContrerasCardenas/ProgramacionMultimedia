import { Component, EventEmitter, inject, Output } from '@angular/core';
import { BookServiceService } from '../../../core/services/book-service.service';

@Component({
  selector: 'book-search',
  standalone: true,
  imports: [],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss',
})
export class BookSearchComponent {
  private bookService = inject(BookServiceService);

  emitSearch(searchTerm: string): void {
    setTimeout(() => {
      this.bookService.filterBooks(searchTerm);
    }, 300);
  }
}

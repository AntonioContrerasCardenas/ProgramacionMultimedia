import { Component, inject, Input } from '@angular/core';
import { BookServiceService } from '../../../core/services/book-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  private booksService = inject(BookServiceService);

  public books$ = this.booksService.books$;
}

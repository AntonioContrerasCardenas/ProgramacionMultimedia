import { Component, Input } from '@angular/core';
import { BookInterface } from '../../../core/interfaces/book.interface';

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  @Input({ required: true })
  public books: BookInterface[] = [];
}

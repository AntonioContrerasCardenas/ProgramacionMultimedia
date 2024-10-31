import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'book-search',
  standalone: true,
  imports: [],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss',
})
export class BookSearchComponent {
  @Output()
  public searchValue = new EventEmitter<string>();

  emitSearch(searchTerm: string): void {
    this.searchValue.emit(searchTerm);
  }
}

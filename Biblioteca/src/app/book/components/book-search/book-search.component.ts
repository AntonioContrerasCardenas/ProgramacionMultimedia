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

  private debouncer: any;

  emitSearch(searchTerm: string): void {
    clearTimeout(this.debouncer);

    this.debouncer = setTimeout(() => {
      this.searchValue.emit(searchTerm);
    }, 300);
  }
}

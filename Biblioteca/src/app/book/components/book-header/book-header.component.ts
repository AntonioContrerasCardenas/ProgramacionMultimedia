import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'book-header',
  standalone: true,
  imports: [],
  templateUrl: './book-header.component.html',
  styleUrl: './book-header.component.scss',
})
export class BookHeaderComponent {
  @Output()
  loginClicked = new EventEmitter<void>();

  login(): void {
    this.loginClicked.emit();
  }
}

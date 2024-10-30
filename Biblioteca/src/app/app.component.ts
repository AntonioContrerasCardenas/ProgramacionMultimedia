import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookLayoutComponent } from './book/layout/book-layout/book-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Biblioteca';
}

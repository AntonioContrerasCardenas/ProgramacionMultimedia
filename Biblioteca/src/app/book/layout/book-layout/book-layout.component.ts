import { Component } from '@angular/core';
import { BookHeaderComponent } from '../../components/book-header/book-header.component';
import { BookLoggedPageComponent } from '../../page/book-logged-page/book-logged-page.component';
import { BookLoginComponent } from '../../components/book-login/book-login.component';

@Component({
  selector: 'book-layout',
  standalone: true,
  imports: [BookHeaderComponent, BookLoggedPageComponent, BookLoginComponent],
  templateUrl: './book-layout.component.html',
  styleUrl: './book-layout.component.scss',
})
export class BookLayoutComponent {
  //public isLogged: boolean = false;
  public isLogged: boolean = true;
  toggleButton(): void {
    this.isLogged = !this.isLogged;
  }

  setLogged(): void {
    this.isLogged = true;
  }
}

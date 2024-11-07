import { Component, inject, OnInit } from '@angular/core';
import { BookSearchComponent } from '../../components/book-search/book-search.component';
import { BookListComponent } from '../../components/book-list/book-list.component';
import { BookServiceService } from '../../../core/services/book-service.service';

@Component({
  selector: 'book-logged-page',
  standalone: true,
  imports: [BookSearchComponent, BookListComponent],
  templateUrl: './book-logged-page.component.html',
  styleUrl: './book-logged-page.component.scss',
})
export class BookLoggedPageComponent {}

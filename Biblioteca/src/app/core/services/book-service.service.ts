import { inject, Injectable } from '@angular/core';
import { BookInterface, GetBooksResponse } from '../interfaces/book.interface';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  private http = inject(HttpClient);

  private BOOKS: BookInterface[] = [];

  private books = new BehaviorSubject<BookInterface[]>([]);

  public books$ = this.books.asObservable();

  constructor() {
    this.getBooks().subscribe((books) => {
      this.setBooks(books);
    });
  }

  private getBooks(): Observable<BookInterface[]> {
    return this.http
      .get<GetBooksResponse>(
        'https://openlibrary.org/search/authors.json?q=programming&limit=20'
      )
      .pipe(
        map((response: GetBooksResponse) => {
          return response.docs.map((doc): BookInterface => {
            return {
              titulo: doc.name,
              autor: doc.top_work,
              isbn: doc.key,
              fechePrestamo: new Date(),
            };
          });
        }),
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      );
  }

  private setBooks(data: BookInterface[]) {
    this.books.next(data);
    this.BOOKS = data;
  }

  public filterBooks(searchTerm: string): void {
    this.books.next(
      this.BOOKS.filter((book) => {
        return book.titulo.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }
}

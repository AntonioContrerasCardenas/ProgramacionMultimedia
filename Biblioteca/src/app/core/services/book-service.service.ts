import { Injectable } from '@angular/core';
import { BookInterface } from '../interfaces/book.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  private BOOKS: BookInterface[] = [
    {
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      isbn: '978-3-16-148410-0',
      fechePrestamo: new Date('2023-01-15'),
    },
    {
      titulo: 'El amor en los tiempos del cólera',
      autor: 'Gabriel García Márquez',
      isbn: '978-0-06-088328-7',
      fechePrestamo: new Date('2023-02-10'),
    },
    {
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      isbn: '978-3-16-148410-1',
      fechePrestamo: new Date('2023-03-05'),
    },
    {
      titulo: '1984',
      autor: 'George Orwell',
      isbn: '978-0-452-28423-4',
      fechePrestamo: new Date('2023-04-20'),
    },
    {
      titulo: 'Moby Dick',
      autor: 'Herman Melville',
      isbn: '978-0-14-243724-7',
      fechePrestamo: new Date('2023-05-30'),
    },
    {
      titulo: 'Orgullo y prejuicio',
      autor: 'Jane Austen',
      isbn: '978-0-19-953556-9',
      fechePrestamo: new Date('2023-06-15'),
    },
    {
      titulo: 'El viejo y el mar',
      autor: 'Ernest Hemingway',
      isbn: '978-0-684-80122-0',
      fechePrestamo: new Date('2023-07-01'),
    },
    {
      titulo: 'Crónica de una muerte anunciada',
      autor: 'Gabriel García Márquez',
      isbn: '978-0-06-088328-6',
      fechePrestamo: new Date('2023-07-20'),
    },
    {
      titulo: 'Los miserables',
      autor: 'Victor Hugo',
      isbn: '978-0-14-044430-8',
      fechePrestamo: new Date('2023-08-10'),
    },
    {
      titulo: 'El proceso',
      autor: 'Franz Kafka',
      isbn: '978-0-14-118276-0',
      fechePrestamo: new Date('2023-08-30'),
    },
    {
      titulo: 'Fahrenheit 451',
      autor: 'Ray Bradbury',
      isbn: '978-1-4516-7331-9',
      fechePrestamo: new Date('2023-09-15'),
    },
    {
      titulo: 'El guardián entre el centeno',
      autor: 'J.D. Salinger',
      isbn: '978-0-316-76948-0',
      fechePrestamo: new Date('2023-09-30'),
    },
    {
      titulo: 'La casa de los espíritus',
      autor: 'Isabel Allende',
      isbn: '978-0-06-090502-4',
      fechePrestamo: new Date('2023-10-10'),
    },
    {
      titulo: 'Rayuela',
      autor: 'Julio Cortázar',
      isbn: '978-1-55783-759-8',
      fechePrestamo: new Date('2023-10-20'),
    },
    {
      titulo: 'El túnel',
      autor: 'Ernesto Sabato',
      isbn: '978-84-376-0492-3',
      fechePrestamo: new Date('2023-10-30'),
    },
    {
      titulo: 'El principito',
      autor: 'Antoine de Saint-Exupéry',
      isbn: '978-3-16-148410-2',
      fechePrestamo: new Date('2023-11-05'),
    },
    {
      titulo: 'Siddhartha',
      autor: 'Hermann Hesse',
      isbn: '978-0-553-21357-9',
      fechePrestamo: new Date('2023-11-15'),
    },
    {
      titulo: 'Cumbres borrascosas',
      autor: 'Emily Brontë',
      isbn: '978-0-19-953450-0',
      fechePrestamo: new Date('2023-11-20'),
    },
    {
      titulo: 'El gran Gatsby',
      autor: 'F. Scott Fitzgerald',
      isbn: '978-0-7432-7356-5',
      fechePrestamo: new Date('2023-12-01'),
    },
    {
      titulo: 'La metamorfosis',
      autor: 'Franz Kafka',
      isbn: '978-0-14-243712-4',
      fechePrestamo: new Date('2023-12-15'),
    },
    {
      titulo: 'Harry Potter y la piedra filosofal',
      autor: 'J.K. Rowling',
      isbn: '978-0-545-01022-1',
      fechePrestamo: new Date('2023-12-25'),
    },
  ];

  private books = new BehaviorSubject<BookInterface[]>([...this.BOOKS]);

  public books$ = this.books.asObservable();

  public filterBooks(searchTerm: string): void {
    this.books.next(
      this.BOOKS.filter((book) => {
        return book.titulo.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  AllCategoriesResponse,
  Category,
} from '../interfaces/questions.interfaces';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/categories';

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<AllCategoriesResponse>(this.apiUrl).pipe(
      map((response) => {
        return response.categories;
      })
    );
  }
}

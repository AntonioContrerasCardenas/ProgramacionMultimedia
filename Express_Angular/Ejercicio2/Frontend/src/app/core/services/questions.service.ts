import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  CountQuestionsResponse,
  Question,
  QuestionResponse,
  QuestionsByCategoryPaginatedResponse,
} from '../interfaces/questions.interfaces';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/questions';

  private _questions: Question[] = [];
  private _questions$ = new BehaviorSubject<Question[]>(this._questions);
  public readonly questions$ = this._questions$.asObservable();

  constructor() {
    this.getRandomsQuestions();
  }

  getRandomsQuestions(): void {
    // console.log({ questions: this._questions });
    this.generateRandomQuestions()
      .pipe(
        map((response) => {
          // console.log(response.questions);
          return response.questions;
        }),
        catchError((error) => {
          return of([]);
        })
      )
      .subscribe((questions: Question[]) => {
        this._questions = questions;
        this._questions$.next(this._questions);
      });
  }

  generateRandomQuestions(): Observable<QuestionResponse> {
    return this.http.get<QuestionResponse>(`${this.apiUrl}/random`);

    //Para mas preguntas :
    //return this.http.get<QuestionResponse>(`${this.apiUrl}/random?limit=3`);
  }

  getQuestionsByCategory(
    categoryId: string,
    page: number = 1,
    limit: number = 2
  ): Observable<QuestionsByCategoryPaginatedResponse> {
    return this.http.get<QuestionsByCategoryPaginatedResponse>(
      `${this.apiUrl}/category/paginated?limit=${limit}&category=${categoryId}&page=${page}`
    );
  }

  getQuestionsByCategoryWithPagination(
    categoryId: string,
    page: number,
    total: number,
    perPage: number
  ): Observable<QuestionsByCategoryPaginatedResponse> {
    return this.http.get<QuestionsByCategoryPaginatedResponse>(
      `${this.apiUrl}/category/paginated?category=${categoryId}&page=${page}&total=${total}&perPage=${perPage}`
    );
  }

  getQuestionCountByCategory(categoryId: string): Observable<number> {
    return this.http
      .get<CountQuestionsResponse>(`${this.apiUrl}/count/${categoryId}`)
      .pipe(
        map((response) => {
          return response.count;
        })
      );
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Question, QuestionResponse } from '../interfaces/questions.interfaces';
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
    this.generateRandomQuestions()
      .pipe(
        map((response) => {
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
}

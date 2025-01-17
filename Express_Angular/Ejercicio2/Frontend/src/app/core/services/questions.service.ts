import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Question } from '../interfaces/questions.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/questions';

  generateRandomQuestion(): Observable<Question> {
    return this.http.get<Question>(`${this.apiUrl}/random`);
  }
}

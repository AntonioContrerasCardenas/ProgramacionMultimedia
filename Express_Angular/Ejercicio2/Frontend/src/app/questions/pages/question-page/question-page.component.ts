import { Component, inject } from '@angular/core';
import { QuestionsService } from '../../../core/services/questions.service';
import { Question } from '../../../core/interfaces/questions.interfaces';
import { QuestionCardComponent } from '../../components/question-card/question-card.component';

@Component({
  selector: 'question-page',
  standalone: true,
  imports: [QuestionCardComponent],
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.scss',
})
export class QuestionPageComponent {
  private questionService: QuestionsService = inject(QuestionsService);
  public question: Question = {} as Question;

  generateQuestions(): void {
    this.questionService
      .generateRandomQuestion()
      .subscribe((data: Question) => {
        this.question = data;
      });
  }
}

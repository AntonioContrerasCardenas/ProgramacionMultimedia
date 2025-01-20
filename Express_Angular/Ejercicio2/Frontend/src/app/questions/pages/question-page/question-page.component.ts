import { Component, inject, OnInit } from '@angular/core';
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
export class QuestionPageComponent implements OnInit {
  private questionService: QuestionsService = inject(QuestionsService);
  public questions: Question[] = [];

  ngOnInit(): void {
    this.questionService.questions$.subscribe((questions) => {
      this.questions = questions;
    });
  }

  generateQuestions(): void {
    this.questionService.getRandomsQuestions();
  }
}

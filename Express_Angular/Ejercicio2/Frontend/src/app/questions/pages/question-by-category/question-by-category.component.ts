import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../../core/interfaces/questions.interfaces';
import { QuestionsService } from '../../../core/services/questions.service';

@Component({
  selector: 'app-question-by-category',
  standalone: true,
  imports: [],
  templateUrl: './question-by-category.component.html',
  styleUrl: './question-by-category.component.scss',
})
export class QuestionByCategoryComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private questionService = inject(QuestionsService);

  public categoryId: string = '';
  public questions: Question[] = [];
  private currentPage: number = 1;
  private totalQuestions: number = 0;
  private questionsPerPage: number = 2;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params['id'];
      if (this.categoryId) this.loadQuestions();
    });
  }

  loadQuestions() {
    if (this.categoryId) {
      this.questionService
        .getQuestionsByCategory(
          this.categoryId,
          this.currentPage,
          this.questionsPerPage
        )
        .subscribe((response) => {
          this.questions = response.questions;
          this.totalQuestions = response.total;
        });
    }
  }

  nextPage() {
    if (this.currentPage * this.questionsPerPage < this.totalQuestions) {
      this.currentPage++;
      this.loadQuestions();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadQuestions();
    }
  }
}

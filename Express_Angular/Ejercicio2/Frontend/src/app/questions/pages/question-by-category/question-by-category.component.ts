import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../../core/interfaces/questions.interfaces';
import { QuestionsService } from '../../../core/services/questions.service';
import { QuestionCardComponent } from '../../components/question-card/question-card.component';
import { takeUntil } from 'rxjs';
import { AutoDestroyService } from '../../../core/services/auto-destroy.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-question-by-category',
  standalone: true,
  imports: [QuestionCardComponent, NgClass],
  templateUrl: './question-by-category.component.html',
  styleUrl: './question-by-category.component.scss',
})
export class QuestionByCategoryComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private questionService = inject(QuestionsService);
  private autoDestroy$ = inject(AutoDestroyService);

  public categoryId: string = '';
  public questions: Question[] = [];
  public currentPage: number = 1;
  private totalPages: number = 0;
  private questionsPerPage: number = 2;

  public questionsAnswered: number = 0;
  public questionsCorrect: number = 0;

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.autoDestroy$)).subscribe((params) => {
      this.categoryId = params['id'];
      if (this.categoryId) this.loadQuestions();
    });
  }

  onQuestionAnswered(isCorrect: boolean) {
    this.questionsAnswered++;
    isCorrect ? this.questionsCorrect++ : null;
  }

  loadQuestions() {
    if (this.categoryId) {
      this.questionService
        .getQuestionsByCategory(
          this.categoryId,
          this.currentPage,
          this.questionsPerPage
        )
        .pipe(takeUntil(this.autoDestroy$))
        .subscribe((response) => {
          this.questions = response.questions;
          this.totalPages = response.totalPages;
        });
    }
  }

  haveNextPage(): boolean {
    return this.currentPage < this.totalPages;
  }

  nextPage() {
    if (this.haveNextPage()) {
      this.currentPage++;
      this.loadQuestions();
    }
  }

  havePrevPage(): boolean {
    return this.currentPage > 1;
  }

  prevPage() {
    if (this.havePrevPage()) {
      this.currentPage--;
      this.loadQuestions();
    }
  }
}

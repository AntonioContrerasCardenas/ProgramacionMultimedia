import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AutoDestroyService } from '../../../core/services/auto-destroy.service';
import { QuestionsService } from '../../../core/services/questions.service';
import { Question } from '../../../core/interfaces/questions.interfaces';
import { takeUntil } from 'rxjs';
import { QuestionsInformationDisplayComponent } from '../../components/questions-information-display/questions-information-display.component';

@Component({
  selector: 'app-personal-questions',
  standalone: true,
  imports: [QuestionsInformationDisplayComponent],
  templateUrl: './personal-questions.component.html',
  styleUrl: './personal-questions.component.scss',
})
export class PersonalQuestionsComponent implements OnInit {
  private autoDestroy$ = inject(AutoDestroyService);
  private questionService = inject(QuestionsService);
  public questions: Question[] = [];

  ngOnInit(): void {
    this.questionService
      .getQuestionsOfUser()
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe(({ questions }) => {
        this.questions = questions;
      });
  }

  deleteQuestion(questionId: string) {
    this.questionService
      .deleteQuestion(questionId)
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe({
        next: () => {
          this.questions = this.questions.filter(
            (question) => question._id !== questionId
          );
        },
      });
  }
}

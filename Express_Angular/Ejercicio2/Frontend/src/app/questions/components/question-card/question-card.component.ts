import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Question } from '../../../core/interfaces/questions.interfaces';
import { NgClass } from '@angular/common';

@Component({
  selector: 'question-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardComponent implements OnChanges {
  @Input({ required: true })
  question: Question = {} as Question;

  public optionsSelected: string[] = [];
  public isCorrectAnswerSelected: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question']) {
      this.optionsSelected = [];
      this.isCorrectAnswerSelected = false;
    }
  }

  public checkAnswer(option: string) {
    if (this.isCorrect(option)) {
      this.isCorrectAnswerSelected = true;
    }
    if (!this.optionsSelected.includes(option)) {
      this.optionsSelected.push(option);
    }
  }

  public isCorrect(option: string): boolean {
    return option === this.question.answer;
  }

  public isSelected(option: string): boolean {
    return this.optionsSelected.includes(option);
  }
}

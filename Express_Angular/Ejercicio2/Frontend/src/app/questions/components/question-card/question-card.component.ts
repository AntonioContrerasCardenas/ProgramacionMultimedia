import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
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

  @Output() questionAnswered = new EventEmitter<boolean>();

  public optionsSelected: string[] = [];
  public isCorrectAnswerSelected: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question']) {
      this.optionsSelected = [];
      this.isCorrectAnswerSelected = false;
    }
  }

  public checkAnswer(option: string) {
    this.optionsSelected = [...this.question.options];

    const isCorrect = this.isCorrect(option);
    if (isCorrect) {
      this.isCorrectAnswerSelected = true;
    }

    this.questionAnswered.emit(isCorrect);
  }

  public isCorrect(option: string): boolean {
    return option === this.question.answer;
  }

  public isSelected(option: string): boolean {
    return this.optionsSelected.includes(option);
  }
}

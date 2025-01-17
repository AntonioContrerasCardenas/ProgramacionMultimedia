import { Component, Input } from '@angular/core';
import { Question } from '../../../core/interfaces/questions.interfaces';
import { NgClass } from '@angular/common';

@Component({
  selector: 'question-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.scss',
})
export class QuestionCardComponent {
  @Input({ required: true })
  question: Question = {} as Question;

  public optionSelected: string = '';

  public checkAnswer(option: string) {
    this.optionSelected = option;
  }

  public isCorrect(option: string): boolean {
    if (option === this.question.answer) return true;
    return false;
  }

  public isSelected(option: string): boolean {
    if (option === this.optionSelected) return true;
    return false;
  }
}

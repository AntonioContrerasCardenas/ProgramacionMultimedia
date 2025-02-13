import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../../core/interfaces/questions.interfaces';

@Component({
  selector: 'questions-information-display',
  standalone: true,
  imports: [],
  templateUrl: './questions-information-display.component.html',
  styleUrl: './questions-information-display.component.scss',
})
export class QuestionsInformationDisplayComponent {
  @Input()
  question: Question = {} as Question;

  @Output() questionToDelete = new EventEmitter<string>();

  public updateClicked = false;
  public deleteClicked = false;

  public deleteQuestion(questionId: string) {
    this.questionToDelete.emit(questionId);
  }
}

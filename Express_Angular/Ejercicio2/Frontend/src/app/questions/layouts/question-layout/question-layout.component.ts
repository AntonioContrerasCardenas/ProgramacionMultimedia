import { Component } from '@angular/core';
import { QuestionPageComponent } from '../../pages/question-page/question-page.component';

@Component({
  selector: 'question-layout',
  standalone: true,
  imports: [QuestionPageComponent],
  templateUrl: './question-layout.component.html',
  styleUrl: './question-layout.component.scss',
})
export class QuestionLayoutComponent {}

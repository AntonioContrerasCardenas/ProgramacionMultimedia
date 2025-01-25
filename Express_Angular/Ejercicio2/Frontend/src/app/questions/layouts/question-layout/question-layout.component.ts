import { Component, inject } from '@angular/core';
import { QuestionPageComponent } from '../../pages/question-page/question-page.component';
import { QuestionsService } from '../../../core/services/questions.service';
import { CategoriesDisplayComponent } from '../../pages/categories-display/categories-display.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'question-layout',
  standalone: true,
  imports: [CategoriesDisplayComponent, RouterOutlet],
  templateUrl: './question-layout.component.html',
  styleUrl: './question-layout.component.scss',
})
export class QuestionLayoutComponent {}

import { Component, inject } from '@angular/core';
import { QuestionPageComponent } from '../../pages/question-page/question-page.component';
import { QuestionsService } from '../../../core/services/questions.service';
import { CategoriesDisplayComponent } from '../../pages/categories-display/categories-display.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'question-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './question-layout.component.html',
  styleUrl: './question-layout.component.scss',
})
export class QuestionLayoutComponent {}

import { Routes } from '@angular/router';
import { CategoriesDisplayComponent } from './pages/categories-display/categories-display.component';
import { QuestionByCategoryComponent } from './pages/question-by-category/question-by-category.component';

export const QUESTIONS_ROUTES: Routes = [
  {
    path: '',
    component: CategoriesDisplayComponent,
  },
  {
    path: 'category/:id',
    component: QuestionByCategoryComponent,
  },
];

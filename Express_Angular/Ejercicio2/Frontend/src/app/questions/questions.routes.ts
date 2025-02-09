import { Routes } from '@angular/router';
import { CategoriesDisplayComponent } from './pages/categories-display/categories-display.component';
import { QuestionByCategoryComponent } from './pages/question-by-category/question-by-category.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateQuestionPageComponent } from './pages/create-question-page/create-question-page.component';

export const QUESTIONS_ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'createQuestion',
    component: CreateQuestionPageComponent,
  },
  {
    path: 'questions/:id/:number',
    component: QuestionByCategoryComponent,
  },
];

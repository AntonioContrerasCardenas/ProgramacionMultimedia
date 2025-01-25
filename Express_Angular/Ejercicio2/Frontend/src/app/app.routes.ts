import { Routes } from '@angular/router';
import { QuestionLayoutComponent } from './questions/layouts/question-layout/question-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: QuestionLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./questions/questions.routes').then(
            (m) => m.QUESTIONS_ROUTES
          ),
      },
    ],
  },
];

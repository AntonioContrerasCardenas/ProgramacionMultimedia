import { Routes } from '@angular/router';
import { QuestionLayoutComponent } from './questions/layouts/question-layout/question-layout.component';
import { AuthLayoutComponent } from './auth/layout/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
      },
    ],
  },
  {
    path: 'questions',
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
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

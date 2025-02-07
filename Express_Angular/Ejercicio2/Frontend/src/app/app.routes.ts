import { Routes } from '@angular/router';
import { QuestionLayoutComponent } from './questions/layouts/question-layout/question-layout.component';
import { AuthLayoutComponent } from './auth/layout/auth-layout/auth-layout.component';
import { privateGuard } from './core/guards/private.guard';
import { publicGuard } from './core/guards/public.guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [publicGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
      },
    ],
  },
  {
    path: 'home',
    component: QuestionLayoutComponent,
    canActivate: [privateGuard],
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

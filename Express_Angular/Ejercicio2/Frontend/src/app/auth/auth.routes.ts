import { Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

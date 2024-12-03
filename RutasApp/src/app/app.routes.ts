import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { privateGuard } from './core/guards/private.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'about',
    canActivate: [privateGuard],
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

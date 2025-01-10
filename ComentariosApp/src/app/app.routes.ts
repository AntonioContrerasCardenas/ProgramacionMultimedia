import { Routes } from '@angular/router';
import { FormComponent } from './auth/form/form.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { privateGuard } from './core/guards/private.guard';
import { publicGuard } from './core/guards/public.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [publicGuard],
    component: FormComponent,
  },
  {
    path: 'comments',
    canActivate: [privateGuard],
    component: CommentListComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

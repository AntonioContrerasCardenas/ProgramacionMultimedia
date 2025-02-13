import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const excludeUrl: string[] = ['api/auth/login', 'api/auth/register'];
  const authService = inject(AuthService);
  const router = inject(Router);
  const isExluded = excludeUrl.some((url) => req.url.includes(url));

  if (isExluded) return next(req);

  const token = authService.getToken();
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        authService.deleteToken();
        router.navigate(['/']);
      }

      return throwError(() => error);
    })
  );
};

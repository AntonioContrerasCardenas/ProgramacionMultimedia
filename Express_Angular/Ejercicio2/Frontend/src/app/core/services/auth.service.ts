import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  LoginResponse,
  RegisterResponse,
  User,
} from '../interfaces/auth.interfaces';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/auth';
  private isUserLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  public isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  constructor() {
    this.checkAuthStatus();
  }

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, {
        email,
        password,
      })
      .pipe(
        tap(({ user, token }) => {
          this.setAuthUser(user, token);
        })
        // catchError((error) => {
        //   console.error('Login failed', error);
        //   return of(null);
        // })
      );
  }

  register(name: string, email: string, password: string) {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, {
      name,
      email,
      password,
    });
  }

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  checkAuthStatus() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isUserLoggedIn.next(true);
    }
  }

  setAuthUser(user: User, token: string) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    this.isUserLoggedIn.next(true);
  }
}

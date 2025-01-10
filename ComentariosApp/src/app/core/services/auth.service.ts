import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('username', username);
      return true;
    }

    return false;
  }

  public isLogged(): boolean {
    return localStorage.getItem('username') !== null;
  }

  public logout(): void {
    localStorage.removeItem('username');
  }

  public getUsername(): string {
    return localStorage.getItem('username') || '';
  }
}

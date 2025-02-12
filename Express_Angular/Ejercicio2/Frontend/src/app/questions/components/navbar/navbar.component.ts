import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { AutoDestroyService } from '../../../core/services/auto-destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  private autoDestroy$ = inject(AutoDestroyService);

  logout() {
    this.authService
      .logOut()
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe({
        next: () => {
          this.authService.deleteToken();
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  logoutAll() {
    this.authService
      .logOutAll()
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe({
        next: () => {
          this.authService.deleteToken();
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}

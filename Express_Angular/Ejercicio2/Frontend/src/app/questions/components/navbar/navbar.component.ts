import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private router = inject(Router);

  goToHome() {
    this.router.navigate(['/']);
  }
}

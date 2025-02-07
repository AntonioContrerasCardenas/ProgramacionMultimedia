import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
interface Item {
  label: string;
  routerLink: string;
}
@Component({
  selector: 'auth-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public menuItems: Item[] = [
    { label: 'Login', routerLink: '/auth' },
    { label: 'Register', routerLink: '/auth/register' },
  ];
}

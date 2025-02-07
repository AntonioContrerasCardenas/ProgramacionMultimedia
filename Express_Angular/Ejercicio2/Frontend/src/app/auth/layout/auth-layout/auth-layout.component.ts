import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../component/navbar/navbar.component';

@Component({
  selector: 'auth-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {}

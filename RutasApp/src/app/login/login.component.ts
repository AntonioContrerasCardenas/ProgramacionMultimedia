import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public mensajeIngreso: string = '';

  public myForm: FormGroup = this.fb.group({
    username: ['admin', Validators.required],
    password: ['admin', Validators.required],
  });

  onSubmit(username: string, password: string): void {
    const isValid = this.authService.login(username, password);

    if (isValid) {
      this.mensajeIngreso = '';
      this.router.navigate(['/about']);
      return;
    }

    this.mensajeIngreso = 'Usuario o contraseña incorrectos';
    return;
  }
}

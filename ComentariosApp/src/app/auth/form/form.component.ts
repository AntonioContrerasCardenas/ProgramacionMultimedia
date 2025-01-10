import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
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
      this.router.navigate(['/comments']);
      return;
    }

    this.mensajeIngreso = 'Usuario o contraseña incorrectos';
    return;
  }
}

import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { AutoDestroyService } from '../../../core/services/auto-destroy.service';
import { takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  public errorMessage: string = '';

  private authService = inject(AuthService);
  private autoDestroy$ = inject(AutoDestroyService);
  private router = inject(Router);

  fb = inject(FormBuilder);
  myForm: FormGroup = this.fb.group({
    email: ['prueba@a.com', [Validators.required, Validators.email]],
    password: [
      'Pruebade8',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[0-9]/),
      ],
    ],
  });

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return '';

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'El campo es requerido';

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;

        case 'pattern':
          return 'El campo debe de tener minimo 1 numero';

        case 'email':
          return 'Introduzca un email correcto';
      }
    }

    return null;
  }

  isValidField(field: string): boolean | undefined {
    const fieldControl = this.myForm.get(field);
    return fieldControl?.touched && fieldControl.invalid;
  }

  onSubmit(): void {
    if (this.myForm.invalid) return;

    const { email, password } = this.myForm.value;

    this.authService
      .login(email, password)
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe({
        next: ({ user, token }) => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.error.error;
        },
      });
  }
}

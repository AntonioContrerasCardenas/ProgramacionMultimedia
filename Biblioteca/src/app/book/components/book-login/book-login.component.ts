import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'book-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-login.component.html',
  styleUrl: './book-login.component.scss',
})
export class BookLoginComponent {
  @Output()
  loginClicked = new EventEmitter<void>();

  fb = inject(FormBuilder);
  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
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

    console.log('Hola');
    this.loginClicked.emit();
  }
}

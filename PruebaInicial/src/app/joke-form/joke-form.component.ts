import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  output,
  Output,
} from '@angular/core';
import { JokeInterface } from '../core/interface/joke.interface';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'joke-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './joke-form.component.html',
  styleUrl: './joke-form.component.scss',
})
export class JokeFormComponent {
  // @Output()
  // public jokeNew = new EventEmitter<JokeInterface>();

  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    setup: ['', [Validators.required, Validators.minLength(6)]],
    punchline: ['', [Validators.required, Validators.minLength(6)]],
  });

  public getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return '';

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'El campo es requerido';

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;
        default:
          break;
      }
    }

    return null;
  }

  public isInValidField(field: string): boolean | undefined {
    const fieldControl = this.myForm.get(field);
    return fieldControl?.touched && fieldControl?.invalid;
  }

  onSubmit(setup: string, punchline: string) {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.addJoke(setup, punchline);
  }

  //Version anterior
  jokeNew = output<JokeInterface>();

  addJoke(setup: string, punchline: string) {
    this.jokeNew.emit({ setup, punchline });
  }
}

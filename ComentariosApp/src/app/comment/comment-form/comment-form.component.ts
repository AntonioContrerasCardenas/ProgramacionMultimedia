import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Comment } from '../../core/interfaces/comment.interfaces';

@Component({
  selector: 'comment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss',
})
export class CommentFormComponent {
  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  public getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return '';

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'El campo es requerido';
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

  onSubmit(title: string, body: string) {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const comment: Comment = {
      title,
      body,
    };

    this.addComment(comment);
  }

  @Output()
  commentNew = new EventEmitter<Comment>();

  addComment(comment: Comment) {
    this.commentNew.emit(comment);
  }
}

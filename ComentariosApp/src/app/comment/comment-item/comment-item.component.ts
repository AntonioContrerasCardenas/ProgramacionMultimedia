import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Comment } from '../../core/interfaces/comment.interfaces';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommentService } from '../../core/services/comment.service';

@Component({
  selector: 'comment-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.scss',
})
export class CommentItemComponent implements OnInit {
  @Input()
  public comment: Comment = {} as Comment;

  @Output()
  public commentDeleteEmit = new EventEmitter<number>();

  public updatedClick: boolean = false;

  private commentService = inject(CommentService);

  private fb = inject(FormBuilder);
  public myForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  ngOnInit(): void {
    this.myForm.get('title')?.setValue(this.comment.title);
    this.myForm.get('body')?.setValue(this.comment.body);
  }

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

  public isInValidField(field: string) {
    const fieldControl = this.myForm.get(field);
    return fieldControl?.touched && fieldControl.invalid;
  }

  commentDelete(id: number) {
    this.commentDeleteEmit.emit(id);
  }

  onSubmit(title: string, body: string) {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const comment: Comment = {
      id: this.comment.id,
      title,
      body,
    };

    this.commentService.updateComment(comment);
    this.updatedClick = false;
  }
}

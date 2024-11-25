import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../core/interfaces/comment.interfaces';

@Component({
  selector: 'comment-item',
  standalone: true,
  imports: [],
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.scss',
})
export class CommentItemComponent {
  @Input()
  public comment: Comment = {} as Comment;

  @Output()
  public commentDeleteEmit = new EventEmitter<number>();

  public updatedClick: boolean = false;

  commentDelete(id: number) {
    this.commentDeleteEmit.emit(id);
  }
}

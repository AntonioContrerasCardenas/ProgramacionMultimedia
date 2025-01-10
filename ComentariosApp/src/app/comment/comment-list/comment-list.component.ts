import { Component, inject, OnInit } from '@angular/core';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { CommentItemComponent } from '../comment-item/comment-item.component';
import { CommentService } from '../../core/services/comment.service';
import { Comment } from '../../core/interfaces/comment.interfaces';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'comment-list',
  standalone: true,
  imports: [CommentFormComponent, CommentItemComponent],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss',
})
export class CommentListComponent implements OnInit {
  private commentService = inject(CommentService);
  public comments: Comment[] = [];
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.commentService.comment$.subscribe(
      (comment) => (this.comments = comment)
    );
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id);
  }

  addComment(comment: Comment) {
    this.commentService.addComment(comment);
  }
}

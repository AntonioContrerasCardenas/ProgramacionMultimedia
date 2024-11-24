import { Injectable } from '@angular/core';
import { Comment, GetCommentResponse } from '../interfaces/comment.interfaces';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  private comments: Comment[] = [];
  private commentSubject: BehaviorSubject<Comment[]> = new BehaviorSubject<
    Comment[]
  >(this.comments);
  public comment$ = this.commentSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadComments();
  }

  private loadComments() {
    this.http
      .get<GetCommentResponse[]>(this.apiUrl)
      .pipe(
        map((commen: GetCommentResponse[]): Comment[] => {
          return commen.map((c: GetCommentResponse): Comment => {
            return {
              id: c.id,
              title: c.title,
              body: c.body,
            };
          });
        })
      )
      .subscribe((comments: Comment[]) => {
        this.comments = comments;
        this.commentSubject.next(this.comments);
      });
  }

  public addComment(comment: Comment): void {
    this.comments.push(comment);
    this.commentSubject.next([...this.comments]);
  }

  public deleteComment(id: number): void {
    this.comments = this.comments.filter((c: Comment) => c.id !== id);
    this.commentSubject.next([...this.comments]);
  }

  public updateComment(comment: Comment): void {
    const index = this.comments.findIndex((c: Comment) => c.id === comment.id);
    this.comments[index] = comment;
    this.commentSubject.next([...this.comments]);
  }
}

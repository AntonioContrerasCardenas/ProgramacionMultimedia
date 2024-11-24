export interface GetCommentResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  title: string;
  body: string;
}

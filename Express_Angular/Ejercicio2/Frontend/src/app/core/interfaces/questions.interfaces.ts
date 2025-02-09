export interface QuestionResponse {
  questions: Question[];
}

export interface AllCategoriesResponse {
  categories: Category[];
}

export interface Category {
  _id: string;
  name: string;
}

export interface QuestionsByCategoryPaginatedResponse {
  questions: Question[];
  totalPages: number;
}

export interface Question {
  _id: string;
  question: string;
  answer: string;
  options: string[];
  categoryId: string;
  __v: number;
}

export type Category2 =
  | 'sports'
  | 'entertainment'
  | 'music'
  | 'science'
  | 'technology'
  | 'history'
  | 'geography'
  | 'politics'
  | 'art'
  | 'movies'
  | 'books'
  | 'games';

export interface CountQuestionsResponse {
  count: number;
}

export interface BookInterface {
  titulo: string;
  autor: string;
  isbn: string;
  fechePrestamo: Date;
}

export interface GetBooksResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Doc[];
}

export interface Doc {
  alternate_names?: string[];
  key: string;
  name: string;
  top_subjects?: string[];
  top_work: string;
  type: Type;
  work_count: number;
  _version_: number;
}

export enum Type {
  Author = 'author',
}

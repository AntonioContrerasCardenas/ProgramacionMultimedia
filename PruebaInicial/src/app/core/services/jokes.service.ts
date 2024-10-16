import { Injectable, signal, WritableSignal } from '@angular/core';
import { Joke } from '../classes/joke';
import { JokeInterface } from '../interface/joke.interface';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private readonly initialJokes: Joke[] = [
    new Joke(
      '"What did the cheese say when it looked in the mirror?',
      'Hello me (Halloumi)'
    ),
    new Joke(
      'What kind of cheese do you use to disguise a small horse?',
      'Mask-a pony (Mascarpone)'
    ),
    new Joke(
      '"A kid threw a lump of cheddar at me',
      '"I thought ‘That’s not very mature"'
    ),
  ];

  //private _jokes: WritableSignal<Joke[]> = signal<Joke[]>([]);
  private jokes: WritableSignal<Joke[]> = signal<Joke[]>(this.initialJokes);

  getJokes(): WritableSignal<Joke[]> {
    return this.jokes;
  }

  addJoke({ setup, punchline }: JokeInterface) {
    if (setup != '' && punchline != '')
      this.jokes.update((jokes) => [...jokes, new Joke(setup, punchline)]);
  }

  setInitialJokes() {
    this.jokes.set(this.initialJokes);
  }

  deleteJoke(id: number) {
    this.jokes.update((jokes) => jokes.filter((joke) => joke.id !== id));
  }
}

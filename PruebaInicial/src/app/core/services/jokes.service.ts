import { Injectable, signal, WritableSignal } from '@angular/core';
import { Joke } from '../classes/joke';
import { JokeInterface } from '../interface/joke.interface';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private jokes: WritableSignal<Joke[]> = signal<Joke[]>([]);

  constructor() {
    this.jokes.set([
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
    ]);
  }

  getJokes(): WritableSignal<Joke[]> {
    return this.jokes;
  }

  addJoke({ setup, punchline }: JokeInterface) {
    if (setup != '' && punchline != '')
      this.jokes.update((jokes) => [...jokes, new Joke(setup, punchline)]);
  }

  deleteJoke(jokeToDelete: Joke) {
    this.jokes.update((jokes) => jokes.filter((joke) => joke != jokeToDelete));
  }
}

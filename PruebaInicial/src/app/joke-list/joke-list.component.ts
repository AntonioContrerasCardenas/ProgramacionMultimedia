import { NgFor } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Joke } from '../core/classes/joke';
import { JokeItemComponent } from '../joke-item/joke-item.component';
import { JokeFormComponent } from '../joke-form/joke-form.component';
import { JokeInterface } from '../core/interface/joke.interface';
import { JokesService } from '../core/services/jokes.service';

@Component({
  selector: 'joke-list',
  standalone: true,
  imports: [NgFor, JokeItemComponent, JokeFormComponent],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.scss',
})
export class JokeListComponent {
  public jokes: WritableSignal<Joke[]> = signal<Joke[]>([]);
  private jokeService = inject(JokesService);

  constructor() {
    this.jokes = this.jokeService.getJokes();
  }

  addJoke({ setup, punchline }: JokeInterface) {
    if (setup != '' && punchline != '')
      this.jokeService.addJoke({ setup, punchline });
  }

  deleteJoke(joke: Joke) {
    this.jokeService.deleteJoke(joke);
  }
}

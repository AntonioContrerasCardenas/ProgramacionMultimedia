import { Component, input, Input, output } from '@angular/core';
import { Joke } from '../core/classes/joke';

@Component({
  selector: 'joke-item',
  standalone: true,
  imports: [],
  templateUrl: './joke-item.component.html',
  styleUrl: './joke-item.component.scss',
})
export class JokeItemComponent {
  @Input({ required: true })
  public joke: Joke = {} as Joke;

  jokeDelete = output<number>();

  delteJoke(id: number) {
    this.jokeDelete.emit(id);
  }

  // Nueva forma angular 18
  // public joke = input.required<Joke>();
}

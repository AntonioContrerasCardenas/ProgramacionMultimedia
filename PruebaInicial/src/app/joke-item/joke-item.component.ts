import { Component, Input } from '@angular/core';
import { Joke } from '../classes/joke';

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
}

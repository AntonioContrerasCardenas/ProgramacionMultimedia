import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  output,
  Output,
} from '@angular/core';
import { JokeInterface } from '../core/interface/joke.interface';

@Component({
  selector: 'joke-form',
  standalone: true,
  imports: [],
  templateUrl: './joke-form.component.html',
  styleUrl: './joke-form.component.scss',
})
export class JokeFormComponent {
  // @Output()
  // public jokeNew = new EventEmitter<JokeInterface>();

  jokeNew = output<JokeInterface>();

  addJoke(setup: string, punchline: string) {
    this.jokeNew.emit({ setup, punchline });
  }
}

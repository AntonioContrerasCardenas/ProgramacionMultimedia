import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  output,
  Output,
} from '@angular/core';
import { JokeInterface } from '../core/interface/joke.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    setup: ['', [Validators.required, Validators.minLength(6)]],
    punchline: ['', [Validators.required, Validators.minLength(6)]],
  });

  jokeNew = output<JokeInterface>();

  addJoke(setup: string, punchline: string) {
    this.jokeNew.emit({ setup, punchline });
  }
}

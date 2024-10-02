import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Joke } from './joke';

@Component({
  selector: 'joke-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.scss',
})
export class JokeListComponent {
  public jokes: Joke[];

  constructor() {
    this.jokes = [
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
        '"I thought ‘That’s not very mature'
      ),
    ];
  }
}

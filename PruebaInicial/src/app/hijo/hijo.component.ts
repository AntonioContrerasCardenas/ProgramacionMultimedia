import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Joke {
  setup: string;
  punchline: string;
}

@Component({
  selector: 'hijo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss',
})
export class HijoComponent {
  // public contador: number = 0;
  public show: boolean = false;
  public text: string = 'Ocultar texto';

  jokes: Joke[];

  constructor() {
    this.jokes = [
      {
        setup: 'What did the cheese say when it looked in the mirror?',
        punchline: 'Hello-Me (Halloumi)',
      },
      {
        setup: 'What kind of cheese do you use to disguise a small horse?',
        punchline: 'Mask-a-pony (Mascarpone)',
      },
      {
        setup: 'A kid threw a lump of cheddar at me',
        punchline: 'I thought ‘That’s not very mature’',
      },
    ];
  }

  public toggleButton(): void {
    this.show = !this.show;
    this.text = this.show ? 'Mostrar texto' : 'Ocultar texto';
  }
}

import { Component } from '@angular/core';
import { ReplaceWordsPipe } from '../core/pipes/replace-words.pipe';

@Component({
  selector: 'palabras-prohibidas',
  standalone: true,
  imports: [ReplaceWordsPipe],
  templateUrl: './palabras-prohibidas.component.html',
  styleUrl: './palabras-prohibidas.component.scss',
})
export class PalabrasProhibidasComponent {
  public frase: string = 'Hola boo menudo damn el hell';
  public bannedWords: string = 'boo,damn,hell';
}

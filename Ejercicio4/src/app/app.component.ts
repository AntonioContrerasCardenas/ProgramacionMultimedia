import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PalabrasProhibidasComponent } from './palabras-prohibidas/palabras-prohibidas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PalabrasProhibidasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Ejercicio4';
}

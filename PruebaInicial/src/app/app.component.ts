import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PruebaInicial';
}

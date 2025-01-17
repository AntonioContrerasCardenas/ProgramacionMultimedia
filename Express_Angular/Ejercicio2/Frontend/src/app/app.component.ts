import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionLayoutComponent } from './questions/layouts/question-layout/question-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestionLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Frontend';
}

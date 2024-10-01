import { Component } from '@angular/core';

@Component({
  selector: 'hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss',
})
export class HijoComponent {
  // public contador: number = 0;
  public show: boolean = false;
  public text: string = 'Ocultar texto';

  constructor() {}

  // public changeValue(value: number) {
  //   this.contador += value;
  // }

  public toggleButton(): void {
    this.show = !this.show;
    this.text = this.show ? 'Mostrar texto' : 'Ocultar texto';
  }
}

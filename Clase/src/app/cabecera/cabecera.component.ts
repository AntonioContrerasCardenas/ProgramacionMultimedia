import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { UpperGreenDirective } from '../core/directivas/upper-green.directive';

@Component({
  selector: 'cabecera',
  standalone: true,
  imports: [UpperGreenDirective],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.scss',
})
export class CabeceraComponent {
  @Input()
  public urlLogo: string = 'logos/logo1.png';
}

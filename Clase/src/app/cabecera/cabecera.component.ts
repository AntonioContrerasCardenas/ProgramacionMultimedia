import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'cabecera',
  standalone: true,
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.scss',
})
// Solucion3
//  implements AfterViewInit
export class CabeceraComponent {
  // Solucion1;
  @Input()
  public urlLogo: string = 'logos/logo1.png';
  // -------------------------------------------
  // Solucion3
  // @ViewChild('imga')
  // child!: ElementRef<HTMLImageElement>;
  // ngAfterViewInit(): void {
  //   this.child.nativeElement.src = 'logos/logo1.png';
  //}
}

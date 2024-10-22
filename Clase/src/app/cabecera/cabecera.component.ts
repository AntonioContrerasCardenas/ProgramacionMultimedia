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

  personas = [
    {
      nombre: 'Juan',
      edad: 30,
      direccion: {
        calle: 'Calle Mayor',
        numero: 10,
        ciudad: 'Madrid',
        pais: 'España',
      },
      hobbies: ['Leer', 'Correr', 'Cocinar'],
      activo: true,
    },
    {
      nombre: 'Ana',
      edad: 25,
      direccion: {
        calle: 'Avenida de la Constitución',
        numero: 20,
        ciudad: 'Sevilla',
        pais: 'España',
      },
      hobbies: ['Bailar', 'Viajar'],
      activo: false,
    },
    {
      nombre: 'Pedro',
      edad: 40,
      direccion: {
        calle: 'Plaza del Sol',
        numero: 5,
        ciudad: 'Barcelona',
        pais: 'España',
      },
      hobbies: ['Pintar', 'Pescar', 'Jardinería'],
      activo: true,
    },
    {
      nombre: 'María',
      edad: 35,
      direccion: {
        calle: 'Calle de las Flores',
        numero: 12,
        ciudad: 'Valencia',
        pais: 'España',
      },
      hobbies: ['Fotografía', 'Escribir'],
      activo: true,
    },
  ];
}

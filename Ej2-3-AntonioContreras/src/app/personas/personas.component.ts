import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

interface Direccion {
  calle: string;
  numero: number;
  ciudad: string;
  pais: string;
}

interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
  hobbies: string[];
  activo: boolean;
}

@Component({
  selector: 'personas',
  standalone: true,
  imports: [NgClass],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.scss',
})
export class PersonasComponent {
  public hidden: boolean = false;
  public isClassAplicated: boolean = false;

  public personas: Persona[] = [
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

  public toggleBtnHidde(): void {
    this.hidden = !this.hidden;
  }
  public toggleBtnClass(): void {
    this.isClassAplicated = !this.isClassAplicated;
  }
}

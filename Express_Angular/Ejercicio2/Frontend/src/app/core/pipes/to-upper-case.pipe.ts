import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpperCase',
  standalone: true,
})
export class ToUpperCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }
}

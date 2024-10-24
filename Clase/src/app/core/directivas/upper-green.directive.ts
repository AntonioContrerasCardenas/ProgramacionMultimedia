import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[upperGreen]',
  standalone: true,
})
export class UpperGreenDirective {
  @Input('upperGreen') borderColor: string = 'green';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'text-transform',
      'uppercase'
    );

    this.renderer.setStyle(
      this.el.nativeElement,
      'border',
      `2px solid ${this.borderColor}`
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'text-transform');

    this.renderer.removeStyle(this.el.nativeElement, 'border');
  }
}

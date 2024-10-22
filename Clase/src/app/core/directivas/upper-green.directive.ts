import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[upperGreen]',
  standalone: true,
})
export class UpperGreenDirective {
  private originalText: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.originalText = this.el.nativeElement.innerText;
    this.renderer.addClass(this.el.nativeElement, 'upperborder');
    this.renderer.setProperty(
      this.el.nativeElement,
      'innerText',
      this.originalText.toUpperCase()
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'upperborder');
    this.renderer.setProperty(
      this.el.nativeElement,
      'innerText',
      this.originalText
    );
  }
}

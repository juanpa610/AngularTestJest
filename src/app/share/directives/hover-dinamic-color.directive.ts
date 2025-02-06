import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverDinamicColor]',
  standalone: true
})
export class HoverDinamicColorDirective {

  @Input('appHoverDinamicColor')  hoverColor!: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseover', ) onMouseOver() {
    this.el.nativeElement.style.backgroundColor = this.hoverColor;
  }

  @HostListener('mouseout', ) onMouseOut() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}

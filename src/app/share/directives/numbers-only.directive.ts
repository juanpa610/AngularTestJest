import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
  standalone: true
})
export class NumbersOnlyDirective {

  @Input('appNumbersOnly') dinamicPattern!: RegExp;

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    if (this.dinamicPattern) {
      let pattern = new RegExp(this.dinamicPattern);
      const initalValue = this.el.nativeElement.value;
      this.el.nativeElement.value = initalValue.replace(pattern, '');

      if (initalValue !== this.el.nativeElement.value) {
        event.stopPropagation();
        const newEvent = new Event('input', { bubbles: true });
        this.el.nativeElement.dispatchEvent(newEvent);
      }
    }
  }

}
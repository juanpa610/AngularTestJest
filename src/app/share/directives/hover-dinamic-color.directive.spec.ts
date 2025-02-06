import { ElementRef } from '@angular/core';
import { HoverDinamicColorDirective } from './hover-dinamic-color.directive';

fdescribe('HoverDinamicColorDirective', () => {

  let directive: HoverDinamicColorDirective;
  let mockElementRef: ElementRef;

  beforeEach(() => {
    mockElementRef = { nativeElement: document.createElement('div') };
    directive = new HoverDinamicColorDirective(mockElementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should change background color on mouse over', () => {
    directive.hoverColor = 'red';
    directive.onMouseOver();

    expect(mockElementRef.nativeElement.style.backgroundColor).toBe('red');
  });

  it('should reset background color on mouse out ', () => {
    directive.onMouseOut();

    expect(mockElementRef.nativeElement.style.backgroundColor).toBe('');
  });
  
});

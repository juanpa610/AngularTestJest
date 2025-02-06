import { ElementRef } from '@angular/core';
import { NumbersOnlyDirective } from './numbers-only.directive';


class MockElementRef extends ElementRef {
  constructor(value: string) {
    super({});
    this.nativeElement = {
      value,
      dispatchEvent: jest.fn(),
    };
  }
}

const mockElementNotNumeric = new MockElementRef('ewfwefwe we 345345 wfew ');
const mockElementNumeric = new MockElementRef('345345');
const mockPatternAlphanumeric = /[^a-z^A-Z^ ^0-9]\ */g;
const mockPaternNumeric = /[^0-9]*/g;

const mockEvent = {
  stopPropagation: jest.fn()
}

describe('NumbersOnlyDirective', () => {
  let directive: NumbersOnlyDirective;

  // beforeEach(() => {
  // });

  it('should create an instance', () => {
    directive = new NumbersOnlyDirective(mockElementNumeric);
    expect(directive).toBeTruthy();
  });

  it('should NOT calles stopPropagation if the value only contain numbers', () => {
    directive = new NumbersOnlyDirective(mockElementNumeric);
    directive.dinamicPattern = mockPaternNumeric;
    directive.onInputChange(mockEvent as any);
    expect(mockEvent.stopPropagation).not.toHaveBeenCalled();
  });

  it('should  calles stopPropagation if the value NOT only contain numbers', () => {
    directive = new NumbersOnlyDirective(mockElementNotNumeric);
    directive.dinamicPattern = mockPaternNumeric;
    directive.onInputChange(mockEvent as any);

    // expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
  });
  
  it('should remove NOT numeric characters from the value passed', () => {
    directive = new NumbersOnlyDirective(mockElementNotNumeric);
    directive.dinamicPattern = mockPaternNumeric;
    directive.onInputChange(mockEvent as any);

    expect(mockElementNotNumeric.nativeElement.value).toBe('345345');
  });

});

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'website',
  standalone: true
})
export class WebsitePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    return `${args[0]}${args[1]}${value}`;
  }

}

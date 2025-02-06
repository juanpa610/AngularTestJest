import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'website',
  standalone: true
})
export class WebsitePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `https://${value}`;
  }

}

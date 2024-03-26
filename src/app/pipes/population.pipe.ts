import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population',
  standalone: true
})
export class PopulationPipe implements PipeTransform {

  transform(value: any): string {
    if (typeof value !== 'number') {
      return '';
    }
    if (value >= 1000000) {
      return (value / 1000000).toFixed(0) + 'M people';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(0) + 'k people';
    } else {
      return value.toString();
    }
  }
}

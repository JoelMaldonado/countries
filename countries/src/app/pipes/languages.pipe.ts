import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languages',
  standalone: true
})
export class LanguagesPipe implements PipeTransform {

  transform(value: any[]): string {
    if (!Array.isArray(value)) {
      return '';
    }

    return value.map(language => language.name).join(', ');
  }

}

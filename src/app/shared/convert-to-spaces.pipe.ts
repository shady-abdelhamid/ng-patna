import { Pipe, PipeTransform } from '@angular/core';

/** Converts any given character to whitespace */
@Pipe({
  name: 'convertToSpaces',
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}

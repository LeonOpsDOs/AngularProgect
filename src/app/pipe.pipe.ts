
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  public transform(value: number, locales: 'ru-RU' | 'en-US'): string {
    return value.toLocaleString(locales);
  }

}

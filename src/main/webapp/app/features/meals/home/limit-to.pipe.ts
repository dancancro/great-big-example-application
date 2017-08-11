/**
 * @module HomeModule
 */ /** */
import { Pipe, PipeTransform } from '@angular/core';
/**
 * @whatItDoes limits the given array to the first x items
 */
@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
  /**
   * limits the given array to the first `limit` items
   * @param input array
   * @param limit the number of items allowed to pass through the pipe
   */
  transform(value: Array<any>, limit: number): any {
    return value ? value.slice(0, limit) : [];
  }
}

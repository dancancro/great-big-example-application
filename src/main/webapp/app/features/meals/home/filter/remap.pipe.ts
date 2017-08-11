/**
 * @module HomeModule
 */ /** */
import { Pipe, PipeTransform } from '@angular/core';
/**
 * @whatItDoes Allows the reordering of an array in an `*ngFor` to effectively move the elements
 * into a different order without destroying and recreating the elements.
 */
@Pipe({
  name: 'remap'
})
export class RemapPipe implements PipeTransform {
  /**
   * Sorts the input according to each items `mapTo` property.
   */
  transform(value: any, mapTo = 'default'): any {
    if (value === null || value === undefined) { return; }
    return value.sort((a, b) => a.order[mapTo] > b.order[mapTo]);
  }
}

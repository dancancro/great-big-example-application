/**
 * @module HomeModule
 */ /** */
import { Injectable } from '@angular/core';
/**
 * @whatItDoes Provides common utiliies for the {@link HomeModule}
 */
@Injectable()
export class FilterUtilitiesService {
  /**
   * Coverts the input to camel case.
   * Examples:
   * - 'EquipmentClass name' => 'equipmentClassName'
   * - 'Equipment className' => 'equipmentClassName'
   * - 'equipment class name' => 'equipmentClassName'
   * - 'Equipment Class Name' => 'equipmentClassName'
   * @param input takes any multi-word string
   * @see http://stackoverflow.com/a/2970667/5357459
   */
  camelize(input: string): string {
    return input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) { return ''; }
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
}

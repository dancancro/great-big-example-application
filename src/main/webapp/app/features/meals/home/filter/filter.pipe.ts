/**
 * @module HomeModule
 */ /** */
import { Pipe, PipeTransform } from '@angular/core';

import { FilterUtilitiesService } from './filter-utilities.service';
import { StopWords } from './stop-words';
/**
 * Filters data
 */
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * Creates the {@link FilterPipe}
   * @param filterUtilitiesService used for simple utility functions.
   */
  constructor(
    private filterUtilitiesService: FilterUtilitiesService) { }
  /**
   * Filters the input `value` according to the `filteredInput`.
   *
   * @param value input data
   * @param updateTime the timestamp of the last update. Needed because pure pipes do not
   * detect updates to object properties
   * @param filterInput the filter input used to filter the input data
   * @param filteredMeta.searchFields an input for the searchable fields of the value items
   * @param filteredMeta.count the total results returned by the transform
   * @param filteredMeta.query a readable list of the the active filter items
   * @param filteredMeta.prefilter a filter that runs on the data if no other filter inputs are
   * given.
   */
  transform(value: any, updateTime?: number, filterInput?: any, filteredMeta?: any): any {
    if (value === undefined || value === null) {
      filteredMeta.count = -1; // filter not active
      return;
    }
    const filtering = this.filtering(filterInput, filteredMeta);
    if (!filtering.any) {
      filteredMeta.count = -1; // filter not active
      const prefilter = filteredMeta.prefilter !== undefined ? filteredMeta.prefilter : () => true;
      return value.filter(prefilter);
    }
    const searchQueries: Array<string> = filtering.search ? this.getQueries(filterInput.search) : [];
    if (searchQueries.length === 0) { filtering.search = false; }
    // Meta data used to filter each item in the input `value`.
    const meta = {
      input: filterInput,
      searchQueries,
      checkSearch: filtering.search,
      searchFields: filteredMeta.searchFields
    };
    const filtered = value.filter((item) => this.filterItem(item, meta));
    filteredMeta.count = filtered.length;
    filteredMeta.query = this.readableQueries(filterInput);
    return filtered;
  }
  /**
   * Checks if the filterInput is trying to filter anything at all.
   */
  private filtering(filterInput, filteredMeta) {
    const status = { any: false, search: false };
    if (filterInput === undefined || filterInput === {}) { return status; }
    for (const key in filterInput) {
      if (key === 'search') {
        if (filterInput[key] !== '' && filteredMeta.searchFields.length > 0) {
          status.search = true;
        }
      } else {
        if (filterInput[key] !== 'all') { status.any = true; }
      }
    }
    if (status.search === true) { status.any = true; }
    return status;
  }
  /**
   * Takes a raw query string and returns an array of important words to use for search.
   */
  private getQueries(searchQueries: string): Array<string> {
    // Treat each word as a query and normalize to lowercase
    return searchQueries
      .toLowerCase()
      .split(' ')
      .filter((item) => !this.stopWords().includes(item));
  }
  /**
   * The actual filter logic applied to each item.
   *
   * - Filters out non search queries first (e.g. select box queries)
   * - If filtering by search, then it finds the searchable text and checks if it matches
   * any queries.
   */
  private filterItem(item: Object, meta) {
    // Filter by select terms
    if (Object.keys(meta.input)
      .filter((x) => x !== 'search' && meta.input[x] !== 'all')
      .find((y) => !this.flatArray(item[y]).includes(meta.input[y]))) { return; }
    // Filter by search terms
    if (meta.checkSearch) {
      const searchable = meta.searchFields
        .filter((x) => item[x] !== undefined)
        .reduce((a, b) => {
          return a + ' ' + this.flatArray(item[b])
            .reduce((e, f) => e + ' ' + f, '')
            .toLowerCase();
        }, '');
      if (meta.searchQueries.find((x) => !searchable.includes(x))) { return; }
    }
    return item;
  }
  /**
   * Normalizes a string or array of strings to a flat array of strings.
   */
  private flatArray(input): Array<string> {
    return [input].reduce((c, d) => c.concat(d), []);
  }
  /**
   * Converts queries into a readable list.
   */
  private readableQueries(inputs: Object): string {
    return Object.keys(inputs)
      .map((key) => inputs[key])
      .filter((input) => !['', 'all'].includes(input))
      .reduce(this.readableList, '');
  }
  /**
   * Reduce an array into a readable list
   */
  private readableList(prev: string, curr: string, i: number, a: Array<string>): string {
    const term: string = curr.toLowerCase();
    const grammer: string = (a.length === i + 1 && a.length > 1) ? ', and ' : i > 0 ? ', ' : '';
    return `${prev}${grammer}"${term}"`;
  }
  /**
   * Returns the current stop words.
   */
  private stopWords(): Array<string> {
    return StopWords;
  }
}

/**
 * @module HomeModule
 */ /** */
/**
 * Options used by the {@link FilterComponent}.
 */
export interface FilterOptions {
  items: FilterItems;
  searchFields: Array<string>;
}
/**
 * A single item used to filter.
 * - It can contain differernt ordering priorities if needed. For example, if the order for mobile
 * should be different.
 * - type sepcifies what kind of input should be show for this filter item.
 */
export interface FilterItems {
  [index: number]: {
    name: string;
    options: Array<string>;
    order?: {
      default: Number;
      [propName: string]: Number;
    };
    type: string;
  };
}

/**
 * @module CoreModule
 */

/** */

/**
 * Interface for individual recipe items
 */
export interface Recipe {
    id: number;
    slug: string;
    [propName: string]: any;
}

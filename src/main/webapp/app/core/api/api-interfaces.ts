/**
 * @module CoreModule
 */ /** */
import { Observable } from 'rxjs/Rx';

/**
 * Interface for individual recipe items
 */
export interface Recipe {
    id: number;
    slug: string;
    [propName: string]: any;
}

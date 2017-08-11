/**
 * @module HomeModule
 */ /** */
import { Component, Input, OnInit } from '@angular/core';
/**
 * @whatItDoes Displays a single recipe ad item.
 * @consumers {@link HomeModule}
 */
@Component({
    selector: 'c2c-recipe-ad',
    templateUrl: './recipe-ad.component.html',
    styleUrls: ['./recipe-ad.component.scss']
})
export class RecipeAdComponent implements OnInit {
    /**
     * The current blurb arrow color
     */
    arrowColor;
    /**
     * The colors options for the blurb arrow color.
     */
    arrowColors: Array<string> = ['#7ab9d0', '#dae109', '#ff8b94', '#67d165'];
    /**
     * The index from the parent loop used to decide the {@link arrowColor}
     */
    @Input() index;
    /**
     * Base data for the recipe including `id` and `title`.
     */
    @Input() recipe;
    /**
     * Cycles through the {@link arrowColors} based on the current index
     */
    updateColor() {
        const mod = this.index % this.arrowColors.length;
        this.arrowColor = this.arrowColors[mod];
    }
    /**
     * Run once on component creation
     *
     * - Gets the blurb arrow color
     */
    ngOnInit() {
        this.updateColor();
    }
}

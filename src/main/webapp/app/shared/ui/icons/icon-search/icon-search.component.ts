/**
 * @module UiModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Search icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/ios-search-strong.svg)
 */
@Component({
  selector: 'c2c-icon-search',
  templateUrl: './icon-search.component.html',
  styleUrls: ['./icon-search.component.scss']
})
export class IconSearchComponent {
  /**
   * Sets the icon's `aria-hidden` attribute to true
   */
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}

/**
 * @module UiModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Search icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/heart.svg)
 */
@Component({
  selector: 'c2c-icon-heart',
  templateUrl: './icon-heart.component.html',
  styleUrls: ['./icon-heart.component.scss']
})
export class IconHeartComponent {
  /**
   * Sets the icon's `aria-hidden` attribute to true
   */
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}

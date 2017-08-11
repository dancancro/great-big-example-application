/**
 * @module SharedModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Reset icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/ios-reload.svg)
 */
@Component({
  selector: 'c2c-icon-reset',
  templateUrl: './icon-reset.component.html',
  styleUrls: ['./icon-reset.component.scss']
})
export class IconResetComponent {
  /**
   * Sets the icon's `aria-hidden` attribute to true
   */
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}

/**
 * @module UiModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * @whatItDoes Returns a loading ui component with accessibility attributes.
 */
@Component({
  selector: 'c2c-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  /**
   * Sets the `role` attribute to alert.
   */
  @HostBinding('attr.role') role = 'alert';
  /**
   * Sets the `aria-busy` attribute to true.
   */
  @HostBinding('attr.aria-busy') busy = 'true';
  /**
   * Sets the `aria-label` to notifiy the user that there is dynamic content loading.
   */
  @HostBinding('attr.aria-label') label = 'loading indicator for dynamic content';
}

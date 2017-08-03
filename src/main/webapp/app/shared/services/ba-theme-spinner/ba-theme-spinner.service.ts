import {Injectable} from '@angular/core';

@Injectable()
export class BaThemeSpinner {

  private _selector = 'preloader';
  private _element: HTMLElement;

  constructor() {
    this._element = document.getElementById(this._selector);
  }

  public show(): void {
    this._element.style['display'] = 'block';
  }

  public hide(delay = 0): void {
    setTimeout(() => {
      this._element.style['display'] = 'none';
    }, delay);
  }
}

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Myhack5AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Myhack5AppComponent);

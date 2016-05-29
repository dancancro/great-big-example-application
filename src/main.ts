import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import {HTTP_PROVIDERS} from '@angular/http';

import { Myhack5AppComponent, environment } from './app/';
import { notes } from './app/notes/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Myhack5AppComponent, [
  ...HTTP_PROVIDERS,
  provideStore({notes}, {notes:[]})
]);

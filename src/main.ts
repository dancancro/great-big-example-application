import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import {HTTP_PROVIDERS} from '@angular/http';

import { AppComponent, environment } from './app/';
import { notes } from './app/notes/reducers/notes.reducer';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[
  ...HTTP_PROVIDERS,
  provideStore({notes}, {notes:[]})
]);

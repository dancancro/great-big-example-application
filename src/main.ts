import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';

import { AppComponent, environment } from './app/';
import { notes } from './app/notes/reducers/notes.reducer';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,provideStore({notes}, {notes:[]}));

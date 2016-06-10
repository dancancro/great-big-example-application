import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { runEffects } from '@ngrx/effects';
import {HTTP_PROVIDERS} from '@angular/http';

import { AppComponent, environment } from './app/';
import { notes } from './app/notes/';
import { NotesEffectsService } from './app/notes';
import { NotesDataService } from './app/notes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  ...HTTP_PROVIDERS,
  NotesDataService,
  provideStore({notes}, {notes:[]}),
  runEffects(NotesEffectsService) //comment this out if you want to explore the non @ngrx/effects approaches
]);

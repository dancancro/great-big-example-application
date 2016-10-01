import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
// import {HTTP_PROVIDERS} from '@angular/http';
// import { runEffects } from '@ngrx/effects';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { notes } from './app/notes/reducers/notes.reducer';
import { NotesDataService } from './app/notes/services/notes.data.service';
import { NotesEffectsService } from './app/notes/services/notes.effects.service';
import { EffectsModule } from '@ngrx/effects';
 if (environment.production) {
   enableProdMode();
 }

/*
-bootstrap(AppComponent,[
-  ...HTTP_PROVIDERS,
-  NotesDataService,
-  provideStore({notes}, {notes:[]}),
-  runEffects(NotesEffectsService)
-]);
*/

platformBrowserDynamic().bootstrapModule(AppModule);
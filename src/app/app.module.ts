import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesModule } from './notes/notes.module';
import { CoreModule } from './core/core.module';
import { routing }        from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    NotesModule,  // If new Feature modules are loaded you don't have to add them.
    CoreModule,   // NotesModule is here because it's designated first in app.routing
    routing
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

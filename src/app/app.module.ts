import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

/** TODO: remove when work-around is not needed*/
import 'hammerjs';

/* App Root */
import { AppPage } from './app.page';
import { RioLoginModalComponent } from './login/login-modal/login-modal.component';
import { RioLoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';

/* Feature Modules */
import { CoreModule } from './core/core.module';

/* Routing Module */
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    routing,
    RioLoginModule,
    MaterialModule.forRoot(),
    SharedModule
  ],
  declarations: [
    AppPage
  ],
  bootstrap: [
    AppPage
  ]
})
export class AppModule { }

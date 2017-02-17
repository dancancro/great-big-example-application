import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { Router } from '@angular/router';

/** TODO: remove when work-around is not needed*/
import 'hammerjs';

/* App Root */
import { AppPage } from './app.page';
import { RioLoginModalComponent } from './core/auth/login/login-modal/login-modal.component';
import { LoginModule } from './core/auth/login/login.module';
import { SharedModule } from './shared/shared.module';
import { AppRouting } from './app.routing';

/* Feature Modules */
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    AppRouting,
    LoginModule,
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

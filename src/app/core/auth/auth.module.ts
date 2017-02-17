import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    LoginModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]

})
export class AuthModule {
}

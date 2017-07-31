import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../shared';
import { CookieService } from 'angular2-cookie/core';

@Component({
    selector: 'jhi-auth',
    templateUrl: '../../shared/login/login.component.html'
})
export class SocialAuthComponent implements OnInit {

    constructor(
        private loginService: LoginService,
        private cookieService: CookieService,
        private router: Router
    ) {
    }

    ngOnInit() {
        let token = this.cookieService.get('social-authentication');
        if (token.length) {
            this.loginService.loginWithToken(token, false).then(() => {
                    this.cookieService.remove('social-authentication');
                 }, () => {
                    this.router.navigate(['social-register'], {queryParams: {'success': 'false'}});
            });
        }
    }
}

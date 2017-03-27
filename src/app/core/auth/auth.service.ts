import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.of(true).delay(500).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

/*

// from https://dzone.com/articles/managing-state-in-angular-with-ngrxstore
// src/app/core/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
// avoid name not found warnings
declare var Auth0Lock: any;
declare var localStorage: any;
@Injectable()
export class AuthService {
  lock = new Auth0Lock('[CLIENT_ID]', '[CLIENT_DOMAIN]', {
    auth: {
      redirectUrl: 'http://localhost:4200',
      responseType: 'token'
    }
  });
  userProfile: Object;
  constructor(private router: Router) {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
    // add callback for lock 'hash_parsed' event
    this.lock.on('hash_parsed', (authResult) => {
      if (authResult && authResult.idToken) {
        localStorage.setItem('id_token', authResult.idToken);
        // get user profile
        this.lock.getProfile(authResult.idToken, (error, profile) => {
          if (error) {
            throw Error('There was an error retrieving profile data.');
          }
          localStorage.setItem('profile', JSON.stringify(profile));
          this.userProfile = profile;
          // on successful authentication and profile retrieval, go to /create route
          this.router.navigate(['/create']);
        });
      } else if (authResult && !authResult.idToken) {
        // authentication failed: show Lock widget and log a warning
        this.login();
        console.warn(`There was an error authenticating: ${authResult}`);
      }
    });
  }
  login() {
    this.lock.show();
  }
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
  get authenticated(): boolean {
    // search for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }
}
*/

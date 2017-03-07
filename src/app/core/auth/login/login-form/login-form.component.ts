import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'rio-login-form',
  template: `
    <rio-form
      [group]="group"
      (onSubmit)="handleSubmit()">
      <rio-alert 
        qaid="qa-pending"
        testid="alert-pending"
        status='info'
        *ngIf="isPending">Loading...</rio-alert>
      <rio-alert
        qaid="qa-alert"
        testid="alert-error"
        status='error'*ngIf="hasError">
        Invalid username and password
      </rio-alert>

      <rio-form-group
        testid="login-username">
        <rio-label qaid="qa-uname-label">Username</rio-label> "admin"
        <rio-input
          qaid="qa-uname-input"
          inputType='text'
          placeholder='Username'
          [control]="username"></rio-input>
        <rio-form-error
          qaid="qa-uname-validation"
          [visible]="showNameWarning()">
          Username is required.
        </rio-form-error>
      </rio-form-group>

      <rio-form-group
        testid="login-password">
        <rio-label qaid="qa-password-label">Password</rio-label> "superuser"
        <rio-input
          qaid="qa-password-input"
          inputType='password'
          placeholder='Password'
          [control]="password"></rio-input>
        <rio-form-error
          qaid="qa-password-validation"
          [visible]="showPasswordWarning()">
          Password is required.
        </rio-form-error>
      </rio-form-group>

      <rio-form-group
        testid="login-submit">
        <rio-button
          qaid="qa-login-button"
          className="md-raised-button"
          type="submit">
          Login
        </rio-button>
        <rio-button
          qaid="qa-clear-button"
          className="md-raised-button"
          type="reset"
          (onClick)="reset()">
          Clear
        </rio-button>
      </rio-form-group>
    </rio-form>

  <div class="container">
    <div id="loginModal" aria-labelledby="loginModalLabel">
      <div class="signup-screen">
        <div class="space-bot text-center" id="loginModalLabel">
          <h1>Log in</h1>
          <div class="divider"></div>
        </div>
        <form class="form-register" method="post" name="register" novalidate (onSubmit)="handleSubmit()">
          <rio-alert 
            qaid="qa-pending"
            testid="alert-pending"
            status='info'
            *ngIf="isPending">Loading...</rio-alert>
          <rio-alert
            qaid="qa-alert"
            testid="alert-error"
            status='error'*ngIf="hasError">
            Invalid username and password
          </rio-alert>
          <div class="input-field col s6">
            <input id="email" type="email" name="email" ng-model="email" class="validate" required>
            <label for="email">Email</label>
          </div>
          <p class="alert alert-danger" ng-show="form-register.email.$error.email">Your email is invalid.</p>
          <div class="input-field col s6">
            <input id="password" type="password" name="password" ng-model="password" ng-minlength='6' class="validate" required>
            <label for="password">Password</label>
          </div>
          <div class="space-top text-center">
            <button ng-disabled="form-register.$invalid" class="waves-effect waves-light btn done">
               <i class="material-icons left">done</i> Log in
               </button>
            <button type="button" class="waves-effect waves-light btn cancel" ng-click="reset()">
               <i class="material-icons left">clear</i>Cancel
               </button>
          </div>
        </form>
      </div>
    </div>
  </div>



  `,
  styleUrls: ['./login-form.component.css']
})
export class RioLoginFormComponent {
  @Input() isPending: boolean;
  @Input() hasError: boolean;
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter();

  // needed to be public to allow access from fixture tests
  username: FormControl;
  password: FormControl;
  group: FormGroup;

  constructor(private builder: FormBuilder) {
    this.reset();
  }

  showNameWarning() {
    return this.username.touched
      && !this.username.valid
      && this.username.hasError('required');
  }

  showPasswordWarning() {
    return this.password.touched
      && !this.password.valid
      && this.password.hasError('required');
  }

  handleSubmit() {
    this.password.markAsTouched();
    this.username.markAsTouched();

    if (this.password.value && this.username.value) {
      this.onSubmit.emit(this.group.value);
    }
  }

  reset() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.hasError = false;
    this.isPending = false;
    this.group = this.builder.group({
      username: this.username,
      password: this.password
    });
  }
};

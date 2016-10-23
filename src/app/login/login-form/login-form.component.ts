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
        <rio-label qaid="qa-uname-label">Username</rio-label>
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
        <rio-label qaid="qa-password-label">Password</rio-label>
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
          className="mr1"
          type="submit">
          Login
        </rio-button>
        <rio-button
          qaid="qa-clear-button"
          className="bg-red"
          type="reset"
          (onClick)="reset()">
          Clear
        </rio-button>
      </rio-form-group>
    </rio-form>
  `
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

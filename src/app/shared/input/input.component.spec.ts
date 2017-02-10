import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';

import { SharedModule } from '../shared.module';
import { RioInputComponent } from './input.component';

describe('Component: Form Input', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(RioInputComponent);
    fixture.detectChanges();
  });

  it('should render the input with the correct property values',
    async(inject([], () => {
      fixture.whenStable().then(() => {
        fixture.componentInstance.control = new FormControl('');
        fixture.componentInstance.qaid = 'input-1';
        fixture.componentInstance.placeholder = 'test placeholder';
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#input-1')
          .getAttribute('placeholder')).toBe('test placeholder');
        expect(compiled.querySelector('#input-1')
          .getAttribute('type')).toBe('text');
        fixture.componentInstance.inputType = 'password';
        fixture.detectChanges();
        expect(compiled.querySelector('#input-1')
          .getAttribute('type')).toBe('password');
      });
    })
    ));

});

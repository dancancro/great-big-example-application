import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { RioFormErrorComponent } from './form-error.component';
import { SharedModule } from '../shared.module';

describe('Component: Form Error', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(RioFormErrorComponent);
    fixture.detectChanges();
  });

  it('should be hidden with visible is false',
    async(inject([], () => {
      fixture.whenStable().then(() => {
        fixture.componentInstance.qaid = 'form-error-1';
        const compiled = fixture.debugElement.nativeElement;
        fixture.componentInstance.visible = false;
        fixture.detectChanges();
        expect(compiled.querySelector('div').getAttribute('class')
          .split(' ')).toContain('display-none');
        fixture.componentInstance.visible = true;
        fixture.detectChanges();
        expect(compiled.querySelector('div').getAttribute('class')
          .split(' ')).not.toContain('display-none');
      });
    }))
  );
});


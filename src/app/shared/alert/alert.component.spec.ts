import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { RioAlertComponent } from './alert.component';
import { SharedModule } from '../shared.module';

describe('Component: Alert', () => {
  let fixture: ComponentFixture<RioAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(RioAlertComponent);
    fixture.detectChanges();
  });

  it('should default to info status', async(inject([], () => {
    fixture.whenStable().then(() => {
      expect(fixture.componentInstance.status).toBe('info');
    });
  })));

  it('should have the correct background class',
    async(inject([], () => {
      fixture.whenStable().then(() => {
        fixture.componentInstance.qaid = 'alert-1';
        const compiled = fixture.debugElement.nativeElement;
        const allBgClasses = ['bg-blue', 'bg-yellow', 'bg-green', 'bg-red'];
        const status_class = [
          {
            status: 'info',
            class: 'bg-blue',
          },
          {
            status: 'warning',
            class: 'bg-yellow',
          },
          {
            status: 'success',
            class: 'bg-green',
          },
          {
            status: 'error',
            class: 'bg-red',
          },
        ];

        status_class.map(item => {
          fixture.componentInstance.status = item.status;
          fixture.detectChanges();
          expect(compiled.querySelector('#alert-1')
            .getAttribute('class').split(' ')).toContain(item.class);
          allBgClasses.filter(bg_class => bg_class !== item.class)
            .map(bg_class_excluded => {
              expect(compiled.querySelector('#alert-1')
                .getAttribute('class').split(' '))
                .not.toContain(bg_class_excluded);
            });
        });
      });
    })
    ));

  it('should have class white if status is info or error',
    async(inject([], () => {
      fixture.whenStable().then(() => {
        fixture.componentInstance.qaid = 'alert-1';
        const compiled = fixture.debugElement.nativeElement;
        const allStatuses = ['info', 'warning', 'success', 'error'];
        const whiteTextStatuses = ['info', 'error'];
        allStatuses.map(status => {
          fixture.componentInstance.status = status;
          fixture.detectChanges();
          if (whiteTextStatuses.indexOf(status) >= 0) {
            expect(compiled.querySelector('#alert-1')
              .getAttribute('class').split(' ')).toContain('white');
          } else {
            expect(compiled.querySelector('#alert-1')
              .getAttribute('class').split(' '))
              .not.toContain('white');
          }
        });
      });
    })));
});

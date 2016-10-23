import {
  async,
  inject
} from '@angular/core/testing';
import { RioLogoComponent } from './index';
import {TestBed} from '@angular/core/testing/test_bed';
import { SharedModule } from '../shared.module';

describe('Component: Logo', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(RioLogoComponent);
    fixture.detectChanges();
  });

  it('should set the image location',
    async(inject([], () => {
      fixture.whenStable().then(() => {
        fixture.componentInstance.LogoImage = 'data:image/gif;base64,fake';
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img').getAttribute('src'))
          .toBe('data:image/gif;base64,fake');
      });
    })));
});

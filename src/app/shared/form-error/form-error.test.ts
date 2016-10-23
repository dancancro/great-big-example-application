import {
  async,
  inject
} from '@angular/core/testing';
import { RioFormError } from './form-error';
import {TestBed} from '@angular/core/testing/test_bed';
import {RioFormModule} from './form.module';

describe('Component: Form Error', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RioFormModule
      ]
    });
    fixture = TestBed.createComponent(RioFormError);
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


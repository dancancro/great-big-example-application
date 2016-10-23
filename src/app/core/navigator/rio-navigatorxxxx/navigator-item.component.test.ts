import {
  async,
  inject
} from '@angular/core/testing';
import {RioNavigatorItem} from './navigator-item.component';
import {TestBed} from '@angular/core/testing/test_bed';
import {RioNavigatorModule} from './navigator.module';


describe('Component: Navigator Item', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RioNavigatorModule
      ]
    });
    fixture = TestBed.createComponent(RioNavigatorItem);
    fixture.detectChanges();
  });

  it('should render the button with the correct classes applied',
    async(inject([], () => {
      fixture.whenStable().then(() => {
        fixture.componentInstance.mr = true;
        fixture.componentInstance.ml = true;
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div').getAttribute('class'))
          .toBe('truncate mr2 ml2');
        fixture.componentInstance.mr = false;
        fixture.detectChanges();
        expect(compiled.querySelector('div').getAttribute('class'))
          .toBe('truncate ml2');
      });
    })
  ));
});

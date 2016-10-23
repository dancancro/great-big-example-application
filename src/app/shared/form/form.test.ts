import {
  async,
  inject,
} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {RioForm} from './form';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import {TestBed} from '@angular/core/testing/test_bed';
import {RioFormModule} from './form.module';

describe('Component: Form', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RioFormModule,
        ReactiveFormsModule
      ],
      declarations: [
        RioFormTestController
      ],
      providers: [
        RioForm
      ]
    });
    fixture = TestBed.createComponent(RioFormTestController);
    fixture.detectChanges();
  });

  it('should inject the component', inject([RioForm],
    (component: RioForm) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', async(inject([], () => {
    fixture.whenStable().then(() => {
      fixture.autoDetectChanges();
      let query = fixture.debugElement
        .query(By.directive(RioForm));
      expect(query).toBeTruthy();
      expect(query.componentInstance).toBeTruthy();
      expect(query.componentInstance.onSubmit).toBeTruthy();
      expect(query.componentInstance.group).toBeTruthy();
    });
  })));

  it('should emit event when onSubmit is invoked', async(inject([], () => {
    fixture.whenStable().then(() => {
      fixture.autoDetectChanges();
      let query = fixture.debugElement
        .query(By.directive(RioForm));
      query.componentInstance.onSubmit.subscribe(c => {
        expect(c).toBeDefined();
      });
      query.nativeElement.querySelector('button').click();
    });
  })));

});

@Component({
  selector: 'test',
  template: `
    <rio-form
      [group]="group">
      <input
        [formControl]="field1">
      <button type="submit">submit</button>
    </rio-form>
  `
})
class RioFormTestController {
  private group: FormGroup;
  private field1: FormControl;
  constructor(private builder: FormBuilder) {
    this.field1 = new FormControl('test value');
    this.group = this.builder.group({
      field1: this.field1,
    });
  }
}


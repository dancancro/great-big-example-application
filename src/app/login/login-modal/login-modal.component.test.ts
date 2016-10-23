import {
  async,
  inject
} from '@angular/core/testing';
import {RioLoginModalComponent} from './login-modal.component';
import {RioLoginModule} from '../login.module';
import {TestBed} from '@angular/core/testing/test_bed';

describe('Component: Login Modal', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RioLoginModule
      ]
    });
    fixture = TestBed.createComponent(RioLoginModalComponent);
    fixture.detectChanges();
  });

  it('should inject the component', async(inject([], () => {
    fixture.whenStable().then(() => {
      expect(fixture.componentInstance).toBeTruthy();
    });
  })));

  it('should create the component', async(inject([], () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let element = fixture.nativeElement;
      expect(element.querySelector('rio-modal-content')).not.toBeNull();
      expect(element.querySelector('h1').innerText).toEqual('Login');
      expect(element.querySelector('rio-login-form')).not.toBeNull();
      expect(fixture.componentInstance.onSubmit).toBeTruthy();
    });
  })));

  it('should emit an event when handleSubmit is called',
    async(inject([], () => {
      fixture.whenStable().then(() => {
        let login = { username: 'user', password: 'pass' };
        fixture.componentInstance.handleSubmit(login);
        fixture.componentInstance.onSubmit.subscribe(data => {
          expect(data).toBeDefined();
          expect(data.username).toEqual('user');
          expect(data.password).toEqual('pass');
        });
      });
    }))
  );

});

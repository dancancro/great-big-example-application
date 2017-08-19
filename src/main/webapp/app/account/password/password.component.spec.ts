import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { PasswordComponent } from './password.component';
import { PasswordService } from './password.service';
import { Principal } from '../../shared/auth/principal.service';
import { AccountService } from '../../shared/auth/account.service';
import { JhiTrackerService } from '../../shared/tracker/tracker.service';
import { MockTrackerService } from '../../../mocks/mock-tracker.service';

describe('Component Tests', () => {

  describe('PasswordComponent', () => {

    let comp: PasswordComponent;
    let fixture: ComponentFixture<PasswordComponent>;
    let service: PasswordService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [GreatBigExampleApplicationTestModule],
        declarations: [PasswordComponent],
        providers: [
          Principal,
          AccountService,
          {
            provide: JhiTrackerService,
            useClass: MockTrackerService
          },
          PasswordService
        ]
      }).overrideTemplate(PasswordComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(PasswordComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PasswordService);
    });

    it('should show error if passwords do not match', () => {
      // GIVEN
      comp.password = 'password1';
      comp.confirmPassword = 'password2';
      // WHEN
      comp.changePassword();
      // THEN
      expect(comp.doNotMatch).toBe('ERROR');
      expect(comp.error).toBeNull();
      expect(comp.success).toBeNull();
    });

    it('should call Auth.changePassword when passwords match', () => {
      // GIVEN
      spyOn(service, 'save').and.returnValue(Observable.of(true));
      comp.password = comp.confirmPassword = 'myPassword';

      // WHEN
      comp.changePassword();

      // THEN
      expect(service.save).toHaveBeenCalledWith('myPassword');
    });

    it('should set success to OK upon success', function() {
      // GIVEN
      spyOn(service, 'save').and.returnValue(Observable.of(true));
      comp.password = comp.confirmPassword = 'myPassword';

      // WHEN
      comp.changePassword();

      // THEN
      expect(comp.doNotMatch).toBeNull();
      expect(comp.error).toBeNull();
      expect(comp.success).toBe('OK');
    });

    it('should notify of error if change password fails', function() {
      // GIVEN
      spyOn(service, 'save').and.returnValue(Observable.throw('ERROR'));
      comp.password = comp.confirmPassword = 'myPassword';

      // WHEN
      comp.changePassword();

      // THEN
      expect(comp.doNotMatch).toBeNull();
      expect(comp.success).toBeNull();
      expect(comp.error).toBe('ERROR');
    });
  });
});

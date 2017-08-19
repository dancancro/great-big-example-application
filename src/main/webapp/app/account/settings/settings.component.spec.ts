import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { JhiLanguageHelper } from '../../shared';
import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { Principal, AccountService } from '../../shared';
import { SettingsComponent } from './settings.component';
import { MockAccountService } from '../../../mocks/mock-account.service';
import { MockPrincipal } from '../../../mocks/mock-principal.service';
import { JhiTrackerService } from '../../shared/tracker/tracker.service';
import { MockTrackerService } from '../../../mocks/mock-tracker.service';

describe('Component Tests', () => {

    describe('SettingsComponent', () => {

        let comp: SettingsComponent;
        let fixture: ComponentFixture<SettingsComponent>;
        let mockAuth: any;
        let mockPrincipal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [SettingsComponent],
                providers: [
                    {
                        provide: Principal,
                        useClass: MockPrincipal
                    },
                    {
                        provide: AccountService,
                        useClass: MockAccountService
                    },
                    {
                        provide: JhiTrackerService,
                        useClass: MockTrackerService
                    },
                    {
                        provide: JhiLanguageHelper,
                        useValue: null
                    },
                ]
            }).overrideTemplate(SettingsComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SettingsComponent);
            comp = fixture.componentInstance;
            mockAuth = fixture.debugElement.injector.get(AccountService);
            mockPrincipal = fixture.debugElement.injector.get(Principal);
        });

        it('should send the current identity upon save', () => {
            // GIVEN
            const accountValues = {
                firstName: 'John',
                lastName: 'Doe',

                activated: true,
                email: 'john.doe@mail.com',
                langKey: 'en',
                login: 'john'
            };
            mockPrincipal.setResponse(accountValues);

            // WHEN
            comp.settingsAccount = accountValues;
            comp.save();

            // THEN
            expect(mockPrincipal.identitySpy).toHaveBeenCalled();
            expect(mockAuth.saveSpy).toHaveBeenCalledWith(accountValues);
            expect(comp.settingsAccount).toEqual(accountValues);
        });

        it('should notify of success upon successful save', () => {
            // GIVEN
            const accountValues = {
                firstName: 'John',
                lastName: 'Doe'
            };
            mockPrincipal.setResponse(accountValues);

            // WHEN
            comp.save();

            // THEN
            expect(comp.error).toBeNull();
            expect(comp.success).toBe('OK');
        });

        it('should notify of error upon failed save', () => {
            // GIVEN
            mockAuth.saveSpy.and.returnValue(Observable.throw('ERROR'));

            // WHEN
            comp.save();

            // THEN
            expect(comp.error).toEqual('ERROR');
            expect(comp.success).toBeNull();
        });
    });
});

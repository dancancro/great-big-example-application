/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { ProfileDetailComponent } from '../../../../../../main/webapp/app/entities/profile/profile-detail.component';
import { ProfileService } from '../../../../../../main/webapp/app/entities/profile/profile.service';
import { Profile } from '../../../../../../main/webapp/app/entities/profile/profile.model';

describe('Component Tests', () => {

    describe('Profile Management Detail Component', () => {
        let comp: ProfileDetailComponent;
        let fixture: ComponentFixture<ProfileDetailComponent>;
        let service: ProfileService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ProfileDetailComponent],
                providers: [
                    ProfileService
                ]
            })
            .overrideTemplate(ProfileDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProfileDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProfileService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Profile(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.profile).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});

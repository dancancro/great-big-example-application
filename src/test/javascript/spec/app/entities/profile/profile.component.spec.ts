/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { ProfileComponent } from '../../../../../../main/webapp/app/entities/profile/profile.component';
import { ProfileService } from '../../../../../../main/webapp/app/entities/profile/profile.service';
import { Profile } from '../../../../../../main/webapp/app/entities/profile/profile.model';

describe('Component Tests', () => {

    describe('Profile Management Component', () => {
        let comp: ProfileComponent;
        let fixture: ComponentFixture<ProfileComponent>;
        let service: ProfileService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ProfileComponent],
                providers: [
                    ProfileService
                ]
            })
            .overrideTemplate(ProfileComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProfileComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProfileService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Profile(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.profiles[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});

/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { TalkDetailComponent } from 'app/entities/talk/talk-detail.component';
import { Talk } from 'app/shared/model/talk.model';

describe('Component Tests', () => {
    describe('Talk Management Detail Component', () => {
        let comp: TalkDetailComponent;
        let fixture: ComponentFixture<TalkDetailComponent>;
        const route = ({ data: of({ talk: new Talk(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [TalkDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(TalkDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TalkDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.talk).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});

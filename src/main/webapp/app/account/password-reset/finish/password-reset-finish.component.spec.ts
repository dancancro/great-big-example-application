import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Renderer, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginModalService } from '../../../shared';
import { GreatBigExampleApplicationTestModule } from '../../../../mocks/test.module';
import { PasswordResetFinishComponent } from './password-reset-finish.component';
import { PasswordResetFinishService } from './password-reset-finish.service';
import { MockActivatedRoute } from '../../../../mocks/mock-route.service';

describe('Component Tests', () => {

    describe('PasswordResetFinishComponent', () => {

        let fixture: ComponentFixture<PasswordResetFinishComponent>;
        let comp: PasswordResetFinishComponent;

        beforeEach(() => {
            fixture = TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [PasswordResetFinishComponent],
                providers: [
                    PasswordResetFinishService,
                    {
                        provide: LoginModalService,
                        useValue: null
                    },
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({ 'key': 'XYZPDQ' })
                    },
                    {
                        provide: Renderer,
                        useValue: {
                            invokeElementMethod(renderElement: any, methodName: string, args?: any[]) { }
                        }
                    },
                    {
                        provide: ElementRef,
                        useValue: new ElementRef(null)
                    }
                ]
            }).overrideTemplate(PasswordResetFinishComponent, '')
                .createComponent(PasswordResetFinishComponent);
            comp = fixture.componentInstance;
        });

        it('should define its initial state', () => {
            comp.ngOnInit();

            expect(comp.keyMissing).toBeFalsy();
            expect(comp.key).toEqual('XYZPDQ');
            expect(comp.resetAccount).toEqual({});
        });

        it('sets focus after the view has been initialized',
            inject([ElementRef], (elementRef: ElementRef) => {
                const element = fixture.nativeElement;
                const node = {
                    focus() { }
                };

                elementRef.nativeElement = element;
                spyOn(element, 'querySelector').and.returnValue(node);
                spyOn(node, 'focus');

                comp.ngAfterViewInit();

                expect(element.querySelector).toHaveBeenCalledWith('#password');
                expect(node.focus).toHaveBeenCalled();
            })
        );

    });
});

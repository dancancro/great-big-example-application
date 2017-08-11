/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAdComponent } from './recipe-ad.component';
import { GreatBigExampleApplicationSharedModule } from '../../../../shared/shared.module';
import { MealsSharedModule } from '../../shared/shared.module';

describe('RecipeAdComponent', () => {
    let component: RecipeAdComponent;
    let fixture: ComponentFixture<RecipeAdComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                GreatBigExampleApplicationSharedModule,
                MealsSharedModule
            ],
            declarations: [RecipeAdComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecipeAdComponent);
        component = fixture.componentInstance;
        component.recipe = { id: 0, title: 'test title' };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set the correct color', () => {
        const higherNumber = (4 * 341) - 1;
        expect(component.arrowColors.length).toBe(4);
        component.index = 1;
        component.updateColor();
        expect(component.arrowColor).toBe('#dae109');
        component.index = 5;
        component.updateColor();
        expect(component.arrowColor).toBe('#dae109');
        component.index = higherNumber;
        component.updateColor();
        expect(component.arrowColor).toBe('#67d165');
    });
});

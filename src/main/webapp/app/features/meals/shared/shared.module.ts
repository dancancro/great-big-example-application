/**
 * @module SharedModule
 * @preferred
 */ /** */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AxFocusFixDirective } from './ax-focus-fix/ax-focus-fix.directive';
import { ButtonClearComponent } from './button-clear/button-clear.component';
import { LabelsComponent } from './labels/labels.component';
import { TimerComponent } from './timer/timer.component';
import { TimerService } from './timer/timer.service';
import { UiModule } from '../../../shared/ui/ui.module';
import { WatchHeightDirective } from './watch-height/watch-height.directive';
import { GreatBigExampleApplicationSharedModule } from '../../../shared/shared.module';
import { ImageCoverComponent } from '../../../shared/image-cover/image-cover.component';
import { StatusBarComponent } from '../../../layouts/status-bar/status-bar.component';
import { TimerButtonComponent } from './timer/timer-button/timer-button.component';
import { RouterModule } from '@angular/router';

/**
 * @whatItDoes {@link SharedModule} exists to hold the common components, directives, and pipes
 * and share them with the modules that need them.
 * @consumers {@link HomeModule}, {@link RecipeModule}
 *
 * This module follows the Angular style guide [STYLE 04-10](https://angular.io/styleguide#04-10)
 */
@NgModule({
    imports: [
        CommonModule,
        UiModule,
        GreatBigExampleApplicationSharedModule,
        RouterModule
    ],
    declarations: [
        AxFocusFixDirective,
        ButtonClearComponent,
        LabelsComponent,
        TimerComponent,
        TimerButtonComponent,
        WatchHeightDirective
    ],
    exports: [
        AxFocusFixDirective,
        ButtonClearComponent,
        CommonModule,
        LabelsComponent,
        UiModule,
        WatchHeightDirective,
        ImageCoverComponent,
        TimerComponent,
        TimerButtonComponent,
        GreatBigExampleApplicationSharedModule
    ]
})
export class MealsSharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MealsSharedModule,
            providers: [TimerService]
        };
    }

}

/**
 * @module SharedModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AxFocusFixDirective } from './ax-focus-fix/ax-focus-fix.directive';
import { ButtonClearComponent } from './button-clear/button-clear.component';
import { LabelsComponent } from './labels/labels.component';
import { UiModule } from '../../../shared/ui/ui.module';
import { WatchHeightDirective } from './watch-height/watch-height.directive';
import { GreatBigExampleApplicationSharedModule } from '../../../shared/shared.module';
import { ImageCoverComponent } from '../../../shared/image-cover/image-cover.component';
import { StatusBarComponent } from '../../../layouts/status-bar/status-bar.component';

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
    ],
    declarations: [
        AxFocusFixDirective,
        ButtonClearComponent,
        LabelsComponent,
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
        GreatBigExampleApplicationSharedModule
    ]
})
export class MealsSharedModule { }

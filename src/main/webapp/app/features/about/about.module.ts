/**
 * @module AboutModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { AboutRouting } from './about.routing';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { UiModule } from '../../shared/ui/ui.module';
/**
 * @whatItDoes Lazy loaded feature module for the about page.
 * @consumers @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
    imports: [
        AboutRouting,
        CommonModule,
        GreatBigExampleApplicationSharedModule,
        UiModule
    ],
    declarations: [AboutComponent]
})
export class AboutModule { }

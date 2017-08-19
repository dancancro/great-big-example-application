import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FeaturesRouting } from './features.routing';
import { FeaturesService } from './features.service';
import { FeaturesComponent } from './features.component';
import { VersionService } from '../shared';

@NgModule({
    declarations: [
        FeaturesComponent
    ],
    imports: [
        // HttpModule,
        // CoreModule,
        CommonModule,
        FeaturesRouting,
        MaterialModule,
        FlexLayoutModule
    ],
    providers: [
        VersionService,
        FeaturesService
        // SocketService,
        // AuthGuard
    ]
})

export class FeaturesModule {
    constructor() { }
}

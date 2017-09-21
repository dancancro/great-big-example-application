import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditorPage } from './editor.page';
import { AddPage } from './add.page';
import { EditorGuard } from './editor.guard';
import { SharedModule } from '../shared/shared.module';
import { EditorRouting } from './editor.routing';
import { GreatBigExampleApplicationSharedModule } from '../../../shared';

@NgModule({
    imports: [
        EditorRouting,
        SharedModule,
        GreatBigExampleApplicationSharedModule
    ],
    declarations: [
        EditorPage,
        AddPage
    ],
    providers: [
        EditorGuard
    ]
})
export class EditorModule { }

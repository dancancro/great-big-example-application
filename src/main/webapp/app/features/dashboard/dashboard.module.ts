import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardRouting } from './dashboard.routing';

/**
 * Import @angular/material, ng2-material
 */
import { MaterialModule } from '@angular/material';
import { DashboardPage } from './dashboard.page';
import { TodoComponent } from '../../shared/widgets/todo';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DashboardRouting,
        MaterialModule
    ],
    declarations: [
        DashboardPage,
        TodoComponent
    ]
})
export class DashboardModule {
    constructor() { }
}

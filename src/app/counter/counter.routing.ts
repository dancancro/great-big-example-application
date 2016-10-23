import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { RioCounterPage } from './counter.page';

const routes: Routes = [
    {
    path: '',
    component: RioCounterPage
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

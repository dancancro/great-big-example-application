import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RioCounterPage } from './counter.page';

const routes: Routes = [
  {
    path: '',
    component: RioCounterPage
  }
];

export const routedComponents = [RioCounterPage];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRouting { }
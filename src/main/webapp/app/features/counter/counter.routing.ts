import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterPage } from './counter.page';

const routes: Routes = [
  {
    path: '',
    component: CounterPage
  }
];

export const routedComponents = [CounterPage];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRouting { }

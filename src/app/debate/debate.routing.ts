import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DebatePage } from './debate.page';

const routes: Routes = [
  { path: '', component: DebatePage },
  { path: ':claimId', component: DebatePage }
];

export const routedComponents = [DebatePage];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebateRouting { }
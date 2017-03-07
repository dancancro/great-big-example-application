import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BerniePage } from './bernie.page';

const routes: Routes = [
  { path: '', component: BerniePage },
  { path: ':claimId', component: BerniePage }
];

export const routedComponents = [BerniePage];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BernieRouting { }

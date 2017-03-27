import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WikiPage } from './wiki.page';

const routes: Routes = [
  { path: '', component: WikiPage }
];

export const routedComponents = [WikiPage];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiRouting { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesPage } from './notes.page';

const routes: Routes = [
  { path: '', component: NotesPage }
];

export const routedComponents = [NotesPage];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRouting { }
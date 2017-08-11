// From Style guide item 4-09 - Feature Modules
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-09

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { RESTService } from '../../core/services/rest.service';
import { NoteEffects } from '../../core/store/note/note.effects';
import { NoteComponent } from './note/note.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { NotesPage } from './notes.page';
import { NotesRouting } from './notes.routing';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { customHttpProvider } from '../../core/interceptor/http.provider';

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
        NotesRouting,
        EffectsModule.forRoot([NoteEffects])
    ],
    declarations: [
        NotesPage,
        NoteComponent,
        AddButtonComponent
    ],
    providers: [
        customHttpProvider(),
        RESTService
    ]
})
export class NotesModule { }

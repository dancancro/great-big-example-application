import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { BookAuthorsComponent } from './book-authors/book-authors.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookPreviewListComponent } from './book-preview/book-preview-list.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { AddCommasPipe } from './add-commas/add-commas.pipe';
import { EllipsisPipe } from './ellipsis/ellipsis.pipe';
import { CollectionPage } from './collection.page';
import { FindBookPage } from './find-book.page';
import { SelectedBookPage } from './selected-book.page';
import { ViewBookPage } from './view-book.page';
import { BookEffects } from '../../core/store/book/book.effects';
import { CollectionEffects } from '../../core/store/collection/collection.effects';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { BooksRouting } from './books.routing';
import { customHttpProvider } from '../../core/interceptor/http.provider';

export const COMPONENTS = [
    BookAuthorsComponent,
    BookDetailComponent,
    BookPreviewComponent,
    BookPreviewListComponent,
    BookSearchComponent,
    AddCommasPipe,
    EllipsisPipe,
    CollectionPage,
    FindBookPage,
    SelectedBookPage,
    ViewBookPage
];

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
        BooksRouting,
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule,
        EffectsModule.forRoot([BookEffects, CollectionEffects]),
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [
        customHttpProvider()
    ],
})
export class BooksModule { }

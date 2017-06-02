import { BooksPageLayout, initialBooksPageLayout } from '../../../features/books/books.layout';
import { BerniePageLayout, initialBerniePageLayout } from '../../../features/bernie/bernie.layout';
import { HeroesDashboardLayout, initialHeroesDashboardPageLayout } from '../../../features/heroes/heroes.layout';

export interface Layout {
    booksPage: BooksPageLayout;
    berniePage: BerniePageLayout;
    heroesDashboardPage: HeroesDashboardLayout;
    msg: string;
}

export function initialLayout() {
    return {
        booksPage: initialBooksPageLayout,
        berniePage: initialBerniePageLayout,
        heroesDashboardPage: initialHeroesDashboardPageLayout,
        msg: ''
    };
}

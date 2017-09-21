
import { BooksPageLayout, initialBooksPageLayout } from '../../../features/books/books.layout';
import { BerniePageLayout, initialBerniePageLayout } from '../../../features/bernie/bernie.layout';
import { BlogPageLayout, initialBlogPageLayout } from '../../../features/blog/blog.layout';
import { HeroesDashboardLayout, initialHeroesDashboardPageLayout } from '../../../features/heroes/heroes.layout';
import { TalksPageLayout, initialTalksPageLayout } from '../../../features/talks/talks.layout';

/**
 * Combination of everything
 */
export interface Layout {
    booksPage: BooksPageLayout;
    blogPage: BlogPageLayout;
    berniePage: BerniePageLayout;
    heroesDashboardPage: HeroesDashboardLayout;
    msg: string;
    talksPage: TalksPageLayout;
}

export function initialLayout() {
    return {
        berniePage: initialBerniePageLayout,
        blogPage: initialBlogPageLayout,
        booksPage: initialBooksPageLayout,
        heroesDashboardPage: initialHeroesDashboardPageLayout,
        msg: '',
        talksPage: initialTalksPageLayout
    };
}

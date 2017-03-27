import { slices } from '../util';

export interface NavLayout {
  showSidenav: boolean;
}

export const initialNavLayout = {
  showSidenav: false
}

export interface BooksPageLayout {
  query: string
};

export const initialBooksPageLayout = {
  query: ''
}

export interface BerniePageLayout {
  editable: boolean;
  expanded: boolean;
  scrollY: number;
  // isTouched: Function;
};

export const initialBerniePageLayout: BerniePageLayout = {
  editable: false,
  expanded: false,
  scrollY: 0
  // isTouched: function (claims) {
  //   let _touched = false;
  //   claims.forEach(claim => {
  //     claim.rebuttals.forEach(rebuttal => {
  //       if (rebuttal && rebuttal.isTouched()) {
  //         _touched = true;
  //       }
  //     });
  //   });
  //   return _touched;
  // }
}

export interface HeroesDashboardLayout {
  heroSearchTerm: string
}

export const initialHeroesDashboardPageLayout = {
  heroSearchTerm: ''
}

export interface Layout {
  nav: NavLayout,
  booksPage: BooksPageLayout;
  berniePage: BerniePageLayout;
  heroesDashboardPage: HeroesDashboardLayout;
  msg: string;
}

export function initialLayout() {
  return {
    nav: initialNavLayout,
    booksPage: initialBooksPageLayout,
    berniePage: initialBerniePageLayout,
    heroesDashboardPage: initialHeroesDashboardPageLayout,
    msg: ''
  }
}

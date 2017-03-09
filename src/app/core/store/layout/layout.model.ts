import { getActionTypes } from '../util';

export interface BooksPageLayout {
  showSidenav: boolean;
};

export interface BerniePageLayout {
  editable: boolean;
  expanded: boolean;
  scrollY: number;
  isTouched: Function;
};

export interface HeroesDashboardLayout {
  heroSearchTerm: string
}

export interface Layout {
  booksPage: BooksPageLayout;
  berniePage: BerniePageLayout;
  heroesDashboardPage: HeroesDashboardLayout;
  msg: string;
  actionTypes: any;
}

export const initialBerniePage: BerniePageLayout = {
  editable: false,
  expanded: false,
  scrollY: 0,
  isTouched: function (claims) {
    let _touched = false;
    claims.forEach(claim => {
      claim.rebuttals.forEach(rebuttal => {
        if (rebuttal && rebuttal.isTouched()) {
          _touched = true;
        }
      });
    });
    return _touched;
  }
}

export const initialHeroesDashboardPage = {
  heroSearchTerm: ''
}


export function initialLayout(vals: any = {}, entityTypeName?: string, actionNames?: any, initialEntity?): Layout {

  return {
    booksPage: {
      showSidenav: false
    },
    berniePage: initialBerniePage,
    heroesDashboardPage: initialHeroesDashboardPage,
    msg: '',
    actionTypes: getActionTypes(entityTypeName, actionNames),
  }
}

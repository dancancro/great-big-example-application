export interface BooksPageLayout {
  showSidenav: boolean;
};

export interface DebatePageLayout {
  editable: boolean;
  expanded: boolean;
  scrollY: number;
  isTouched: Function;
};

export interface Layout {
  booksPage: BooksPageLayout;
  debatePage: DebatePageLayout;
  msg: string;
}

export const initialLayout: Layout = {
  booksPage: {
    showSidenav: false
  },
  debatePage: {
    editable: false,
    expanded: false,
    scrollY: 0,
    isTouched: function () {
      let _touched = false;
      // TODO make this a for loop with early exits
      this.claims.forEach(claim => {
        claim.rebuttals.forEach(rebuttal => {
          if (rebuttal.isTouched()) {
            _touched = true;
          }
        });
      });
      return _touched;
    }
  },
  msg: ''
};
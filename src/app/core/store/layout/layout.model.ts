export interface BooksPageLayout {
  showSidenav: boolean;
};
  
export interface DebatePageLayout {
  editable: boolean;
  expanded: boolean;
  scrollY: number;
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
    scrollY: 0
  },
  msg: ''
};
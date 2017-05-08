export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}

export const initialBook = {
  id: null,
  volumeInfo: {
    title: '',
    subtitle: '',
    authors: [],
    publisher: '',
    publishDate: '',
    description: '',
    averageRating: 0,
    ratingsCount: 0,
    imageLinks: {
      thumbnail: '',
      smallThumbnail: '',
    }
  }
};

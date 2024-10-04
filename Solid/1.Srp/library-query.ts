import { Book } from "./book";
import { LibraryData } from "./library-data";

export class LibraryQuery {
  private libraryData: LibraryData;

  constructor(libraryData: LibraryData) {
    this.libraryData = libraryData;
  }

  getListBooks(): Book[] {
    return this.libraryData.books;
  }

  getBookByTitle(title: string): Book | undefined {
    return this.libraryData.books.find((book) => book.title === title);
  }

  getTotalNumberOfBooks(): number {
    return this.libraryData.books.length;
  }

  getBooksByAuthor(author: string): Book[] {
    return this.libraryData.books.filter((book) => book.author === author);
  }

  getBooksByPublicationYear(publicationYear: number): Book[] {
    return this.libraryData.books.filter(
      (book) => book.publicationYear === publicationYear
    );
  }
}

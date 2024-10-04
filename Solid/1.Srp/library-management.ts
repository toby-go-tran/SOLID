import { Book } from "./book";
import { LibraryData } from "./library-data";

export class LibraryManagement {
  private libraryData: LibraryData;

  constructor(libraryData: LibraryData) {
    this.libraryData = libraryData;
  }

  addBook(book: Book): void {
    this.libraryData.books.push(book);
  }

  removeBook(book: Book): void {
    this.libraryData.books = this.libraryData.books.filter(
      (b) => b.title !== book.title
    );
  }
}

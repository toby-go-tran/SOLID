import { Book } from "../../Solid/1.Srp/book";
import { LibraryData } from "../../Solid/1.Srp/library-data";
import { LibraryManagement } from "../../Solid/1.Srp/library-management";
import { LibraryQuery } from "../../Solid/1.Srp/library-query";

describe("Library Management System", () => {
  let libraryData: LibraryData;
  let libraryManagement: LibraryManagement;
  let libraryQuery: LibraryQuery;

  beforeEach(() => {
    libraryData = new LibraryData();
    libraryManagement = new LibraryManagement(libraryData);
    libraryQuery = new LibraryQuery(libraryData);
  });

  test("should add and retrieve books", () => {
    const book1 = new Book("Clean Code", "Edric Cao", 2023);
    const book2 = new Book("Design Pattern", "Edric Cao", 2022);

    libraryManagement.addBook(book1);
    libraryManagement.addBook(book2);

    const retrievedBook = libraryQuery.getBookByTitle("Clean Code");

    expect(retrievedBook).toBeDefined();
    expect(retrievedBook).toEqual(book1);
    expect(libraryQuery.getBookByTitle("Nonexistent Book")).toBeUndefined();
  });
});

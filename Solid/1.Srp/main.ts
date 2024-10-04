import { Book } from "./book";
import { LibraryData } from "./library-data";
import { LibraryManagement } from "./library-management";
import { LibraryQuery } from "./library-query";

// LibraryData instance is like a database, it stores all the books
const libraryData = new LibraryData();
const libraryManagement = new LibraryManagement(libraryData);
const libraryQuery = new LibraryQuery(libraryData);

const book1 = new Book("Clean Code", "Edric Cao", 2023);
const book2 = new Book("Design Pattern", "Edric Cao", 2022);

libraryManagement.addBook(book1);
libraryManagement.addBook(book2);

console.log(libraryQuery.getBookByTitle("Clean Code")); // Output: Book { title: 'Clean Code', author: 'Edric Cao', publicationYear: 2023 }

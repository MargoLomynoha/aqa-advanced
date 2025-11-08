import { Book } from './book.js';
import { EBook } from './ebook.js';

console.log('\nПункт 1\n');

const book1 = new Book('Harry Potter', 'J.K. Rowling', 1998);
const book2 = new Book('The Window', 'Jogn Grisham', 2025);
const book3 = new Book('Alchemised', 'SenLinYu', 2024);

book1.printInfo();
book2.printInfo();
book3.printInfo();

// Ebook:

console.log('\nПункт 2\n');

const eBook1 = new EBook('Harry Potter2', 'J.K. Rowling', 1999, 'fb2');
eBook1.printInfo();

console.log('\nПункт 3\n');

try {
    book1.title = undefined;
} catch (error) {
    console.log(error.message);
}

try {
    book1.author = 5;
} catch (error) {
    console.log(error.message);
}
try {
    book1.year = 2027;
} catch (error) {
    console.log(error.message);
}
try {
    eBook1.fileFormat = '';
} catch (error) {
    console.log(error.message);
}

book1.title = 'New Harry Potter 3';
console.log(book1);

console.log('\nПункт 4\n');

console.log(Book.findTheOldestBook(book1, book2, book3, eBook1));

console.log('\nПункт 5\n');

console.log(EBook.newEbook(book1, 'pdf'));

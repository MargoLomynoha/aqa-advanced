import { Book } from "./book.js";

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }
    printInfo() {
        console.log(`${this.title} was written by ${this.author} in ${this.year} year, file format is ${this.fileFormat}.`)
    }
    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(value) {
        if (value === undefined) {
            throw new Error('File format is undefined.');
        }
        if (typeof value != 'string') {
            throw new Error('File format type is not string.')
        }
        if (value.length === 0) {
            throw new Error('File format is empty.')
        }
        this._fileFormat = value;
    }
    static newEbook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat)
    }
}


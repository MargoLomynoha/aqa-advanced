export class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }
    printInfo() {
        console.log(
            `${this.title} was written by ${this.author} in ${this.year} year.`
        );
    }
    get title() {
        return this._title;
    }
    set title(value) {
        if (value === undefined) {
            throw new Error('Title is undefined.');
        }
        if (typeof value != 'string') {
            throw new Error('Title type is not string.');
        }
        if (value.length === 0) {
            throw new Error('Title is empty.');
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }
    set author(value) {
        if (value === undefined) {
            throw new Error('Author is undefined.');
        }
        if (typeof value != 'string') {
            throw new Error('Author type is not string.');
        }
        if (value.length === 0) {
            throw new Error('Author is empty.');
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }
    set year(value) {
        if (value === undefined) {
            throw new Error('Year is undefined.');
        }
        if (typeof value != 'number') {
            throw new Error('Year type is not number.');
        }
        if (value < 1800 || value > new Date().getFullYear()) {
            throw new Error('Year is not valid.');
        }
        this._year = value;
    }
    static findTheOldestBook(...books) {
        books.sort((a, b) => a.year - b.year);
        return books[0];
    }
}

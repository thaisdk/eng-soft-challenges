class Book {
    constructor(id = '', title = '', author = '', description = '') {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
    }
};

class Library {
    constructor(books = []) {
        this.books = books;
    }

    getBooks() {
        return this.books;
    }

    addBook(bookInfo) {
        const newBook = new Book(bookInfo.id, bookInfo.title, bookInfo.author, bookInfo.description);
        this.books.push(newBook);
    }

    removeBookById(bookId) {
        let deletedBook;
        this.books = this.books.filter(book => {
            if (book.id === bookId) {
                deletedBook = book;
            } else {
                return book;
            }
        })
        return deletedBook;
    }

    getBookById(bookId) {
        let searchedBook;
        this.books = this.books.find(book => {
            if (book.id === bookId) {
                searchedBook = book;
            } else {
                return book;
            }
        })
        return searchedBook;
    }

    updatedBookId(bookId, info = {}) {
        let updatedBook = this.getBookById(bookId);
        if (updatedBook) {
            if (info.title) updatedBook.title = info.title;
            if (info.author) updatedBook.author = info.author;
            if (info.description) updatedBook.description = info.description;
        }
        return updatedBook;
    }
};
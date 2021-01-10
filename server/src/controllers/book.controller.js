// Require model.
const BOOKMODEL = require('../models/book.model');
const MYBOOKS = require('../models/myBooks');

// Require postman
let postmanBook = require('../resources/postman.book');

// Require << SortEntity >>
let { sortBook, sortMyBook } = require('../helpers/sortEntity.helper');

class BookController {
    async getAll (request, response) {
        const BOOKS = await postmanBook.getAllOrder(-1, 0);
        response.json(BOOKS);
    }

    async create (request, response) {
        let { book, cover_photo, avatar } = request.files;
        let newBook = sortBook(request.body, avatar, cover_photo, book);
        
        await new BOOKMODEL(newBook).save();
        const BOOKS = await postmanBook.getAllOrder(-1, 0);

        response.json(BOOKS);
    }

    async update (request, response) {
        let { id } = request.params;
        let { book, cover_photo, avatar } = request.files;
        let newBook = sortBook(request.body, avatar, cover_photo, book);
        let newMyBook = sortMyBook(newBook);

        await BOOKMODEL.findByIdAndUpdate({ _id: id }, newBook);
        await MYBOOKS.update({ "book.id": id }, newMyBook);

        const BOOKS = await postmanBook.getAllOrder(-1, 0);
        response.json(BOOKS);
    }

    async delete (request, response) {
        let { id } = request.params;

        await BOOKMODEL.findByIdAndDelete({ _id: id });
        await MYBOOKS.remove({ "book.id": id });
        const BOOKS = await postmanBook.getAllOrder(-1, 0);

        response.json(BOOKS);
    }

    async deleteMyBook (request, response) {
        let { username } = request.user;
        let { id } = request.params;

        await MYBOOKS.findByIdAndDelete({ _id: id });
        let myBooks = await postmanBook.getAllUserMyBook(username);

        response.json(myBooks);
    }

    async getMyBooks (request, response) {
        let { username } = request.user;

        let myBooks = await postmanBook.getAllUserMyBook(username);
        response.json(myBooks);
    }

    async addMyBooks (request, response) {
        let { username } = request.user;
        let { book, author, _id } = request.body;
        let { title, subtitle, cover_photo, description, content_book, category, publication_date } = book;
        let { fullname } = author;
        let newMyCollection = {
            book: { title, subtitle, cover_photo, description, content_book, category, publication_date, id: _id },
            author: { fullname },
            username
        }

        await new MYBOOKS(newMyCollection).save();
        let myBooks = await postmanBook.getAllUserMyBook(username);

        response.json(myBooks);
    }
}

module.exports = new BookController();

// Require << express >>
let { Router } = require('express');

// Requires middleware
let isAuth = require('../middlewares/isAuth.middleware');
let isAdmin = require('../middlewares/isAdmin');

// Requires controller
const BOOK = require('../controllers/book.controller');

// Create class
class BookRoutes {
    constructor () {
        this.router = Router();
        
        this.getAllBooks();
        this.createBook();
        this.updateBook();
        this.deleteBook();
        this.deleteMyBook();
        this.addMyBooks();
        this.getMyBooks();
    }

    getAllBooks () { this.router.get('/', isAuth, BOOK.getAll) }
    createBook () { this.router.post('/create', isAuth, isAdmin, BOOK.create) }
    updateBook () { this.router.put('/update/:id', isAuth, isAdmin, BOOK.update) }
    deleteBook () { this.router.delete('/delete/:id', isAuth, isAdmin, BOOK.delete) }
    deleteMyBook () { this.router.delete('/deleteMyBook/:id', isAuth, BOOK.deleteMyBook) }
    getMyBooks () { this.router.get('/myBooks', isAuth, BOOK.getMyBooks) }
    addMyBooks () { this.router.post('/addMyBooks', isAuth, BOOK.addMyBooks) }
}

let { router } = new BookRoutes();
module.exports = router;

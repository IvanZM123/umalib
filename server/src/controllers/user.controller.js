// Requires << models >>
const FILESMODEL = require('../models/file.model');
const BOOKSMODELS = require('../models/book.model');

// Requires << Postman >>
let PostmanFile = require('../resources/postman.file');
let PostmaBook = require('../resources/postman.book');

class UserController {
    async profile (request, response) {
        let { name, username, avatar, type } = request.user;
        let user = { name, username, avatar, type };
        let data = { user }
        
        response.json(data);
    }
}

module.exports = new UserController();

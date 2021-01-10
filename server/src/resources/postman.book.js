// Require model
const BOOKMODEL = require('../models/book.model');
const MYBOOKMODEL = require('../models/myBooks');

// Create class
class PostmanBook {
    async getAll () {
        return await BOOKMODEL.find({});
    }

    async getAllOrder (order, limit) {
        return await BOOKMODEL.find({}).sort({ "book.created_at": order }).limit(limit);
    }

    async getAllUserMyBook (username) {
        return await MYBOOKMODEL.find({ username });
    }
}

module.exports = new PostmanBook();

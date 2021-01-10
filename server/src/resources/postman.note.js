// Require model
const NoteModel = require('../models/note.model');

class PostmanNote {
    async getAll (username) {
        return await NoteModel.find({ username: username });
    }

    async getAllOrder (username, order, limit) {
        return await NoteModel.find({ username }).sort({created_at: order}).limit(limit);
    }
}

module.exports = new PostmanNote();

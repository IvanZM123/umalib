// Require model
const FileModel = require('../models/file.model');

class PostmanFile {
    async getAll (username) {
        return await FileModel.find({ username });
    }

    async getAllOrder (username, order, limit) {
        return FileModel.find({ username }).sort({ created_at: order }).limit(limit);
    }
}

module.exports = new PostmanFile();

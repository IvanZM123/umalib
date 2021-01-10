// Require model folder
const FolderModel = require('../models/folder.model');

class PostmanFolder {
    async getAll (username) {
        return await FolderModel.find({ username: username });
    }
}

module.exports = new PostmanFolder();

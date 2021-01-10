// Requires model.
const FolderModel  = require('../models/folder.model');
const FileModel    = require('../models/file.model');
const postmaFolder = require('../resources/postman.folder');

// Create class << Folder >>
class FolderController {
    async getAllFolders (request, response) {
        const { username } = request.user;
        const folders = await postmaFolder.getAll(username);

        response.json(folders);
    }

    async createFolder (request, response) {
        const { name, color } = request.body;
        const { username } = request.user;
        const newFolder = { name, color, username };
        
        // Actions database
        await new FolderModel(newFolder).save();
        const foldersUser = await postmaFolder.getAll(username);

        response.json(foldersUser);
    }

    async updateFolder (request, response) {
        const { id } = request.body;
        const { username } = request.user;
        const newFolder = request.body;

        await FolderModel.findOneAndUpdate({ _id: id }, newFolder);
        const folders = await postmaFolder.getAll(username);

        response.json(folders);
    }

    async deleteFolder (request, response) {
        const { id } = request.params;
        const { username } = request.user;

        // Action database
        await FolderModel.deleteOne({ _id: id });
        await FileModel.deleteMany({ folder: id });
        const folders = await postmaFolder.getAll(username);

        response.json(folders);
    }
}

module.exports = new FolderController();

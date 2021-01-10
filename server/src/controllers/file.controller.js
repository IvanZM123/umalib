// Require model
const FileModel = require('../models/file.model');
const postmanFile = require('../resources/postman.file');
const builderFile = require('../builder/file.builder');
const PREVIEW = require('../helpers/addPreviewFile.helper');

class FileController {
    async getAll (request, response) {
        const { username } = request.user;
        const files = await postmanFile.getAllOrder(username, -1, 0);
        response.json(files);
    }

    // controller where the request to create a file will travel
    async create (request, response) {
        const { username } = request.user;
        const { background, archive } = request.files;

        await builderFile.createFile(request.body, archive, background);
        const filesUser = await postmanFile.getAllOrder(username, -1, 0);

        response.json(filesUser);
    }

    async update (request, response) {
        const { username } = request.user;
        const { id } = request.body;
        const { archive, background } = request.files;

        await builderFile.updateFile(id, request.body, archive, background);
        const files = await postmanFile.getAllOrder(username, -1, 0);

        response.json(files);
    }

    async delete (request, response) {
        const { username } = request.user;
        const { id } = request.params;

        await builderFile.deleteFile(id);
        const files = await postmanFile.getAllOrder(username, -1, 0);

        response.json(files);
    }

    async deleteAllCategory (request, response) {
        let { username } = request.user;
        let { id } = request.params;
        let { folder } = request.query;

        await FileModel.deleteMany({ category: id, folder });
        const FILES = await postmanFile.getAllOrder(username, -1, 0);

        response.json(FILES);
    }
}

module.exports = new FileController();

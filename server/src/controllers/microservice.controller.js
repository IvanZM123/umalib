// Require << path >>
let path = require('path');

// Require << dowload model >>
const DOWNLOAD = require('../helpers/downloads.helper');

class MicroserviceController {
    async downloadFile (request, response) {
        let { id } = request.params;
        let { name, username } = request.user;
        let { category, filename } = request.query;
        console.log(request.query);

        let rootPublic = path.resolve('public');
        let fullpath = path.join(`${ rootPublic }/archive/${ id }`);

        response.download(fullpath, async (error) => {
            if(error){ return console.log(error) }
            await DOWNLOAD.createDownloadFile({ username, name, category, filename });
            console.log('Download successfully');
        });
    }

    async downloadBook (request, response) {
        let { id } = request.params;
        let { filename } = request.query;
        let { username, name } = request.user;

        let rootPublic = path.resolve('public');
        let fullpath = path.join(`${ rootPublic }/book/${ id }`);

        response.download(fullpath, async (error) => {
            if (error) { return console.log(error) }
            await DOWNLOAD.createDownloadFile({ username, name, category: 'Libros', filename });
            console.log('Book download successfully');
        });
    }

    async getAllDownloadFile (request, response) {
        let { username } = request.user;
        let downloadsFiles = await DOWNLOAD.getAllDownloadUser(username);

        response.json(downloadsFiles);
    }

    async deleteDownload (request, response) {
        let { username } = request.user;
        let { id } = request.params;

        await DOWNLOAD.deleteDownloadUser(id);
        let downloadsFiles = await DOWNLOAD.getAllDownloadUser(username);

        response.json(downloadsFiles);
    }
}

module.exports = new MicroserviceController();

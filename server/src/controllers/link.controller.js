// Require builder and postman
const builderLink = require('../builder/link.builder');
const POSTMANLINK = require('../resources/postman.link');

class LinkController {
    async getAll (request, response) {
        let { username } = request.user;
        const LINKS = await POSTMANLINK.getAllOrder(username, -1, 0);

        response.json(LINKS);
    }

    async create (request, response) {
        const { username } = request.user;
        const { background } = request.files;

        await builderLink.createLink(request.body, background);
        const LINKS = await POSTMANLINK.getAllOrder(username, -1, 0);

        response.json(LINKS);
    }

    async update (request, response) {
        let { username } = request.user;
        let { background } = request.files;

        await builderLink.updateLink(request.body, background);
        const LINKS = await POSTMANLINK.getAllOrder(username, -1, 0);

        response.json(LINKS);
    }

    async delete (request, response) {
        let { id } = request.params;
        let { username } = request.user;

        await builderLink.deleteLink(id);
        const LINKS = await POSTMANLINK.getAllOrder(username, -1, 0);

        response.json(LINKS);
    }
}

module.exports = new LinkController();

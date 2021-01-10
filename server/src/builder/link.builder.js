// Requires model and sort link
const MODELLINK = require('../models/link.model');
let { sortLink } = require('../helpers/sortEntity.helper');

// Create class
class LinkBuilder {
    async createLink (body, background) {
        let newLink = sortLink(body, background);
        await new MODELLINK(newLink).save();
    }

    async updateLink (body, background) {
        let { id } = body;
        let newLink = sortLink(body, background);
        await MODELLINK.updateOne({ _id: id }, newLink);
    }

    async deleteLink (_id) {
        await MODELLINK.deleteOne({ _id });
    }
}

module.exports = new LinkBuilder();

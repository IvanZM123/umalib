// Require model
const LINKMODEL = require('../models/link.model');

class PostmanLink {
    async getAll (username) {
        return await LINKMODEL.find({ username });
    }

    async getAllOrder (username, order, limit) {
        return await LINKMODEL.find({ username }).sort({ created_at: order }).limit(limit);
    }
}

module.exports = new PostmanLink();

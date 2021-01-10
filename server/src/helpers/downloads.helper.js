// Require download model
const DOWNLOADMODEL = require('../models/download.model');

class Downloads {
    async createDownloadFile (file) {
        await new DOWNLOADMODEL(file).save();
    }

    async getAllDownloadUser (username) {
        return await DOWNLOADMODEL.find({ username }).sort({ created_at: -1 }).limit(0);
    }

    async deleteDownloadUser (id) {
        await DOWNLOADMODEL.findByIdAndDelete({ _id: id });
    }
}

module.exports = new Downloads();

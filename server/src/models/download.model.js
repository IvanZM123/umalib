// Require mongoose
const mongoose = require('mongoose');

// Require function created date
const created = require('../helpers/createdDate.helper');

// Create template for << download >>
let downloadShema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: false },
    filename: { type: String, required: true },
    username: { type: String, required: true },
    created_at: { type: Number, default: () => Date.now() }
});

module.exports = mongoose.model('downloads', downloadShema);

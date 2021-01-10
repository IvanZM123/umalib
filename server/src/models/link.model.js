// Require << mongoose >>
const mongoose = require('mongoose');

// Require function date
const created = require('../helpers/createdDate.helper');

// Create template << Link >>
const linkShema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: false },
    url: { type: String, required: true },
    background: { type: String, required: false },
    username: { type: String, required: true },
    created_at: { type: Number, default: () => Date.now() }
});

module.exports = mongoose.model('links', linkShema);

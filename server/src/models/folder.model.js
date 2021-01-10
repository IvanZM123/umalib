// Requires mongoose
const mongoose = require('mongoose');

// Create template for folder
const folderShema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, default: 'primary' },
    username: { type: String, required: true }
});

module.exports = mongoose.model('folders', folderShema);

// Require mongoose
const mongoose = require('mongoose');

// Create template for << file >>
const fileShema = new mongoose.Schema({
    title:       { type: String, required: true },
    subtitle:    { type: String, required: true },
    description: { type: String, required: false },
    archive:     { type: String, required: true },
    background:  { type: String, required: false },
    username:    { type: String, required: true },
    folder:      { type: String, required: false, default: undefined },
    category:    { type: String, required: true, default: 'Sin categoria' },
    preview:     { type: String, default: '' },
    created_at:  { type: Number, default: () => Date.now() }
});

module.exports = mongoose.model('files', fileShema);

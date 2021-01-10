// Require mongoose
const mongoose = require('mongoose');

// Create template for << Note >>
const noteShema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: false },
    username: { type: String, required: true },
    color: { type: String, required: false },
    created_at: { type: Number, default: () => Date.now() }
});

module.exports = mongoose.model('notes', noteShema);

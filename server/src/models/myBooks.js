// Require mongoose
let mongoose = require('mongoose');

// Create template for myBooks
let myBooksShema = new mongoose.Schema({
    book: { type: Object, required: true },
    author: { type: Object, required: true },
    username: { type: String, required: true }
});

module.exports = mongoose.model('myBooks', myBooksShema);

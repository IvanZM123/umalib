// Require mongoose.
let mongoose = require('mongoose');

// Require function.
let created = require('../helpers/createdDate.helper');

// Create << Book >>
let bookShema = new mongoose.Schema({
    book: {
        title: String,
        subtitle: String,
        cover_photo: String,
        description: String,
        sinopsis: String,
        content_book: String,
        publication_date: String,
        editorial: String,
        category: String,
        created_at: { type: Number, default: () => Date.now() }
    },

    author: {
        fullname: String,
        biography: String,
        avatar: String,
        birthday: String,
        country: String,
        placeOfBirth: String,
        gender: String
    }
});

module.exports = mongoose.model('books', bookShema);

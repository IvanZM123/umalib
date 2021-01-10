// Import mongoose
const mongoose = require('mongoose');

// Import function created Date
const created = require('../helpers/createdDate.helper');

const userShema = new mongoose.Schema({
    name:       { type: String, required: true },
    surname:    { type: String, required: true },
    country:    { type: String, required: true },
    gender:     { type: String, required: true },
    age:        { type: Number, required: true },
    username:   { type: String, required: true },
    password:   { type: String, required: true },
    type:       { type: String, required: true },
    avatar:     { type: String, required: false },
    created_at: { type: Number, default: () => Date.now() }
});

module.exports = mongoose.model('users', userShema);

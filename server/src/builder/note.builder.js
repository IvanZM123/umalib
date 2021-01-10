// Requires model
const MODELNOTE = require('../models/note.model');

// Create a class
class NoteBuilder {
    async createNote (note) {
        await new MODELNOTE(note).save();
    }

    async updateNote (_id, newNote) {
        await MODELNOTE.updateOne({ _id }, newNote);
    }

    async deleteNote (_id) {
        await MODELNOTE.deleteOne({ _id });
    }
}

module.exports = new NoteBuilder();

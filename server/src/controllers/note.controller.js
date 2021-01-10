// Require builder and postman
const builderNote = require('../builder/note.builder');
const postmanNote = require('../resources/postman.note');

class NoteController {
    async getAll (request, response) {
        const { username } = request.user;
        const files = await postmanNote.getAllOrder(username, -1, 0);
        
        response.json(files);
    }

    async create (request, response) {
        const { username } = request.user;
        
        await builderNote.createNote(request.body);
        const notes = await postmanNote.getAllOrder(username, -1, 0);

        response.json(notes);
    }

    async update (request, response) {
        const { username } = request.user;
        const { _id } = request.body;

        await builderNote.updateNote(_id, request.body);
        const notes = await postmanNote.getAllOrder(username, -1, 0);

        response.json(notes);
    }

    async delete (request, response) {
        const { username } = request.user;
        const { id } = request.params;

        await builderNote.deleteNote(id);
        const notes = await postmanNote.getAllOrder(username, -1, 0);

        response.json(notes);
    }
}

module.exports = new NoteController();

// Requires express
const { Router } = require('express');

// Require middleware.
const isAuth = require('../middlewares/isAuth.middleware');

// Require controller.
const note = require('../controllers/note.controller');

// Create class
class NoteRoutes {
    constructor () {
        this.router = Router();
        
        this.getAllNote();
        this.createNote();
        this.updateNote();
        this.deleteNote();
    }

    getAllNote () { this.router.get('/', isAuth, note.getAll) }
    createNote () { this.router.post('/create', isAuth, note.create) }
    updateNote () { this.router.put('/update', isAuth, note.update) }
    deleteNote () { this.router.delete('/delete/:id', isAuth, note.delete) }
}

const { router } = new NoteRoutes();
module.exports = router;

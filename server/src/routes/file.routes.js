// Impor express
const { Router } = require('express');

// Import middleware
const isAuth = require('../middlewares/isAuth.middleware');

// Import controller
const file = require('../controllers/file.controller');

// Create class
class FileRoutes {
    constructor () {
        this.router = Router();

        this.getAllFiles();
        this.createFile();
        this.updateFile();
        this.deleteFile();
        this.deleteAllCategory();
    }

    getAllFiles () { this.router.get('/', isAuth, file.getAll) }

    createFile () { this.router.post('/create', isAuth, file.create) }

    updateFile () { this.router.put('/update', isAuth, file.update) }

    deleteFile () { this.router.delete('/delete/:id', isAuth, file.delete) }

    deleteAllCategory () { this.router.delete('/deleteAllCategory/:id', isAuth, file.deleteAllCategory) }
}

const { router } = new FileRoutes();
module.exports = router;

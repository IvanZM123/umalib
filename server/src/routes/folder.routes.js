// Require express
const { Router } = require('express');

// Require middeware
const isAuth = require('../middlewares/isAuth.middleware');

// Require controller folder
const folder = require('../controllers/folder.controller');

// Require postam
const postmanFolder = require('../resources/postman.folder');

class FolderRoutes {
    constructor () {
        this.router = Router();
        
        this.getAll();
        this.createFolder();
        this.updateFolder();
        this.deleteFolder();
    }

    getAll () { this.router.get('/', isAuth, folder.getAllFolders) }

    createFolder () { this.router.post('/create', isAuth ,folder.createFolder) }

    updateFolder () { this.router.put('/update', isAuth, folder.updateFolder) }

    deleteFolder () { this.router.delete('/delete/:id', isAuth , folder.deleteFolder) }
}

const { router } = new FolderRoutes();
module.exports = router;

// Require << express >>
const { Router } = require('express');

// Require middleware
const isAuth = require('../middlewares/isAuth.middleware');

// Require controller
const link = require('../controllers/link.controller');

// Create class
class LinkRoutes {
    constructor () {
        this.router = Router();

        this.getAll();
        this.create();
        this.update();
        this.delete();
    }

    getAll () { this.router.get('/', isAuth, link.getAll) }
    create () { this.router.post('/create', isAuth, link.create) }
    update () { this.router.put('/update', isAuth, link.update) }
    delete () { this.router.delete('/delete/:id', isAuth, link.delete) }
}

const { router } = new LinkRoutes();
module.exports = router;

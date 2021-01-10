// Require << express >>
const { Router } = require('express');

// Import middleware
const isAuth = require('../middlewares/isAuth.middleware');
const isAdmin = require('../middlewares/isAdmin');

// Require controller
const ADMIN = require('../controllers/admin.controller');

// Create class
class AdminRoutes {
    constructor () {
        this.router = Router();
        
        this.getAllUsers();
    }

    getAllUsers () {
        this.router.get('/getAllUsers', isAuth, isAdmin, ADMIN.getAllUser);
    }
}

const { router } = new AdminRoutes();
module.exports = router;

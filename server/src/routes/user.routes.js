// Require express
const { Router } = require('express');

// Import middleware
let isAuth = require('../middlewares/isAuth.middleware');

// Import controller
const USER = require('../controllers/user.controller');

class UserRoute {
    constructor () {
        this.router = Router();

        this.profile();
        this.logout();
    }

    profile () { this.router.get('/profile', isAuth, USER.profile) }

    logout () {
        this.router.get('/logout', (Request, Response) => {
            Request.logOut();
            Response.json({
                type: 'error',
                status: true,
                text: 'Has cerrado sesion'
            });
        });
    }
}

const { router } = new UserRoute();
module.exports = router;

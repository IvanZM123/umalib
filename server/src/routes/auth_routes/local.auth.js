// Import express
const { Router } = require('express');
const passport = require('passport');

// Import middleware
const verifyTypeUser = require('../../middlewares/verifyTypeUser');
const isRegistered = require('../../middlewares/isRegistered');
const verifyCredentials = require('../../middlewares/verifyCredentials.middleware');

class AuthLocalRoutes {
    constructor () {
        this.router = Router();

        this.signup();
        this.signin();
    }

    signup () {
        this.router.post(
            '/local.signup', // path
            verifyTypeUser, // 1er middleware
            isRegistered, // 2do middleware
            passport.authenticate('local.signup', { // Logic auth
            successRedirect: '/api/user/profile'
        }));
    }

    signin () {
        this.router.post(
            '/local.signin',
            verifyCredentials,
            passport.authenticate('local.signin', {
                successRedirect: '/api/user/profile'
            })
        );
    }
}

const { router } = new AuthLocalRoutes();
module.exports = router;

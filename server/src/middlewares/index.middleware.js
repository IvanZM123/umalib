// Requires modules
const morgan = require('morgan');
const express = require('express');
const multer = require('multer');
const passport = require('passport');
const session = require('express-session');

// Require passport
require('../auth/local.auth');

// Requires storage
const storage = require('../helpers/fileUpload.helper');
const fields = require('../lib/fieldsMulter.lib');

class IndexMiddleware {
    constructor () {
        this.middleware = express();
        
        this.watchful();
    }

    watchful () {
        this.middleware.use(morgan('dev'));
        this.middleware.use(express.json());
        this.middleware.use(express.urlencoded({ extended: false }));
        this.middleware.use(session({
            secret: 'library-umalib-app',
            resave: false,
            saveUninitialized: false
        }));
        this.middleware.use(passport.initialize());
        this.middleware.use(passport.session());
        this.middleware.use(multer({ storage }).fields(fields));
    }
}

const { middleware } = new IndexMiddleware();
module.exports = middleware;

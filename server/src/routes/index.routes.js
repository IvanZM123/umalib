// Import express
const express = require('express');

// Import routes
const authLocalRoutes = require('./auth_routes/local.auth');
const userRoute = require('./user.routes');
const folderRoutes = require('./folder.routes');
const fileRoutes = require('./file.routes');
const noteRoutes = require('./note.routes');
const linkRoutes = require('./link.routes');
const adminRoutes = require('./admin.routes');
const microserviceRoutes = require('./microservice.routes');
const bookRoutes = require('./book.routes');

class IndexRoutes {
    constructor () {
        this.routes = express();

        this.auth_routes();
        this.user_routes();
        this.folder_routes();
        this.file_routes();
        this.note_routes();
        this.link_routes();
        this.admin_routes();
        this.microservice_routes();
        this.book_routes();
    }

    auth_routes () { this.routes.use('/auth', authLocalRoutes) }
    user_routes () { this.routes.use('/user', userRoute) }
    folder_routes () { this.routes.use('/folder', folderRoutes) }
    file_routes () { this.routes.use('/file', fileRoutes) }
    note_routes () { this.routes.use('/note', noteRoutes) }
    link_routes () { this.routes.use('/link', linkRoutes) }
    admin_routes () { this.routes.use('/admin', adminRoutes) }
    microservice_routes () { this.routes.use('/microservice', microserviceRoutes) }
    book_routes () { this.routes.use('/book', bookRoutes) }
}

const { routes } = new IndexRoutes();
module.exports = routes;

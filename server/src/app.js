// import express
const express = require('express');
const { createServer } = require('http');
const { connect } = require('mongoose');
const path = require('path');
require('dotenv').config();

// Require middleware
const middleware = require('./middlewares/index.middleware');

// Import routes api/server
const IndexRoutes = require('./routes/index.routes');

class Server {
    constructor () {
        this.server = express();
        this.http = createServer(this.server);

        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }

    settings () {
        this.server.set('port', process.env.PORT || 3000);
    }

    middlewares () {
        this.server.use(middleware);
    }

    routes () {
        this.server.use('/api', IndexRoutes);
    }

    staticFiles () {
        const rootPublic = path.resolve('public');
        this.server.use(express.static(rootPublic));
    }

    started () {
        this.http.listen(
            this.server.get('port'),
            () => console.log(`App execute in http://localhost:${ this.server.get('port') }`)
        );
    }

    connectDB () {
        connect(
            process.env.URI_CLOUD_DATABASE,
            { useNewUrlParser: true, useFindAndModify: false }
        )
        .then(value => console.log('The connection DB is successfully'))
        .catch(error => console.log(error));
    }
}

module.exports = new Server();

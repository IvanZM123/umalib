// Import << express >>
const { Router } = require('express');

// Require middleware.
let isAuth = require('../middlewares/isAuth.middleware');

// Require controller.
let download = require('../controllers/microservice.controller');

// Create class
class MicroserviceRoutes {
    constructor () {
        this.router = Router();

        this.getDownloadsFile();
        this.downloadFile();
        this.downloadBook();
        this.deleteDownload();
    }

    getDownloadsFile () { this.router.get('/', isAuth, download.getAllDownloadFile) }

    downloadFile () { this.router.get('/download/file/:id', isAuth, download.downloadFile) }
    downloadBook () { this.router.get('/download/book/:id', isAuth, download.downloadBook) }
    
    deleteDownload () { this.router.delete('/delete/:id', isAuth, download.deleteDownload) }
}

let { router } = new MicroserviceRoutes();
module.exports = router;

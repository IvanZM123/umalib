// Requires multer and path
const { diskStorage } = require('multer');
const path = require('path');
const uuid = require('uuid/v4');

const storage = diskStorage({
    destination: (request, file, callback) => {
        const { fieldname } = file;
        const rootPublic = path.resolve('public');
        const fullPath = path.join(`${ rootPublic }/${ fieldname }`);

        callback(null, fullPath);
    },

    filename: (request, file, callback) => {
        const { originalname } = file;
        const extfile = path.extname(originalname);
        const filename = uuid() + extfile;
        
        callback(null, filename);
    }
});

module.exports = storage;

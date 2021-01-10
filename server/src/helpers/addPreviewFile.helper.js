// Require modules
require('dotenv').config();
let cloudapi = require('convertapi')(process.env.TOKEN_CONVERTAPI);
let path = require('path');
let FILEMODEL = require('../models/file.model');

function typeExtension (file) {
    let extension = path.extname(file);
    if (
        (extension == '.docx') || (extension == '.pptx') ||
        (extension == '.xlsx') || (extension == '.pdf')
    ) { return true }
    else{ return false }
}

module.exports = async function addPreview (file, _id) {
    const rootPublic = path.resolve('public');
    const filename = path.join(`${ rootPublic }/archive/${ file }`);

    if (typeExtension(file)) {
        var preview = await cloudapi.convert('pdf', { File: filename });
        preview.file.save(path.join(`${ rootPublic }/preview/${ preview.file.fileInfo.FileName }`));
        await FILEMODEL.updateOne({ _id }, { $set: { preview: preview.file.fileInfo.FileName } });
    } else {
        return '';
    }
}

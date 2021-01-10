const PREVIEW = require('../helpers/addPreviewFile.helper');

module.exports = async function createPreview (request, response) {
    console.log(request.body);
    response.json('Hola');
}

// Requires message
const { errorCode } = require('../lib/messages.lib');
require('dotenv').config();

module.exports =
function verifyTypeUser (request, response, next) {
    const { type, code } = request.body;
    
    if(type === 'admin'){
        code !== process.env.CODE_SECURITY
            ? response.json(errorCode)
            : next();
    }else{
        next();
    }
}

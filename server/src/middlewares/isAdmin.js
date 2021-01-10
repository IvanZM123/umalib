// Require messages
const { needAdmin } = require('../lib/messages.lib');

module.exports = 
function (request, response, next) {
    let { type } = request.user;

    type == 'admin'
        ? next()
        : response.json(needAdmin);
}

// Require message
const { needAuth } = require('../lib/messages.lib');

module.exports = 
function isAuth (request, response, next) {
    const verifyAuth = request.isAuthenticated();
    verifyAuth ? next() : response.json(needAuth);
}

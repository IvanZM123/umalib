// Require model.
const UserModel = require('../models/user.model');

// Import message
const { userExistence } = require('../lib/messages.lib');

module.exports = 
async function (request, response, next) {
    const { username } = request.body;

    const verifyExistence = await UserModel.find({ username });
    
    verifyExistence.length > 0
        ? response.json(userExistence)
        : next();
}

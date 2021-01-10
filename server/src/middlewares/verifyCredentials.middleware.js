// Require models
const UserModel = require('../models/user.model');

// Require encrypto
const Encryptor = require('../helpers/encryptor.helper');
const { comparePassword } = new Encryptor();

// Requires messages.
const { incorrectCredentials } = require('../lib/messages.lib');

module.exports = 
async function verifyCredentials (request, response, next) {
    const { username, password } = request.body;
    const verifyUsername = await UserModel.find({ username });

    if(verifyUsername.length > 0){
        const user = verifyUsername[0];
        const verifyPassword = await comparePassword(password, user.password);
        
        verifyPassword ? next() : response.json(incorrectCredentials);
    }else{
        response.json(incorrectCredentials);
    }
}

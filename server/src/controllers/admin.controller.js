// Import model
const USERMODEL = require('../models/user.model');

class AdminController {
    async getAllUser (request, response) {
        let registered_users = await USERMODEL.find(
            { type: 'user' }, { password: 0, __v: 0 }
        ).sort({ created_at: -1 });
        
        response.json(registered_users);
    }
}

module.exports = new AdminController();

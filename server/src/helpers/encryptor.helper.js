// Requires module bcrypt
const bcrypt = require('bcryptjs');

class Encryptor {
    async encryptPassword (password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    async comparePassword (password, passwordDB){
        return await bcrypt.compare(password, passwordDB);
    }
}

module.exports = Encryptor;

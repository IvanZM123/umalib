// Require passport
const passport = require('passport');
const { Strategy } = require('passport-local');

// Import model of user
const UserModel = require('../models/user.model');

// Import method for encrypt password
const encryptor = require('../helpers/encryptor.helper');
const { encryptPassword } = new encryptor();

// Import sortuser
const sortUser = require('../helpers/sortUser.helper');

passport.use('local.signup', new Strategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },

    async (Request, username, password, done) => {
        const { avatar } = Request.files;
        const newUser = sortUser(Request.body, avatar);

        newUser.password = await encryptPassword(password);
        await new UserModel(newUser).save();

        done(null, newUser);
    }
));

passport.serializeUser(({ username }, done) => { done(null, username) });

passport.deserializeUser(async (username, done) => {
    const user = await UserModel.findOne({ username });
    done(null, user);
});

passport.use('local.signin', new Strategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },

    async (username, password, done) => {
        const user = await UserModel.findOne({ username });
        done(null, user);
    }
));

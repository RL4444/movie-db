const express = require('express');
const passport = require('passport');

const router = express.Router();

const { createUser, getUser } = require('../db/controllers/user');

router.get(
    '/login',
    passport.authenticate('auth0', {
        scope: 'openid email profile',
    }),
    (req, res) => {
        res.redirect('/');
    }
);

router.get('/callback', (req, res, next) => {
    passport.authenticate('auth0', (err, user) => {
        if (err) return next(err);
        if (!user) return res.redirect('/login');
        req.logIn(user, async (err) => {
            if (err) return next(err);

            // take user object and persist to db
            const { displayName: name, emails, picture: img } = user;
            const email = emails[0].value;

            // check if user exists
            const findUser = await getUser(email);

            // create if user is not in db
            if (!findUser.success) {
                await createUser(name, email, img);
            }

            res.redirect('/');
        });
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();

    const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, BASE_URL } = process.env;

    res.redirect(`https://${AUTH0_DOMAIN}/logout?client_id=${AUTH0_CLIENT_ID}&returnTo=${BASE_URL}`);
});

module.exports = router;

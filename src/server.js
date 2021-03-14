require('dotenv').config();
const express = require('express');
const http = require('http');
const next = require('next');
const session = require('express-session');

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const uid = require('uid-safe');

// routes with calls
const authRoutes = require('../api-routes/auth-routes');
const movieRoutes = require('../api-routes/movie-routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dev,
    dir: './src',
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    // start server
    const server = express();

    // create session management object
    const sessionConfig = {
        secret: uid.sync(18),
        resave: false,
        cookie: {
            maxAge: 86400 * 10000, // Length of cookie validity in ms
        },
        saveUninitialized: true,
    };
    server.use(session(sessionConfig));

    // Auth0Strategy finds and returns user
    const auth0Strategy = new Auth0Strategy(
        {
            domain: process.env.AUTH0_DOMAIN,
            clientID: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            callbackURL: process.env.AUTH0_CALLBACK_URL,
        },
        function (accessToken, refreshToken, extraParams, profile, done) {
            return done(null, profile);
        }
    );

    // Passport middleware and init
    passport.use(auth0Strategy);
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));

    // Passport and auth routes
    server.use(passport.initialize());
    server.use(passport.session());
    server.use(authRoutes);
    server.use(movieRoutes);

    
    server.get('/movie/:id', (req, res) => {
        const actualPage = '/movie';
        console.log(req.params);
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPage, queryParams);
    });

    // routes with auth restriction middleware
    const checkForAuth = (req, res, next) => {
        if (!req.isAuthenticated()) return res.redirect('/login');
        next();
    };

    server.use('/profile', checkForAuth);

    // handling everything else with Next.js
    server.get('*', handle);

    http.createServer(server).listen(process.env.PORT, () => {
        console.log(`coming at ya on ${process.env.PORT}`);
    });
});

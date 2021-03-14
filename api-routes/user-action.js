const express = require('express');
const router = express.Router();

const { createUser, getUser } = require('../db/controllers/userMovies');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send(401);
}

router.post('/')

module.exports = router;

// router.post('/api/thoughts', ensureAuthenticated, (req, res) => {
//     const { message } = req.body;
//     const newThought = {
//         _id: new Date().getTime(),
//         message,
//         author: req.user.displayName,
//     };
//     thoughts.push(newThought);
//     res.send({ message: 'Thanks!' });
// });
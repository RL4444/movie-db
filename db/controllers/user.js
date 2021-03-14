const db = require('../database');

const createUser = (name, email, img) => {
    const sql = 'INSERT INTO user (name, email, img) VALUES (?, ?, ?)';
    const params = [name, email, img];

    console.log('params ', params);

    db.all(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
            return { success: false, error: err, rows: null };
        }
        return { success: true, error: null, rows: rows };
    });
};

const getUser = (email) => {
    console.log('email in get user', email);

    const sql = `SELECT * FROM user WHERE email = ?`;
    const params = [email];

    return new Promise(function (resolve, reject) {
        db.all(sql, params, (err, rows) => {
            if (err || !rows.length) {
                console.log(err);
                resolve({ success: false, error: err, rows: null });
            }
            resolve({ success: true, error: null, rows: rows });
        });
    });
};

module.exports = { createUser, getUser };

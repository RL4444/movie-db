const db = require('../database');

const addMovie = (movieId, userId, liked) => {
    const sql = 'INSERT INTO user_movies (user_id, film_id, liked) VALUES (?, ?, ?) RETURNING *';
    const params = [movieId, userId, liked];

    db.all(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
            return { success: false, error: err, rows: null };
        }
        return { success: true, error: null, rows: rows };
    });
};


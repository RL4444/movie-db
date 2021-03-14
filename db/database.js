const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';

const tableList = [
    {
        // make appropriate sql table name
        name: 'user',
        // the rows this table will need
        rows: ` 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text, 
        email text UNIQUE,
        img text,
        CONSTRAINT email_unique UNIQUE (email)
        `,
    },
    {
        // make appropriate sql table name
        name: 'user_movies',
        // the rows this table will need
        rows: ` 
        user_id INTEGER NOT NULL,
        film_id INTEGER NOT NULL,
        liked BOOLEAN DEFAULT false
        `,
    },
    // {
    //     // make appropriate sql table name
    //     name: 'movie_comments',
    //     // the rows this table will need
    //     rows: `
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     user_id INTEGER NOT NULL,
    //     film_id INTEGER NOT NULL,
    //     comment STRING NOT NULL
    //     `,
    // },
];

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error('Cannot find db: ', err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');
        for (let i = 0; i < tableList.length; i++) {
            try {
                createDbTable(tableList[i].name, tableList[i].rows);
            } catch (error) {
                console.log(`error creating db ${tableList[i].name} in catch block`);
            }
        }
    }
});

function createDbTable(tableName, sqlRows) {
    db.run(`CREATE TABLE ${tableName} (${sqlRows})`, (err) => {
        if (err) {
            // Table already exists
            console.log(`Table ${tableName} already exists...skipping`);
        } else {
            // Table created successfully
            console.log(`Table ${tableName} has been successfully created`);
        }
    });
}

module.exports = db;

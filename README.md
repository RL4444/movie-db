## A Movie Database app built with sqlite3, Express, Auth0 authentication, React, Next and Styled Components.

This PWA allows users to search and add films to watch list with minimum fuss of log in. Auth0 is one method that makes the UX smoother and safer for both user and developer.

---

**Requirements For Running The Project**

Create a `.env` file in the project root.

Obtain [Auth0 keys](http://auth0.com/) by creating an account if you don't have one http://auth0.com/, create a new project (https://auth0.com/blog/ if you have never done this) and add them to the .env as per example of `.example.env`.

To use the TMDB api you will need to register and obtain a key here - https://developers.themoviedb.org/

Once you have obtained the TMDB key add it to the `.env` file.

---

**To start the project**

Use npm or yarn to download the dependencies

`npm install` or ` yarn`

Use either `npm run dev` or `yarn dev` to run the project in dev mode

The database will be initialised automatically at this point. Delete the `db.sqlite` in the projects root if you need to change the schema dramatically. The file will always rebuild when making a starting the `dev` server.

const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const BASE_API_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.MOVIE_API_KEY;


const useFetch = async (ext, query) => {
    const params = query ? `/?${query}&` : '?';
    try {
        console.log(`${BASE_API_URL}/${ext}${params}api_key=${API_KEY}`);
        const res = await fetch(`${BASE_API_URL}/${ext}${params}api_key=${API_KEY}`);
        const data = await res.json();

        console.log('data in movie fetch ', data);
        if (!data.error) {
            return { data: data, success: true, error: null };
        }
        return { data: null, success: false, error };
    } catch (error) {
        return { data: null, success: false, error };
    }
};

router.get('/api/movies', async (req, res) => {
    const { ext = 'movie/popular', query = '' } = req.query;
    const { data, success, error } = await useFetch(ext, query);
    res.send({ data: data.results, error, success });
});

router.get('/api/movie', async (req, res) => {
    const { ext, query } = req.query;
    const substring = `movie/${query}`;
    const { data, success, error } = await useFetch(substring, '');
    res.send({ data, error, success });
});

module.exports = router;

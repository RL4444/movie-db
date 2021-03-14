import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [requesting, setRequesting] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setRequesting(true);
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
                setRequesting(false);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    return { response, error, requesting };
};

export default useFetch;

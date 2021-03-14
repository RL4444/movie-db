import { useState, useEffect } from 'react';

const useApi = (url, options) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const [requesting, setRequesting] = useState(false);

    const { ext, query } = options;

    const urlWithParams = `/api/${url}/?ext=${ext}&query=${query}`;

    useEffect(() => {
        const fetchData = async () => {
            setRequesting(true);
            try {
                console.log('urlwithparams ', urlWithParams);
                const res = await fetch(urlWithParams, options);
                const { data: resData, error: resError } = await res.json();
                setData(resData);
                setError(resError);
                setRequesting(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return { data, error, requesting };
};

export default useApi;

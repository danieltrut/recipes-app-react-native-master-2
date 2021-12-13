import React, { useState } from "react";
import { useRequest } from "./requestContainer";

const useApiResult = (request) => {
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    const requester = useRequest();

    useEffect(() => {
        requester(request)
            .then(async (response) => {
                if (response.ok) {
                    setResults(await response.json());
                    setError(null);
                } else {
                    setError(await response.text());
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [request, requester]);

    return [results, error];
};

export default useApiResult;
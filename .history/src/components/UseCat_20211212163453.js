import React, { useState, useEffect } from "react";

const useCat = () => {
    const [categories, setCat] = useState([]);

    useEffect(() => {
        fetch("http://192.168.1.200:3000/category")
            .then(async (response) => {
                if (response.ok) setCat(await response.json());
            });
    }, []);

    return categories;
};

export default useCat;
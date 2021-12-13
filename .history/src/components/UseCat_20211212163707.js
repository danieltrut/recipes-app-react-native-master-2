import React, { useState, useEffect } from "react";

const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://api/todos")
            .then(async (response) => {
                if (response.ok) setTodos(await response.json());
            });
    }, []);

    return todos;
};

export default useTodos;
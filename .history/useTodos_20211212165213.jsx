import React from "react";
import useTodos from "./useTodos";

const TodoList = () => {

    const [todos, error] = useTodos();

    return (
        <div>
            {error !== null
                ? <p>Error fetching todos: {error}</p>
                : todos.map(item => <Todo todo={item} />)}
        </div>
    );
};

export default TodoList;
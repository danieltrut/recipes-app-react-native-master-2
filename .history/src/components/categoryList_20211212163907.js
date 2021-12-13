import React from "react";
import useTodos from "../components/useTodos";

const TodoList = () => {

    const todos = useTodos();

    return (
        <div>
            {todos.map(item => <Todo todo={item} />)}
        </div>
    );
};

export default TodoList;
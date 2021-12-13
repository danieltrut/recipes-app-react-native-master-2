import React from "react";
import useCat from "./UseCat";

const CatList = () => {

    const categories = useCat();

    return (
        <div>
            {categories.map(item => <Todo todo={item} />)}
        </div>
    );
};

export default CatList;
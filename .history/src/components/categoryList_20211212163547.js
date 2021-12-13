import React from "react";
import useCat from "./UseCat";

const CatList = () => {

    const categories = useCat();

    return (
        <div>
            {categories.map(item => <Category category={item} />)}
        </div>
    );
};

export default CatList;
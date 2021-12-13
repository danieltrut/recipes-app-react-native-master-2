import { useState, useEffect, useMemo } from "react";
import useApiResult from "./useApiResult";
import { getTodos } from "./requests";

const useTodos = () => {
    const request = useMemo(() => getTodos(), []);
    return useApiResult(request);
};

export default useTodos;
import React, { useContext, createContext } from "react";
import request from "./request";

export const RequestContext = createContext();

export const useRequest = () => useContext(RequestContext);

export const RequestProvider = ({ children }) => {
    return (
        <RequestContext.Provider value={request}>{children}</RequestContext.Provider>
    );
};
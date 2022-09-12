import { createContext, useReducer } from "react";

const initalState = {};

const reducer = (state, action) => {
    return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initalState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
import { createContext, useReducer } from "react";
import questions from "../data";

const initalState = {
    questions,
    currentQuestionIndex: 0,
    showResults: false
};

const reducer = (state, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case "NEXT_QUESTION": {
            const showResults = 
                state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults 
                ? state.currentQuestionIndex 
                : state.currentQuestionIndex + 1;
            return {
                ...state,
                currentQuestionIndex,
                showResults,
            }
        }
    }
    return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initalState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
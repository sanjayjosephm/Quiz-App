import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [answeredQuestions, setAnsweredQuestions] = useState(new Set());

    const markQuestionAsAnswered = (questionNumber) => {
        setAnsweredQuestions((prev) => new Set(prev).add(questionNumber));
    };

    return (
        <QuizContext.Provider value={{ answeredQuestions, markQuestionAsAnswered }}>
            {children}
        </QuizContext.Provider>
    );
};

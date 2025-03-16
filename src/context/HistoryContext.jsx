import React, { createContext, useState, useEffect } from 'react';

export const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
        setHistory(storedHistory);
    }, []);

    useEffect(() => {
        localStorage.setItem("calcHistory", JSON.stringify(history));
    }, [history]);

    const addToHistory = (entry) => {
        setHistory(prevHistory => [...prevHistory, entry]);
    };

    const clearHistory = () => {
        setHistory([]);
    };

    return (
        <HistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
            {children}
        </HistoryContext.Provider>
    );
};

export default HistoryProvider;
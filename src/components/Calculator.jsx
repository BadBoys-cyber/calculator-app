import React, { useState, useEffect } from 'react';
import Button from './Button';
import Display from './Display';
import History from './History';
import "../styles.css";

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
        setHistory(storedHistory);
    }, []);

    useEffect(() => {
        localStorage.setItem("calcHistory", JSON.stringify(history));
    }, [history]);

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                const result = eval(expression).toString();
                setHistory([...history, `${expression} = ${result}`]);
                setExpression(result);
            } catch (error) {
                setExpression("Помилка");
            }
        } else if (value === 'C') {
            setExpression('');
        } else {
            setExpression(expression + value);
        }
    };

    const clearHistory = () => {
        setHistory([]);
    };

    return (
        <div className="calculator">
            <Display value={expression} />
            <div className="button-grid">
                {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'].map((btn) => (
                    <Button key={btn} label={btn} onClick={handleButtonClick} className={btn === '=' ? 'equals' : ''} />
                ))}
                <Button label="C" onClick={handleButtonClick} className="clear" />
            </div>
            <History history={history} onClearHistory={clearHistory} />
        </div>
    );
};

export default Calculator;

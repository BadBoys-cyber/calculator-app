import React, { useContext } from 'react';
import { HistoryContext } from '../context/HistoryContext';
import "../styles.css";

const HistoryPage = () => {
    const { history, clearHistory } = useContext(HistoryContext);

    return (
        <div className="history-page">
            <h1>Історія обчислень</h1>
            <ul>
                {history.length > 0 ? (
                    history.map((entry, index) => (
                        <li key={index}>{entry}</li>
                    ))
                ) : (
                    <p>Історія порожня</p>
                )}
            </ul>
            <button className="clear-history" onClick={clearHistory}>Очистити історію</button>
        </div>
    );
};

export default HistoryPage;
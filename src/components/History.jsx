import React from 'react';
import "../styles.css";

const History = ({ history, onClearHistory }) => {
    return (
        <div className="calc-history">
            <h2>Історія обчислень</h2>
            <ul>
                {history.length > 0 ? (
                    history.map((entry, index) => (
                        <li key={index}>{entry}</li>
                    ))
                ) : (
                    <p>Історія порожня</p>
                )}
            </ul>
            <button className="clear-history" onClick={onClearHistory}>Очистити історію</button>
        </div>
    );
};

export default History;

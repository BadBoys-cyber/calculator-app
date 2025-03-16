import React from "react";
import "../styles.css";

const Button = ({ label, onClick, className = "" }) => {
    return (
        <button className={`calc-button ${className}`} onClick={() => onClick(label)}>
            {label}
        </button>
    );
};

export default Button;
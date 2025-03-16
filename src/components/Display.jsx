import React from "react";
import "../styles.css";

const Display = ({ value }) => {
    return (
        <div className="calc-display">
            {value}
        </div>
    );
};

export default Display
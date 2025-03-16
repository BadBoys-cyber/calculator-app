import React from "react";
import Calculator from "../components/Calculator";
import "../styles.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Калькулятор</h1>
            <Calculator />
        </div>
    );
};

export default Home;
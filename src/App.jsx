import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
import HistoryProvider from './context/HistoryContext';
import "./styles.css";

const App = () => {
    return (
        <HistoryProvider>
            <Router>
                <div className="app-container">
                    <nav>
                        <ul>
                            <li><Link to="/">Калькулятор</Link></li>
                            <li><Link to="/history">Історія</Link></li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/history" element={<HistoryPage />} />
                    </Routes>
                </div>
            </Router>
        </HistoryProvider>
    );
};

export default App;
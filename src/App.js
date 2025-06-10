import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import LiveQueryPage from './pages/LiveQueryPage';
import TerminalPage from './pages/TerminalPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/live-query" element={<LiveQueryPage />} />
            <Route path="/live-terminal" element={<TerminalPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

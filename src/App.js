import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import TerminalPage from './pages/TerminalPage'; // ✅ Step 1: Add this line

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Navigate to="/terminal" />} />
  <Route path="/page1" element={<Page1 />} />
  <Route path="/page2" element={<Page2 />} />
  <Route path="/terminal" element={<TerminalPage />} />
</Routes>

    </Router>
  );
}

export default App;

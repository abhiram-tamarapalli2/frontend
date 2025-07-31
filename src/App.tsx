import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AssistantInterface from './pages/AssistantInterface';
import PromotionalPage from './pages/PromotionalPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/assistant" element={<AssistantInterface />} />
          <Route path="/about" element={<PromotionalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
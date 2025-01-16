import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Models from './pages/Models';
import Technology from './pages/Technology';
import Sustainability from './pages/Sustainability';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/signin" element={<Auth type="signin" />} />
          <Route path="/signup" element={<Auth type="signup" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
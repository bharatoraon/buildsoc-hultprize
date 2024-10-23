import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import ExplorePage from './pages/ExplorePage';
import VotePage from './pages/VotePage';
import CommunityPage from './pages/CommunityPage';
import DashboardPage from './pages/DashboardPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="pt-16">
                <Hero />
                <Features />
                <Stats />
              </div>
            }
          />
          <Route path="/explore" element={<div className="pt-16"><ExplorePage /></div>} />
          <Route path="/vote" element={<div className="pt-16"><VotePage /></div>} />
          <Route path="/community" element={<div className="pt-16"><CommunityPage /></div>} />
          <Route path="/dashboard" element={<div className="pt-16"><DashboardPage /></div>} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
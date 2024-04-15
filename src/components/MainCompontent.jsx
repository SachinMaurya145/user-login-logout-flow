import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

function MainComponent() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} />} />
        <Route path="/home" element={<HomePage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default MainComponent;

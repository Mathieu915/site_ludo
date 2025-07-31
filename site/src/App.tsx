import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Homepage from './modules/Home/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;

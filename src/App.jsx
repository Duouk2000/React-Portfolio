import React from 'react';
import './App.css';
import CustomNavbar from './components/Navbar';
import Project from './pages/Project';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  console.log('Rendering App component');
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />         
        </Routes>
      </div>
    </Router>
  );
}

export default App;

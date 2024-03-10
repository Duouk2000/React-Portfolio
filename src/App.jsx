import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Header';
import ProjectGallery from './components/ProjectGallery';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  console.log('Rendering App component');
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

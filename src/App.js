import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Contact from './Components/Contact';
import About from './Components/About';
import PortfolioPage from './Components/PortfolioPage';

function App() {
  const [currentPage, setCurrentPage] = useState("LandingPage");

  useEffect(() => {
    // Retrieve the saved currentPage from localStorage
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    // Save the current page to localStorage
    localStorage.setItem("currentPage", page);
  };

  return (
    <div className="Wrapper">
      <Navbar onNavigate={handleNavigation} />
      <div className="content">
        {currentPage === "LandingPage" && <LandingPage onNavigate={handleNavigation} />}
        {currentPage === "Contact" && <Contact />}
        {currentPage === "About" && <About onNavigate={handleNavigation} />}
        {currentPage === "PortfolioPage" && <PortfolioPage />}
      </div>
    </div>
  );
}

export default App;

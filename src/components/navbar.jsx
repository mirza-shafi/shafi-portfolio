// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">MIRZA SHAFI</div>
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
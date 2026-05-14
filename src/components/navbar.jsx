import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">MS</div>
      <ul className="nav-links">
        <li><a href="#about"><span>01.</span>About</a></li>
        <li><a href="#experience"><span>02.</span>Experience</a></li>
        <li><a href="#projects"><span>03.</span>Work</a></li>
        <li><a href="#contact"><span>04.</span>Contact</a></li>
        <li><a href="/images/MIRZA%20MD%20SHAFI%20UDDIN_CV_AI_Engineer.pdf" target="_blank" rel="noreferrer" className="btn-small" style={{border: '1px solid var(--green)', padding: '8px 16px', borderRadius: '4px', color: 'var(--green)'}}>Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
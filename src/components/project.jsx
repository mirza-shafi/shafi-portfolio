// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title fade-in">Featured Projects</h2>
      <div className="projects-grid">
        
        <div className="project-card fade-in">
          <div className="project-header">🎮</div>
          <div className="project-content">
            <h3 className="project-title">Exile Prince (Thesis Project)</h3>
            <p className="project-description">A gamified digital learning project designed to enhance cybersecurity awareness and knowledge among students in Bangladesh. This innovative approach combines gaming elements with educational content to make learning engaging.</p>
          </div>
          <div className="project-links">
            {/* Replace with actual GitHub URL when available */}
            <a href="https://github.com/yourusername/exile-prince" target="_blank" rel="noopener noreferrer" className="project-btn">Source Code</a>
            <a href="https://exile-prince.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
          </div>
        </div>

        <div className="project-card fade-in">
          <div className="project-header">🏥</div>
          <div className="project-content">
            <h3 className="project-title">Hospital Management Portal</h3>
            <p className="project-description">A comprehensive web-based system built with MERN stack that streamlines hospital operations, manages appointments, and provides efficient user management solutions for healthcare facilities.</p>
          </div>
          <div className="project-links">
            <a href="https://github.com/mirza-shafi/Hospital_Management_Portal" target="_blank" rel="noopener noreferrer" className="project-btn">Source Code</a>
            {/* Replace with actual demo URL when available */}
            <a href="https://hospital-portal-demo.netlify.app" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
          </div>
        </div>

        <div className="project-card fade-in">
          <div className="project-header">🎓</div>
          <div className="project-content">
            <h3 className="project-title">CampusConnect</h3>
            <p className="project-description">A full-stack TypeScript platform enabling university students to connect, share academic resources, and collaborate effectively. Built with modern web technologies for seamless user experience.</p>
          </div>
          <div className="project-links">
            {/* Replace with actual GitHub URL when available */}
            <a href="https://github.com/yourusername/campusconnect" target="_blank" rel="noopener noreferrer" className="project-btn">Source Code</a>
            <a href="https://campusconnect-demo.netlify.app" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
          </div>
        </div>

        <div className="project-card fade-in">
          <div className="project-header">🏠</div>
          <div className="project-content">
            <h3 className="project-title">stuRENT</h3>
            <p className="project-description">A Django-based web platform designed specifically for students to find and manage rental accommodations efficiently. Features include property listings, booking management, and user authentication.</p>
          </div>
          <div className="project-links">
            {/* Replace with actual GitHub URL when available */}
            <a href="https://github.com/yourusername/sturent" target="_blank" rel="noopener noreferrer" className="project-btn">Source Code</a>
            <a href="https://sturent-demo.herokuapp.com" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
          </div>
        </div>

        <div className="project-card fade-in">
          <div className="project-header">📊</div>
          <div className="project-content">
            <h3 className="project-title">Campus Living Distance Study</h3>
            <p className="project-description">A comprehensive statistical study analyzing how students' distance from campus affects their academic performance, providing insights for educational planning and policy making.</p>
          </div>
          <div className="project-links">
            {/* Replace with actual GitHub URL when available */}
            <a href="https://github.com/yourusername/campus-distance-study" target="_blank" rel="noopener noreferrer" className="project-btn">Source Code</a>
            <a href="https://campus-study-results.netlify.app" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
          </div>
        </div>

        <div className="project-card fade-in">
          <div className="project-header">🤖</div>
          <div className="project-content">
            <h3 className="project-title">BRACU Magatron</h3>
            <p className="project-description">An Arduino-based soccer robot designed for autonomous movement and gameplay control. Features advanced sensors and algorithms for competitive robotics tournaments.</p>
          </div>
          <div className="project-links">
            {/* Replace with actual GitHub URL when available */}
            <a href="https://github.com/yourusername/bracu-magatron" target="_blank" rel="noopener noreferrer" className="project-btn">Source Code</a>
            <a href="https://magatron-demo.netlify.app" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
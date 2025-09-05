// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <h2 className="section-title fade-in">Work Experience</h2>
      <div className="timeline">
        <div className="timeline-item fade-in">
          <div className="timeline-content">
            <h3>Software Developer Intern</h3>
            <h4>BitEncryptIT</h4>
            <p><strong>May 2025 - Present</strong></p>
            <p>Working on cutting-edge software development projects, contributing to innovative solutions and gaining hands-on experience in professional software development practices.</p>
          </div>
          <div className="timeline-dot"></div>
        </div>
        <div className="timeline-item fade-in">
          <div className="timeline-content">
            <h3>Secretary, Department of IT</h3>
            <h4>Robotics Club of BRAC University</h4>
            <p><strong>Feb 2024 - Jun 2025</strong></p>
            <p>Led IT initiatives for the robotics club, managed technical resources, and coordinated technology-related activities and competitions within the university community.</p>
          </div>
          <div className="timeline-dot"></div>
        </div>
        <div className="timeline-item fade-in">
          <div className="timeline-content">
            <h3>Junior Engagement Officer</h3>
            <h4>X – Integrated Marketing Agency</h4>
            <p><strong>Jun 2024 - Oct 2024</strong></p>
            <p>Managed client relationships and engagement strategies, contributing to successful marketing campaigns and building valuable experience in digital marketing and client communications.</p>
          </div>
          <div className="timeline-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <h2 className="section-title fade-in">Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-category fade-in">
          <h3>Programming Languages</h3>
          <div className="skill-tags">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">C</span>
            <span className="skill-tag">Java</span>
          </div>
        </div>
        <div className="skill-category fade-in">
          <h3>Web Development</h3>
          <div className="skill-tags">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Bootstrap</span>
            <span className="skill-tag">HTML</span>
          </div>
        </div>
        <div className="skill-category fade-in">
          <h3>AI & Data Science</h3>
          <div className="skill-tags">
            <span className="skill-tag">Machine Learning</span>
          </div>
        </div>
        <div className="skill-category fade-in">
          <h3>Database Management</h3>
          <div className="skill-tags">
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">SQL</span>
          </div>
        </div>
        <div className="skill-category fade-in">
          <h3>Tools & Technologies</h3>
          <div className="skill-tags">
            <span className="skill-tag">Cisco Packet Tracer</span>
            <span className="skill-tag">Wireshark</span>
            <span className="skill-tag">OpenGL</span>
            <span className="skill-tag">Ren'Py</span>
            <span className="skill-tag">Photoshop</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
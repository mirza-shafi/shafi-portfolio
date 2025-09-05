// src/components/Education.jsx
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section education">
      <h2 className="section-title fade-in">Education</h2>
      <div className="education-grid">
        <div className="education-item fade-in">
          <div className="education-icon">🎓</div>
          <div className="education-details">
            <h3>B.Sc in Computer Science</h3>
            <h4>BRAC University</h4>
            <div className="education-meta">
              <span className="date-badge">June 2021 - Present</span>
              <span className="gpa-badge">CGPA: 3.20 / 4.0</span>
            </div>
            
          </div>
        </div>
        <div className="education-item fade-in">
          <div className="education-icon">📚</div>
          <div className="education-details">
            <h3>Higher Secondary Certificate (HSC)</h3>
            <h4>Ispahani Public School and College</h4>
            <div className="education-meta">
              <span className="date-badge">2017 - 2019</span>
              <span className="gpa-badge">GPA: 4.67 / 5.0</span>
            </div>
          </div>
        </div>
        <div className="education-item fade-in">
          <div className="education-icon">🏫</div>
          <div className="education-details">
            <h3>Secondary School Certificate (SSC)</h3>
            <h4>Rampur High School</h4>
            <div className="education-meta">
              <span className="date-badge">2012 - 2016</span>
              <span className="gpa-badge">GPA: 4.91 / 5.0</span>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
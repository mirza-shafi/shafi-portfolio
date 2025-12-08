import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education <span className="text-highlight">History</span></h2>

      <div className="education-grid">
        {/* University */}
        <div className="edu-card-modern">
          <div className="edu-icon">🎓</div>
          <div className="edu-info">
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="institution">BRAC University</p>
            <p className="year">2018 - 2022</p>
            <p className="grade">CGPA: 3.8/4.0</p>
          </div>
        </div>
        
        {/* College */}
        <div className="edu-card-modern">
          <div className="edu-icon">🏫</div>
          <div className="edu-info">
            <h3>Higher Secondary Certificate</h3>
            <p className="institution">Dhaka City College</p>
            <p className="year">2016 - 2018</p>
            <p className="grade">Science Group</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
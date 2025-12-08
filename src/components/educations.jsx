import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        
        <div className="edu-card">
          <div className="edu-header">
            <h3>Bachelor of Science in Computer Science</h3>
            <span className="edu-date">2018 - 2022</span>
          </div>
          <p className="edu-school">BRAC University</p>
          <p className="edu-desc">
            Focus on Artificial Intelligence and Machine Learning. <br/>
            CGPA: 3.8/4.0
          </p>
        </div>

        <div className="edu-card">
          <div className="edu-header">
            <h3>Higher Secondary Certificate</h3>
            <span className="edu-date">2016 - 2018</span>
          </div>
          <p className="edu-school">Dhaka City College</p>
          <p className="edu-desc">Science Group</p>
        </div>

      </div>
    </section>
  );
};

export default Education;
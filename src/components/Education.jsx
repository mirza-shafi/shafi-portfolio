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
            <h3>B.Sc. in Computer Science</h3>
            <p className="institution">BRAC University</p>
            <p className="year">June 2021 - October 2025</p>
            <p className="grade">CGPA: 3.22 / 4.00</p>
          </div>
        </div>
        
        {/* College */}
        <div className="edu-card-modern">
          <div className="edu-icon">🏫</div>
          <div className="edu-info">
            <h3>Higher Secondary Certificate (HSC)</h3>
            <p className="institution">Ispahani Public School & College</p>
            <p className="year">2019</p>
            <p className="grade">GPA: 4.67 / 5.00</p>
          </div>
        </div>

        {/* School */}
        <div className="edu-card-modern">
          <div className="edu-icon">🏫</div>
          <div className="edu-info">
            <h3>Secondary School Certificate (SSC)</h3>
            <p className="institution">Rampur High School</p>
            <p className="year">2017</p>
            <p className="grade">GPA: 4.91 / 5.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
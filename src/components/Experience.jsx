import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: "X Integrated Marketing",
      role: "Junior Engagement Officer",
      date: "June 2024 – October 2024",
      points: [
        "Assisted in planning and executing digital marketing campaigns to increase audience engagement.",
        "Coordinated with creative and technical teams to ensure smooth campaign delivery.",
        "Improved customer interactions through strategic communication and feedback loops."
      ]
    },
    {
      company: "Robotics Club of BRACU",
      role: "Secretary (IT Department)",
      date: "Feb 2024 – June 2025",
      points: [
        "Managed IT operations and provided technical support for workshops, events, and robotics competitions.",
        "Led digital initiatives and contributed to robotics projects, including an Arduino-based soccer robot.",
        "Achieved competition success through effective team coordination and technical problem-solving."
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Where I've <span className="text-highlight">Worked</span></h2>
      
      <div className="experience-tabs-wrapper">
        <div className="tabs-list">
          {jobs.map((job, index) => (
            <button
              key={index}
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </button>
          ))}
        </div>
        
        <div className="job-content">
          <h3>
            <span>{jobs[activeTab].role}</span>
            <span className="company-name"> @ {jobs[activeTab].company}</span>
          </h3>
          <p className="job-date">{jobs[activeTab].date}</p>
          <ul className="job-points">
            {jobs[activeTab].points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
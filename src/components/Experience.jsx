import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: "Tech Solutions Inc.",
      role: "AI Engineer",
      date: "Jan 2023 - Present",
      points: [
        "Developed and deployed LLM-based chatbots reducing customer support tickets by 40%.",
        "Collaborated with cross-functional teams to integrate AI models into existing web platforms.",
        "Optimized inference time for computer vision models using TensorRT."
      ]
    },
    {
      company: "StartUp Lab",
      role: "Junior Developer",
      date: "Jun 2021 - Dec 2022",
      points: [
        "Built responsive front-end interfaces using React and Tailwind CSS.",
        "Assisted in backend API development using Node.js and Express.",
        "Participated in code reviews and agile sprint planning."
      ]
    },
    {
      company: "University Research",
      role: "Research Assistant",
      date: "Jan 2020 - May 2021",
      points: [
        "Conducted data analysis on large datasets using Pandas and NumPy.",
        "Published a paper on 'Optimizing Neural Networks for Edge Devices'.",
        "Mentored junior students in Python programming basics."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Where I've Worked</h2>
      <div className="experience-container">
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
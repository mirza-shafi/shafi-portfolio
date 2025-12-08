import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "Languages & Core",
      icon: "💻",
      skills: ["Python", "JavaScript (ES6+)", "C++", "SQL", "HTML/CSS"]
    },
    {
      title: "AI & Data Science",
      icon: "🧠",
      skills: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "OpenCV", "Scikit-learn"]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["React.js", "Node.js", "Express", "Tailwind CSS", "MongoDB"]
    },
    {
      title: "Tools & Platforms",
      icon: "⚙️",
      skills: ["Git & GitHub", "Arduino", "VS Code", "Linux", "Jira"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical <span className="text-highlight">Skills</span></h2>

      <div className="skills-grid-wrapper">
        {categories.map((cat, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
            </div>
            <div className="skill-tags">
              {cat.skills.map((skill, i) => (
                <span key={i} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: ["Python", "JavaScript (ES6+)", "C++", "SQL", "HTML/CSS"] },
    { title: "Frameworks", skills: ["React", "Node.js", "Django", "TensorFlow", "PyTorch"] },
    { title: "Tools", skills: ["Git & GitHub", "Docker", "AWS", "Linux", "Postman"] },
    { title: "Design", skills: ["Figma", "Adobe XD", "UI/UX Principles"] }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
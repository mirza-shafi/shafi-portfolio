import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "AI & LLM Engineering",
      icon: "🧠",
      skills: ["LLM Integration", "AI Agents", "Prompt Engineering", "RAG Pipelines", "SLM Benchmarking"]
    },
    {
      title: "AI Infrastructure",
      icon: "⚙️",
      skills: ["Hybrid Search", "Cross-Encoder Reranking", "Pinecone", "ChromaDB", "Redis", "Ragas", "TruLens"]
    },
    {
      title: "ML & Data",
      icon: "📊",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "SQL"]
    },
    {
      title: "Backend & MLOps",
      icon: "🌐",
      skills: ["FastAPI", "Node.js", "Docker", "CI/CD", "PostgreSQL", "MongoDB", "DigitalOcean"]
    },
    {
      title: "Language & Frontend",
      icon: "💻",
      skills: ["Python", "JavaScript", "Java", "React.js", "Tailwind CSS"]
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
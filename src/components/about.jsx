import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-redesign-section">
      
      {/* Header Section */}
      <div className="about-header-container">
        <div className="pill-badge">
          <span className="icon">👤</span> About Me
        </div>
        <h2 className="about-main-title">
          Get to <span className="text-highlight">Know Me</span>
        </h2>
        <p className="about-subtitle">
          I’m a passionate AI Engineer and Full-Stack Developer with hands-on experience in Large Language Models (LLMs), AI agent development, and building scalable intelligent solutions. Let’s explore my journey and expertise.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="about-card">
        <h3 className="card-title">
          <span className="rocket-icon">🚀</span> AI & Data Science Enthusiast
        </h3>
        
        <div className="card-grid">
          {/* Column 1 */}
          <div className="card-column">
            <p>
              <span className="text-blue-bold">Transforming businesses through AI excellence.</span> With roles such as an AI Agent & LLM Intern at Mevrik, I specialize in building intelligent systems, deploying SaaS products, and developing scalable applications.
            </p>
          </div>

          {/* Column 2 */}
          <div className="card-column">
            <p>
              My expertise includes <strong>Retrieval-Augmented Generation (RAG)</strong>, <strong>AI Agents</strong>, and utilizing advanced <strong>Vector Data ecosystems</strong> to create sophisticated workflows that solve complex business challenges.
            </p>
          </div>

          {/* Column 3 */}
          <div className="card-column">
            <p>
              By leveraging cutting-edge tools and my ongoing knowledge from the <span className="text-blue-bold">Ostad AI Engineering Bootcamp</span>, I aim to ensure reliable, hallucination-free, and practical client-centered AI solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Toggle Bar (Navigation) */}
      <div className="toggle-bar-container">
        <div className="toggle-bar">
          <a href="#skills" className="toggle-btn" style={{textDecoration: 'none'}}>
            <span className="icon">⚙️</span> Skills
          </a>
          <a href="#projects" className="toggle-btn" style={{textDecoration: 'none'}}>
            <span className="icon">◎</span> Projects
          </a>
          <a href="#experience" className="toggle-btn" style={{textDecoration: 'none'}}>
            <span className="icon">🏆</span> Experience
          </a>
        </div>
      </div>

    </section>
  );
};

export default About;
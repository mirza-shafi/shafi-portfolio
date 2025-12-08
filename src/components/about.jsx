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
          I’m a passionate AI Engineer with 2+ years of experience transforming businesses through intelligent solutions. Let’s explore my journey and expertise.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="about-card">
        <h3 className="card-title">
          <span className="rocket-icon">🚀</span> AI Innovation Leader
        </h3>
        
        <div className="card-grid">
          {/* Column 1 */}
          <div className="card-column">
            <p>
              <span className="text-blue-bold">Transforming businesses through AI excellence.</span> As an AI/ML Engineer at Brain Station 23, I specialize in building intelligent systems that drive real growth and innovation.
            </p>
          </div>

          {/* Column 2 */}
          <div className="card-column">
            <p>
              My expertise in <strong>LangChain, AutoGen</strong>, and cutting-edge <strong>AI frameworks</strong> enables me to create sophisticated agent workflows and RAG systems that solve complex business challenges.
            </p>
          </div>

          {/* Column 3 */}
          <div className="card-column">
            <p>
              As an <span className="text-blue-bold">AI Instructor & Consultant</span>, I empower teams to harness AI’s potential, ensuring sustainable growth through practical, client-centered solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Toggle Bar (Visual Only) */}
      <div className="toggle-bar-container">
        <div className="toggle-bar">
          <button className="toggle-btn">
            <span className="icon">⚙️</span> Skills
          </button>
          <button className="toggle-btn active">
            <span className="icon">◎</span> Services
          </button>
          <button className="toggle-btn">
            <span className="icon">🏆</span> Experience
          </button>
        </div>
      </div>

    </section>
  );
};

export default About;
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-wrapper" id="home">
      <div className="hero-main">
        
        {/* Left Side: Profile Card */}
        <div className="profile-card fade-in">
          <div className="profile-header">
            <div className="img-container">
              <img src="/images/shafi-formal.png" alt="Profile" className="profile-img" style={{ objectFit: 'cover' }} />
            </div>
            <h2 className="profile-name">Mirza Shafi</h2>
            <p className="profile-role">AI Engineer</p>
            <p className="profile-subrole">AI Consultant</p>
          </div>

          <div className="profile-badges">
            <div className="badge-item">
              <span className="badge-icon">🏅</span>
              <span>Top AI Innovation Leader</span>
            </div>
            <div className="badge-item">
              <span className="badge-icon">📈</span>
              <span>Helping Businesses Grow with AI</span>
            </div>
            <div className="badge-item">
              <span className="badge-icon">👥</span>
              <span>2+ Years Experience</span>
            </div>
          </div>

          <div className="profile-actions">
            <a href="https://github.com/mirza-shafi" target="_blank" rel="noreferrer" className="icon-btn" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>{'</>'}</a>
            <a href="https://linkedin.com/in/mirza-shafi" target="_blank" rel="noreferrer" className="icon-btn" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>↗</a>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Transforming <br />
            <span className="text-blue">Business</span> with <br />
            <span className="text-outline">AI Innovation</span>
          </h1>

          <div className="cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>▶</span> View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>↗</span> Let's Connect
            </a>
          </div>

          <p className="hero-description">
            I am an AI/ML Expert, Instructor, and Consultant dedicated to transforming bold ideas into intelligent, real-world solutions. With deep mastery in LLMs and advanced AI, I architect impactful systems that solve complex problems and spark innovation.
          </p>

          <div className="mini-cards">
            <div className="mini-card">
              <div className="mini-icon">🧠</div>
              <div>
                <h4>AI Strategy</h4>
                <p>Custom AI roadmaps</p>
              </div>
            </div>
            <div className="mini-card">
              <div className="mini-icon">👥</div>
              <div>
                <h4>Team Training</h4>
                <p>AI education & consulting</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="stats-bar fade-in">
        <div className="stat-item">
          <span className="stat-icon">{'<>'}</span>
          <h3>20+</h3>
          <p>AI Projects</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🏆</span>
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">👤</span>
          <h3>15+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">📈</span>
          <h3>100%</h3>
          <p>Success Rate</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
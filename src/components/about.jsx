import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! My name is Mirza and I enjoy creating things that live on the internet. My interest in AI and web development started back in university when I decided to build a chatbot — turns out teaching a computer to talk taught me a lot about logic and linguistics!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an <span style={{color: 'var(--green)'}}>AI startup</span>, a <span style={{color: 'var(--green)'}}>tech consultancy</span>, and leading student research groups. My main focus these days is building accessible, inclusive AI products and digital experiences.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            <li>Python (PyTorch)</li>
            <li>TensorFlow</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>AWS / Azure</li>
            <li>Docker & K8s</li>
          </ul>
        </div>
        <div className="about-img-wrapper">
          {/* Replace with your actual image */}
          <img src="https://via.placeholder.com/300" alt="Mirza Shafi" className="about-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
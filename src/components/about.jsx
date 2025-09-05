// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title fade-in">About Me</h2>
      <div className="about-content">
   <img 
  src="../images/shafi-formal.png" 
//   alt="Mirza Md. Shafi Uddin" 
  className="about-image" 
/>

        <div className="about-text fade-in">
          <p>I'm a passionate Computer Science student at BRAC University with a strong foundation in software development and emerging technologies. Currently maintaining a CGPA of 3.20/4.0, I'm dedicated to creating innovative solutions and contributing to the tech community.</p>
          <p>My journey in technology spans web development, artificial intelligence, and cybersecurity awareness. I believe in the power of gamification to make learning more engaging and effective.</p>
          
          <div className="contact-info">
            <div className="contact-item fade-in">
              <span>📍</span>
              <div>
                <strong>Location</strong><br />
                DIT Project, Merul Badda, Dhaka
              </div>
            </div>
            <div className="contact-item fade-in">
              <span>📧</span>
              <div>
                <strong>Email</strong><br />
                <a href="mailto:mirza.md.shafi.uddin@gmail.com">mirza.md.shafi.uddin@gmail.com</a>
              </div>
            </div>
            <div className="contact-item fade-in">
              <span>📱</span>
              <div>
                <strong>Phone</strong><br />
                +8801938820835
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
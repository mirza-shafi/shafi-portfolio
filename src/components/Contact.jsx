import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <p style={{color: 'var(--green)', fontFamily: 'var(--font-mono)', marginBottom: '20px'}}>04. What's Next?</p>
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-desc">
        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:your.email@example.com" className="btn">Say Hello</a>
    </section>
  );
};

export default Contact;
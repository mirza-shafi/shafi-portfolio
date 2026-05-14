import React, { useState, useEffect } from 'react';
import './index.css';
import Carousel from "./components/Carousel";
import emailjs from '@emailjs/browser';

// Minimalist Icons
const LaptopIcon = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>;
const MoveRight = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m13 5 7 7-7 7"/><path d="M4 12h16"/></svg>;
const SunIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>;
const MoonIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>;

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [formData, setFormData] = useState({
    name: '', email: '', useCase: '', message: '', services: []
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    // Use Vite proxy (/api/counter → api.counterapi.dev/v1) to bypass CORS
    fetch('/api/counter/shafiportfolio/visitors/up')
      .then(r => r.json())
      .then(d => setVisitorCount(d.count ?? null))
      .catch(() => setVisitorCount(null));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show-animate'); });
    }, { threshold: 0.1 });
    const hiddenElements = document.querySelectorAll('.hidden-animate');
    hiddenElements.forEach((el) => observer.observe(el));
    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    setSending(true);
    setError('');
    try {
      await emailjs.send(
        'mirzashafi',
        'template_p0bnlwi',
        {
          name: formData.name,           // matches {{name}} in subject preview
          from_name: formData.name,      // matches {{from_name}}
          from_email: formData.email,    // matches {{from_email}}
          subject: formData.useCase || 'AI Project Inquiry',  // matches {{subject}}
          message: `Use Case: ${formData.useCase || 'N/A'}\nServices: ${formData.services.join(', ') || 'Not specified'}\n\n${formData.message}`,  // matches {{message}}
        },
        'BFgCJPL9cThWSOSvD'
      );
      setSent(true);
      setFormData({ name: '', email: '', useCase: '', message: '', services: [] });
    } catch (e) {
      console.error('EmailJS error:', e);
      setError(`Failed to send (${e?.status || e?.text || 'unknown error'}). Check console for details.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={`theme-wrapper ${theme}`}>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="font-bold">Shafi</span>
            <span className="text-muted hidden-mobile"> | AI Engineer</span>
          </div>
          <ul className="nav-links">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-actions flex gap-4 items-center">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="#contact" className="btn-primary" style={{padding: '8px 16px', borderRadius: '30px'}}>
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      <main className="main-content">
        
        {/* HERO SECTION */}
        <section className="hero-section hidden-animate" id="home">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">Hello, <br/> I am Mirza Shafi</h1>
              <p className="hero-subtitle">
                Passionate AI Engineer & Full-Stack Developer, building <span className="highlight-text">intelligent workflows</span>, <span className="highlight-text">LLM integrations</span>, and <span className="highlight-text">SaaS solutions</span>.
              </p>
              
              <div className="hero-buttons">
                <a href="/images/MIRZA%20MD%20SHAFI%20UDDIN_CV_AI_Engineer.pdf" target="_blank" rel="noreferrer" className="btn-outline">
                  Download CV
                </a>
                <a href="#contact" className="btn-primary">
                  Get In Touch
                </a>
                {visitorCount !== null && (
                  <div className="visitor-counter">
                    <span className="vc-dot" />
                    <span className="vc-count">{visitorCount.toLocaleString()}</span>
                    <span>views</span>
                  </div>
                )}
              </div>
            </div>

            <div className="hero-image-wrapper">
              <img src="/images/shafi-formal.png" alt="Mirza Shafi" className="hero-image"/>
              <div className="glow-effect behind-image"></div>
            </div>
          </div>

          <div className="trusted-banner">
            <p className="text-center text-muted mb-4 font-mono text-sm">Empowering intelligent solutions with</p>
            <div className="marquee">
              <div className="marquee-content">
                {[
                  { name: 'Python', color: '#3776AB', icon: 'https://cdn.simpleicons.org/python/3776AB' },
                  { name: 'FastAPI', color: '#009688', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
                  { name: 'LangChain', color: '#1C3C3C', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
                  { name: 'Docker', color: '#2496ED', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
                  { name: 'React', color: '#61DAFB', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
                  { name: 'Node.js', color: '#339933', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
                  { name: 'PostgreSQL', color: '#4169E1', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
                  { name: 'MongoDB', color: '#47A248', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
                  { name: 'OpenAI', color: '#74AA9C', icon: 'https://cdn.simpleicons.org/openai/74AA9C' },
                  { name: 'HuggingFace', color: '#FFD21E', icon: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
                  { name: 'Ollama', color: '#ffffff', icon: 'https://cdn.simpleicons.org/ollama/ffffff' },
                  { name: 'Streamlit', color: '#FF4B4B', icon: 'https://cdn.simpleicons.org/streamlit/FF4B4B' },
                ].concat([
                  { name: 'Python', color: '#3776AB', icon: 'https://cdn.simpleicons.org/python/3776AB' },
                  { name: 'FastAPI', color: '#009688', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
                  { name: 'LangChain', color: '#1C3C3C', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
                  { name: 'Docker', color: '#2496ED', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
                  { name: 'React', color: '#61DAFB', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
                  { name: 'Node.js', color: '#339933', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
                  { name: 'PostgreSQL', color: '#4169E1', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
                  { name: 'MongoDB', color: '#47A248', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
                  { name: 'OpenAI', color: '#74AA9C', icon: 'https://cdn.simpleicons.org/openai/74AA9C' },
                  { name: 'HuggingFace', color: '#FFD21E', icon: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
                  { name: 'Ollama', color: '#ffffff', icon: 'https://cdn.simpleicons.org/ollama/ffffff' },
                  { name: 'Streamlit', color: '#FF4B4B', icon: 'https://cdn.simpleicons.org/streamlit/FF4B4B' },
                ]).map((tech, i) => (
                  <span key={i} className="marquee-item">
                    <img src={tech.icon} alt={tech.name} width="20" height="20" style={{ filter: 'none' }} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="section hidden-animate" id="experience">
          <div className="section-header text-center">
            <p className="badge font-mono text-accent">Career Path & Skills</p>
            <h2 className="section-title">Expertise & Experience</h2>
          </div>

          <div className="experience-layout">
            {/* Left Column: Expertise */}
            <div className="expertise-column">
              <h3 className="column-title">My Expertise</h3>
              <div className="expertise-list">
                
                <div className="expertise-item">
                  <h4 className="expertise-title">AI Agents & LLM Integrations</h4>
                  <ul className="expertise-bullets">
                    <li>• Engineered stateful AI agents for workflow automation.</li>
                    <li>• Refined prompt architectures and conversational memory.</li>
                    <li>• Experience with Gemini, OpenAI, and LangChain frameworks.</li>
                  </ul>
                </div>

                <div className="expertise-item">
                  <h4 className="expertise-title">Backend & API Development</h4>
                  <ul className="expertise-bullets">
                    <li>• Developed scalable APIs and Webhooks using FastAPI and Node.js.</li>
                    <li>• Built robust backend systems for high-performance applications.</li>
                    <li>• Database design and optimization across PostgreSQL and NoSQL.</li>
                  </ul>
                </div>

                <div className="expertise-item">
                  <h4 className="expertise-title">Full-Stack Development</h4>
                  <ul className="expertise-bullets">
                    <li>• Created intuitive and dynamic user interfaces using React.</li>
                    <li>• Seamlessly integrated frontend with backend and AI services.</li>
                    <li>• Maintained clean code standards and scalable architectures.</li>
                  </ul>
                </div>

                <div className="expertise-item">
                  <h4 className="expertise-title">Workflow & Automation</h4>
                  <ul className="expertise-bullets">
                    <li>• Designed automated solutions for complex technical workflows.</li>
                    <li>• Leveraged tool-calling and APIs to streamline operations.</li>
                    <li>• Tackled technical challenges with innovative software solutions.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Right Column: Experience Timeline */}
            <div className="timeline-column">
              <h3 className="column-title">Professional Experience</h3>
              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card-glass">
                    <div className="flex-between flex-wrap gap-2">
                      <h3 className="job-title">AI Agent & LLM Intern</h3>
                      <span className="job-date font-mono text-muted text-sm badge-small">Dec 2025 – Feb 2026</span>
                    </div>
                    <p className="company-text text-accent font-medium mb-3 mt-1">Mevrik</p>
                    <ul className="job-bullets">
                      <li>Engineered and deployed AI agents to automate CX workflows using stateful logic and tool-calling.</li>
                      <li>Refined prompt architectures and conversational memory, increasing model accuracy.</li>
                      <li>Integrated Gemini capabilities into a production SaaS environment using FastAPI and Webhooks.</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card-glass">
                    <div className="flex-between flex-wrap gap-2">
                      <h3 className="job-title">Junior Engagement Officer</h3>
                      <span className="job-date font-mono text-muted text-sm badge-small">Jun 2024 – Oct 2024</span>
                    </div>
                    <p className="company-text text-accent font-medium mb-3 mt-1">X Integrated Marketing Agency</p>
                    <ul className="job-bullets">
                      <li>Assisted in planning and executing digital marketing campaigns to increase audience engagement.</li>
                      <li>Coordinated with creative and technical teams to ensure smooth campaign delivery and improved customer interactions.</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card-glass">
                    <div className="flex-between flex-wrap gap-2">
                      <h3 className="job-title">Secretary (IT Department)</h3>
                      <span className="job-date font-mono text-muted text-sm badge-small">Feb 2024 – Jun 2025</span>
                    </div>
                    <p className="company-text text-accent font-medium mb-3 mt-1">Robotics Club of BRAC University</p>
                    <ul className="job-bullets">
                      <li>Managed IT operations and provided technical support for workshops, events, and robotics competitions.</li>
                      <li>Led digital initiatives and contributed to robotics projects, including an Arduino-based soccer robot.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section hidden-animate" id="projects">
          <div className="section-header text-center">
            <p className="badge font-mono text-accent">Real-world Solutions</p>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <Carousel />
        </section>

      </main>

      {/* CONTACT SECTION */}
      <section className="section hidden-animate" id="contact" style={{ paddingBottom: '0' }}>
        <div className="section-header text-center">
          <p className="badge font-mono text-accent">Contact Me</p>
          <h2 className="section-title">Let's Work Together on Your Next Project</h2>
          <p className="text-muted mx-auto max-w-lg mt-4">
            Have an idea you want to bring to life? I'm here to help you create something amazing. Get in touch and let's discuss how we can make your vision a reality.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Links */}
          <div className="contact-links-column">
            <h3 className="contact-column-title">Feel free to reach out directly...</h3>
            
            <div className="contact-cards">
              <a href="https://linkedin.com/in/mirza-shafi" target="_blank" rel="noreferrer" className="contact-card card-glass">
                <div className="contact-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></div>
                <div>
                  <h4>LinkedIn</h4>
                  <p>Connect with me on LinkedIn</p>
                </div>
              </a>

              <a href="https://github.com/mirza-shafi" target="_blank" rel="noreferrer" className="contact-card card-glass">
                <div className="contact-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></div>
                <div>
                  <h4>GitHub</h4>
                  <p>Check out my repositories</p>
                </div>
              </a>

              <a href="https://wa.me/8801938820835" target="_blank" rel="noreferrer" className="contact-card card-glass">
                <div className="contact-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>Chat with me on WhatsApp</p>
                </div>
              </a>

              <a href="https://mail.google.com/mail/?view=cm&amp;to=mirza.md.shafi.uddin@gmail.com" target="_blank" rel="noreferrer" className="contact-card card-glass">
                <div className="contact-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                <div>
                  <h4>Email</h4>
                  <p>mirza.md.shafi.uddin@gmail.com</p>
                </div>
              </a>

              <a href="/images/MIRZA%20MD%20SHAFI%20UDDIN_CV_AI_Engineer.pdf" target="_blank" className="contact-card card-glass">
                <div className="contact-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></div>
                <div>
                  <h4>Download CV</h4>
                  <p>Get my latest resume as PDF</p>
                </div>
              </a>

              <div className="contact-info-card card-glass">
                <h4 className="mb-3 font-bold">Quick Response</h4>
                <p className="text-muted text-sm mb-4">
                  I typically respond to messages within 24 hours. For urgent inquiries, feel free to reach out on WhatsApp for faster communication.
                </p>
                <p className="text-muted text-sm">
                  Whether you're looking to collaborate on a project, need technical consultation, or just want to connect, I'm always open to meaningful conversations. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column card-glass">
            <div className="form-header text-center">
              <div className="form-icon-circle mx-auto mb-4">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 className="mb-2 font-bold" style={{ fontSize: '1.5rem' }}>Let's Build Something Smart</h3>
              <p className="text-muted text-sm">Tell me about your AI project idea and I'll get back to you within 24 hours.</p>
            </div>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Message Sent!</h4>
                <p className="text-muted text-sm">Thanks for reaching out. I'll respond within 24 hours.</p>
                <button onClick={() => setSent(false)} className="btn-outline mt-4" style={{ padding: '10px 24px', borderRadius: '30px' }}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form mt-8" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" placeholder="e.g. John Doe" className="form-input"
                      value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@company.com" className="form-input"
                      value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                  </div>
                </div>

                <div className="form-group">
                  <label>Project / Use Case</label>
                  <input type="text" placeholder="e.g. RAG Chatbot for internal docs, AI customer support agent..." className="form-input"
                    value={formData.useCase} onChange={e => setFormData(p => ({ ...p, useCase: e.target.value }))} />
                </div>

                <div className="form-group">
                  <label>What AI service do you need?</label>
                  <div className="checkbox-grid">
                    {[
                      'RAG / Document AI',
                      'LLM Fine-tuning',
                      'AI Chatbot / Agent',
                      'Full-Stack AI App',
                      'ML Model Integration',
                      'AI Consultation',
                    ].map(service => (
                      <label key={service} className="checkbox-label">
                        <input type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)} />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Describe Your Project *</label>
                  <textarea rows="4" placeholder="What problem are you solving? What data do you have? Any specific tech requirements (OpenAI, Ollama, LangChain, etc.)?" className="form-input"
                    value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
                </div>

                {error && (
                  <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '-8px' }}>{error}</p>
                )}

                <button type="submit" className="btn-primary w-full flex-center gap-2 mt-4" style={{ padding: '16px', borderRadius: '10px' }} disabled={sending}>
                  {sending ? '⏳ Sending...' : '🚀 Launch My AI Idea'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-mini text-center text-muted border-t pt-6 pb-6 border-gray-800 text-sm mt-12">
        <p>© 2026 Mirza Shafi. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;

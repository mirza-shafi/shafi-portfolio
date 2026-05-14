import React from 'react';

const Projects = () => {
  const FolderIcon = () => (
    <svg className="folder-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  );
  
  const projects = [
    {
      title: "Production RAG System with Hybrid Retrieval",
      desc: "Domain-specific 'Ask My Docs' system with BM25 + Vector search, Cross-Encoder Reranking, and citation enforcement for zero hallucinations.",
      tech: ["Python", "LangChain", "Pinecone", "FastAPI", "Docker"],
      link: "#"
    },
    {
      title: "Local SLM Benchmarking & Deployment Suite",
      desc: "Deployed/benchmarked Llama 3, Mistral, and Phi-3 locally using Ollama to evaluate privacy-first AI. Analyzed inference latency & memory.",
      tech: ["Python", "Ollama", "Streamlit", "Bash"],
      link: "#"
    },
    {
      title: "The Exiled Prince – Cybersecurity Game",
      desc: "Thesis: A gamified digital experience enhancing cybersecurity awareness among university students based on HCI principles.",
      tech: ["HCI", "Game Design", "Research"],
      link: "#"
    },
    {
      title: "Hospital Management Portal",
      desc: "Full-Stack Web App enabling scheduling, role-based access, dashboard analytics, and integrated chatbot support.",
      tech: ["MERN Stack", "Socket.io", "JWT"],
      link: "#"
    },
    {
      title: "Campus Living Distance & Academic Outcomes",
      desc: "Data-driven analysis to examine how commuting distance influences academic performance using statistical modeling.",
      tech: ["Python", "Pandas", "Matplotlib", "Jupyter"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Some Things I've <span className="text-highlight">Built</span></h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <header className="project-header">
              <div className="folder"><FolderIcon /></div>
              <div className="project-links-icons">
                <a href={project.link} target="_blank" rel="noreferrer">↗</a>
              </div>
            </header>
            <div className="project-content">
              <h3 className="project-title"><a href={project.link}>{project.title}</a></h3>
              <p className="project-description">{project.desc}</p>
            </div>
            <ul className="project-tech-list">
              {project.tech.map((t, index) => <li key={index}>{t}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';

const Projects = () => {
  const FolderIcon = () => (
    <svg className="folder-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  );
  
  const projects = [
    {
      title: "AI Traffic Analysis",
      desc: "Computer vision system to detect and count vehicles in real-time using YOLOv8 and OpenCV.",
      tech: ["Python", "YOLO", "OpenCV"],
      link: "#"
    },
    {
      title: "Hospital Management",
      desc: "Full-stack MERN application for managing patient records and doctor appointments.",
      tech: ["MongoDB", "Express", "React", "Node"],
      link: "#"
    },
    {
      title: "Portfolio V1",
      desc: "My first portfolio website built with simple HTML, CSS and JavaScript.",
      tech: ["HTML", "CSS", "JS"],
      link: "#"
    },
    {
      title: "Chatbot Assistant",
      desc: "NLP-based chatbot capable of handling customer queries for e-commerce platforms.",
      tech: ["Python", "NLTK", "Flask"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Some Things I've Built</h2>
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
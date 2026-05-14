import React, { useState, useCallback, useRef } from 'react';
import '../index.css';

const projects = [
  {
    id: 1,
    title: "AskMyDocs",
    description: "Enterprise-grade RAG system featuring Hybrid Search (BM25 + Vector) and Cross-Encoder reranking for accurate, citation-backed answers.",
    tags: ["AI", "RAG", "LangChain", "FastAPI"],
    image: "/images/project_askmydocs.png",
    githubUrl: "https://github.com/mirza-shafi/AskMyDocs",
    demoUrl: "https://askmydocs.mirzashafi.com/"
  },
  {
    id: 2,
    title: "Hospital Management Portal",
    description: "Full-stack MERN application with AI chatbot, blood bank management, patient tracking, and real-time appointment scheduling.",
    tags: ["MERN", "Socket.io", "AI", "MongoDB"],
    image: "/images/project_hospital.png",
    githubUrl: "https://github.com/mirza-shafi/Hospital_Management_Portal",
    demoUrl: "https://hmp.mirzashafi.com/"
  },
  {
    id: 3,
    title: "Local SLM Benchmark",
    description: "Privacy-first benchmarking tool measuring AI capabilities and inference latency across locally hosted small language models.",
    tags: ["Ollama", "Streamlit", "Python", "Benchmarking"],
    image: "/images/project_slm.png",
    githubUrl: "https://github.com/mirza-shafi/local-slm-benchmark-suite",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "TaskFlow",
    description: "A MERN-based Kanban task management application with drag-and-drop, team collaboration, and priority tagging.",
    tags: ["TypeScript", "React", "Node.js", "MongoDB"],
    image: "/images/project_taskflow.png",
    githubUrl: "https://github.com/mirza-shafi/TaskFlow",
    demoUrl: "https://task-flow.mirzashafi.com/"
  },
  {
    id: 5,
    title: "ERP Inventory API",
    description: "FastAPI-based RESTful API for managing customer orders, stock levels, and simulating full ERP sales workflows.",
    tags: ["Python", "FastAPI", "REST", "ERP"],
    image: "/images/project_erp.png",
    githubUrl: "https://github.com/mirza-shafi/Order-Processing-API-ERP-Module-",
    demoUrl: "https://erp-inventory-api-production.up.railway.app/"
  },
  ,{
    id: 6,
    title: "demo demo demo dmeo ",
    description: "dmeo vai.",
    tags: ["Python", "FastAPI", "REST", "ERP"],
    image: "/images/project_erp.png",
    githubUrl: "https://github.com/mirza-shafi/Order-Processing-API-ERP-Module-",
    demoUrl: "https://erp-inventory-api-production.up.railway.app/"
  }
];

const GithubIcon = () => (
  <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

/* ─── 3D Coverflow for desktop ─── */
function DesktopCarousel({ activeIndex, setActiveIndex }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getDiff = (index) => {
    let d = index - activeIndex;
    if (d < -2) d += projects.length;
    if (d > 2) d -= projects.length;
    return d;
  };

  const getCardStyle = (index) => {
    const diff = getDiff(index);
    const isHovered = hoveredIndex === index;

    const configs = {
      '-2': { x: '-135%', z: -280, rotY: 42,  scale: 0.65, opacity: 0.4,  brightness: 0.4 },
      '-1': { x: '-68%',  z: -120, rotY: 22,   scale: 0.82, opacity: 0.72, brightness: 0.65 },
       '0': { x: '0%',    z: 0,    rotY: 0,    scale: 1,    opacity: 1,    brightness: 1 },
       '1': { x: '68%',   z: -120, rotY: -22,  scale: 0.82, opacity: 0.72, brightness: 0.65 },
       '2': { x: '135%',  z: -280, rotY: -42,  scale: 0.65, opacity: 0.4,  brightness: 0.4 },
    };

    const cfg = configs[String(diff)];
    if (!cfg) return { display: 'none' };

    const hoverBrightness = (!diff && isHovered) ? 1 : (isHovered ? Math.min(cfg.brightness + 0.2, 0.9) : cfg.brightness);

    return {
      transform: `translateX(${cfg.x}) translateZ(${cfg.z}px) rotateY(${cfg.rotY}deg) scale(${cfg.scale})`,
      opacity: cfg.opacity,
      filter: `brightness(${hoverBrightness})`,
      zIndex: diff === 0 ? 20 : 10 - Math.abs(diff),
      cursor: diff === 0 ? 'default' : 'pointer',
      transition: 'all 0.55s cubic-bezier(0.25, 0.8, 0.25, 1)',
      willChange: 'transform',
    };
  };

  return (
    <div className="cf-stage">
      {projects.map((proj, index) => {
        const diff = getDiff(index);
        if (Math.abs(diff) > 2) return null;
        const isActive = diff === 0;
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={proj.id}
            className="cf-card"
            style={getCardStyle(index)}
            onClick={() => !isActive && setActiveIndex(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={proj.image} alt={proj.title} className="cf-card-img" />

            {/* Overlay: only shows on hover of active card */}
            <div
              className="cf-overlay"
              style={{
                opacity: (isActive && isHovered) ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}
            >
              {isActive && isHovered && (
                <div className="cf-overlay-content">
                  <h3 className="cf-project-title">{proj.title}</h3>
                  <p className="cf-project-desc">{proj.description}</p>
                  <div className="cf-tags">
                    {proj.tags.map(tag => (
                      <span key={tag} className="cf-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="cf-actions">
                    <a href={proj.githubUrl} target="_blank" rel="noreferrer"
                      className="cf-btn cf-btn-source" onClick={e => e.stopPropagation()}>
                      <GithubIcon /> Source
                    </a>
                    <a href={proj.demoUrl} target="_blank" rel="noreferrer"
                      className="cf-btn cf-btn-demo" onClick={e => e.stopPropagation()}>
                      <ExternalIcon /> Demo
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Mobile card slider ─── */
function MobileCarousel({ activeIndex, setActiveIndex }) {
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) setActiveIndex(p => (p + 1) % projects.length);
      else setActiveIndex(p => (p - 1 + projects.length) % projects.length);
    }
    touchStartX.current = null;
  };

  const proj = projects[activeIndex];

  return (
    <div
      className="cf-mobile-card"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img src={proj.image} alt={proj.title} className="cf-card-img" style={{ borderRadius: '16px' }} />
      <div className="cf-mobile-info">
        <h3 className="cf-project-title" style={{ fontSize: '1.25rem' }}>{proj.title}</h3>
        <p className="cf-project-desc" style={{ fontSize: '0.85rem' }}>{proj.description}</p>
        <div className="cf-tags">
          {proj.tags.map(tag => <span key={tag} className="cf-tag">{tag}</span>)}
        </div>
        <div className="cf-actions mt-4">
          <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="cf-btn cf-btn-source">
            <GithubIcon /> Source
          </a>
          <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="cf-btn cf-btn-demo">
            <ExternalIcon /> Demo
          </a>
        </div>
      </div>
      {/* Dot indicators */}
      <div className="cf-mobile-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`cf-dot ${i === activeIndex ? 'cf-dot-active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Export ─── */
export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(2);
  const next = useCallback(() => setActiveIndex(p => (p + 1) % projects.length), []);
  const prev = useCallback(() => setActiveIndex(p => (p - 1 + projects.length) % projects.length), []);

  return (
    <div className="cf-wrapper">
      {/* Desktop Coverflow */}
      <div className="cf-desktop">
        <DesktopCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>

      {/* Mobile Slider */}
      <div className="cf-mobile">
        <MobileCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>

      {/* Nav arrows (desktop only) */}
      <div className="cf-nav cf-desktop">
        <button className="cf-nav-btn" onClick={prev} aria-label="Previous">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button className="cf-nav-btn" onClick={next} aria-label="Next">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}

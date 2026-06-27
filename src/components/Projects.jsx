import { useState, useEffect, useCallback } from 'react';

/* ─────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────── */
const projects = [

  /* ── 1. AI Automation & Chatbots ── */
  {
    id: 1,
    title: 'AutofyBit',
    categories: ['AI Automation'],
    shortDesc: 'WhatsApp & Messenger chatbot with Meta Lead Ads integration for fully automated lead capture, qualification, and follow-up.',
    fullDesc: 'AutofyBit connects Meta Lead Ads directly to WhatsApp and Messenger, capturing leads the moment they submit a form and instantly opening a personalised conversation. The bot qualifies leads, answers FAQs, and hands off to a human agent when needed — all without manual intervention. Built for freelancers and small businesses who want 24/7 automated client engagement.',
    tags: ['WhatsApp API', 'Meta Ads', 'Node.js', 'Chatbot', 'Automation', 'Lead Gen'],
    image: null,
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a3d2e 100%)',
    icon: '🤖',
    videoUrl: null,
    githubUrl: 'https://github.com/mirza-shafi/AutofyBit',
    demoUrl: null,
    featured: true,
  },

  /* ── 2. RAG & AI Applications ── */
  {
    id: 2,
    title: 'AskMyDocs',
    categories: ['RAG & AI Apps'],
    shortDesc: 'Enterprise-grade RAG system with Hybrid Search (BM25 + Vector) and Cross-Encoder reranking for accurate, citation-backed answers.',
    fullDesc: 'A production-ready Retrieval-Augmented Generation system combining BM25 keyword search with dense vector similarity for hybrid retrieval. Cross-Encoder reranking ensures the most relevant documents surface first, and every answer cites the exact source chunk. Supports PDF, DOCX, and TXT ingestion with pluggable LLM backends (OpenAI, Ollama).',
    tags: ['RAG', 'LangChain', 'FastAPI', 'Vector DB', 'OpenAI', 'Python'],
    image: '/images/project_askmydocs.png',
    videoUrl: null,
    githubUrl: 'https://github.com/mirza-shafi/AskMyDocs',
    demoUrl: 'https://askmydocs.mirzashafi.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'Hospital Management Portal',
    categories: ['RAG & AI Apps', 'Full-Stack'],
    shortDesc: 'Full-stack MERN app with an AI RAG assistant module, blood bank management, and real-time appointment scheduling.',
    fullDesc: 'A comprehensive hospital management system built on the MERN stack. The embedded RAG assistant answers clinical queries from uploaded medical documents. Additional features include real-time appointment scheduling via Socket.io, blood bank inventory tracking, and role-based access for doctors, nurses, admins, and patients.',
    tags: ['MERN', 'RAG', 'Socket.io', 'AI', 'MongoDB', 'React'],
    image: '/images/project_hospital.png',
    videoUrl: null,
    githubUrl: 'https://github.com/mirza-shafi/Hospital_Management_Portal',
    demoUrl: 'https://hmp.mirzashafi.com/',
    featured: true,
  },

  /* ── 3. AI/ML Engineering ── */
  {
    id: 4,
    title: 'Heart Disease Prediction API',
    categories: ['AI/ML Engineering'],
    shortDesc: 'ML-powered REST API that predicts heart disease risk from clinical indicators using a trained classification model.',
    fullDesc: 'A FastAPI service that exposes a trained machine learning classifier for heart disease risk prediction. The model is trained on the Cleveland Heart Disease dataset using scikit-learn, with feature engineering, hyperparameter tuning, and cross-validation. Returns a risk score and confidence interval for each patient profile submitted via REST.',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'ML', 'REST API', 'Pandas'],
    image: null,
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #2d0f0f 50%, #1a1a0a 100%)',
    icon: '❤️',
    videoUrl: null,
    githubUrl: 'https://github.com/mirza-shafi/Heart-Disease-Prediction',
    demoUrl: null,
    featured: false,
  },
  {
    id: 5,
    title: 'Virtual Try-On System',
    categories: ['AI/ML Engineering'],
    shortDesc: 'Computer vision product where users upload images and virtually try on clothes via prompts using YOLOv8 and SAM2 masking.',
    fullDesc: 'A CV pipeline where users upload a photo of themselves and describe an outfit via text prompt. YOLOv8 detects clothing regions, SAM2 generates precise segmentation masks, and an image generation model inpaints the new garment realistically. Supports upper-body and lower-body region selection with fine-tuned inpainting for studio-quality results.',
    tags: ['YOLOv8', 'SAM2', 'FastAPI', 'Image Generation', 'React', 'Python'],
    image: null,
    gradient: 'linear-gradient(135deg, #0d0a1a 0%, #1a0d2e 50%, #0a1a2e 100%)',
    icon: '👕',
    videoUrl: null,
    githubUrl: 'https://github.com/mirza-shafi/Virtual-Try-On-System',
    demoUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: 'Local SLM Benchmark Suite',
    categories: ['AI/ML Engineering'],
    shortDesc: 'Privacy-first benchmarking tool measuring AI capabilities and inference latency across locally hosted small language models.',
    fullDesc: 'A Streamlit-based benchmarking suite for evaluating locally hosted small language models via Ollama. Measures inference latency, token throughput, and response quality across standardised reasoning, coding, and summarisation tasks. Enables privacy-conscious teams to compare SLMs before committing to production deployment.',
    tags: ['Ollama', 'Streamlit', 'Python', 'Benchmarking', 'LLM', 'Evaluation'],
    image: '/images/project_slm.png',
    videoUrl: null,
    githubUrl: 'https://github.com/mirza-shafi/local-slm-benchmark-suite',
    demoUrl: null,
    featured: false,
  },

  /* ── 4. Full-Stack ── */
  {
    id: 7,
    title: 'TaskFlow',
    categories: ['Full-Stack'],
    shortDesc: 'MERN-based Kanban task management app with drag-and-drop, team collaboration, and real-time priority tagging.',
    fullDesc: 'A full-featured Kanban board built with TypeScript and the MERN stack. Supports drag-and-drop task management, multi-member team workspaces, priority labelling, and due-date tracking. Real-time updates via Socket.io ensure all team members see board changes instantly without refreshing.',
    tags: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Socket.io', 'MERN'],
    image: '/images/project_taskflow.png',
    videoUrl: null,
    githubUrl: 'https://github.com/mirza-shafi/TaskFlow',
    demoUrl: 'https://task-flow.mirzashafi.com/',
    featured: false,
  },
  {
    id: 8,
    title: 'Sturent',
    categories: ['Full-Stack'],
    shortDesc: 'Student resource management platform for organising notes, assignments, and academic materials with a clean collaborative interface.',
    fullDesc: 'Sturent is a web platform designed for students to organise their academic life. Features include note sharing, assignment deadline tracking, course resource libraries, and peer collaboration rooms. Built with a React frontend and Node.js/Express backend, with MongoDB for flexible document storage.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Full-Stack'],
    image: null,
    gradient: 'linear-gradient(135deg, #0a0d1a 0%, #0f1628 50%, #0a1a0f 100%)',
    icon: '🎓',
    videoUrl: null,
    githubUrl: 'https://github.com/mirza-shafi/Sturent',
    demoUrl: null,
    featured: false,
  },
];

const CATEGORIES = [
  { key: 'All',              label: 'All' },
  { key: 'AI Automation',    label: '🤖 AI Automation' },
  { key: 'RAG & AI Apps',   label: '🧠 RAG & AI Apps' },
  { key: 'AI/ML Engineering',label: '⚡ AI/ML Engineering' },
  { key: 'Full-Stack',       label: '🌐 Full-Stack' },
];

const INITIAL_COUNT = 6;
const VISIBLE_TAGS = 3;

/* ─────────────────────────────────────────
   ICONS
───────────────────────────────────────── */
const CloseIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const GithubIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const ExternalIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const SparkleIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l2.09 6.26L21 10l-6.91 1.74L12 18l-2.09-6.26L3 10l6.91-1.74z" />
  </svg>
);
const ChevronDown = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const ChevronUp = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

/* ─────────────────────────────────────────
   CARD THUMBNAIL — image or gradient placeholder
───────────────────────────────────────── */
function CardThumb({ project }) {
  if (project.image) {
    return (
      <div className="proj-thumb">
        <img src={project.image} alt={project.title} className="proj-thumb-img" loading="lazy" />
        {project.videoUrl && (
          <div className="proj-play-badge">
            <svg width="32" height="32" fill="rgba(255,255,255,0.9)" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        )}
        {project.featured && <span className="proj-featured-badge">Featured</span>}
        <span className="proj-category-badge">{project.categories[0]}</span>
        <div className="proj-thumb-overlay" />
      </div>
    );
  }

  // Gradient placeholder for projects without screenshots yet
  return (
    <div className="proj-thumb" style={{ background: project.gradient || 'linear-gradient(135deg,#111,#222)' }}>
      <div className="proj-placeholder-content">
        <span className="proj-placeholder-icon">{project.icon || '🚀'}</span>
        <span className="proj-placeholder-label">{project.title}</span>
      </div>
      {project.featured && <span className="proj-featured-badge">Featured</span>}
      <span className="proj-category-badge">{project.categories[0]}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────── */
function ProjectCard({ project, onClick }) {
  const visibleTags = project.tags.slice(0, VISIBLE_TAGS);
  const extraCount = project.tags.length - VISIBLE_TAGS;

  return (
    <div className="proj-card" onClick={() => onClick(project)} role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(project)}>
      <CardThumb project={project} />
      <div className="proj-info">
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.shortDesc}</p>
        <div className="proj-tags">
          {visibleTags.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
          {extraCount > 0 && <span className="proj-tag proj-tag-extra">+{extraCount}</span>}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const previewUrl = project.demoUrl && project.demoUrl !== '#'
    ? project.demoUrl.replace('https://', '')
    : 'localhost:3000';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose} aria-label="Close"><CloseIcon /></button>

        {/* Browser mockup */}
        <div className="modal-preview">
          <div className="browser-bar">
            <div className="browser-dots">
              <span className="bdot bdot-red" /><span className="bdot bdot-yellow" /><span className="bdot bdot-green" />
            </div>
            <div className="browser-url">{previewUrl}</div>
          </div>
          <div className="modal-media">
            {project.videoUrl ? (
              <video src={project.videoUrl} controls autoPlay muted playsInline className="modal-video" />
            ) : project.image ? (
              <img src={project.image} alt={project.title} className="modal-img" />
            ) : (
              <div className="modal-placeholder" style={{ background: project.gradient }}>
                <span className="modal-placeholder-icon">{project.icon || '🚀'}</span>
                <span className="modal-placeholder-hint">Video coming soon</span>
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="modal-info">
          <div className="modal-info-header">
            <h2 className="modal-title">{project.title}</h2>
            <div className="modal-badges">
              {project.featured && (
                <span className="modal-featured-badge"><SparkleIcon /> Featured Project</span>
              )}
              {project.categories.map(cat => (
                <span key={cat} className="modal-cat-badge">{cat}</span>
              ))}
            </div>
          </div>

          <p className="modal-full-desc">{project.fullDesc}</p>

          <div className="modal-tech">
            <h4 className="modal-tech-label">Technologies Used</h4>
            <div className="modal-tags">
              {project.tags.map(tag => <span key={tag} className="modal-tag">{tag}</span>)}
            </div>
          </div>

          <div className="modal-actions">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="modal-btn modal-btn-source">
              <GithubIcon /> View Source
            </a>
            {project.demoUrl && project.demoUrl !== '#' && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="modal-btn modal-btn-demo">
                <ExternalIcon /> Live Demo
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────── */
export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const close = useCallback(() => setSelected(null), []);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeCategory));

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  const handleCategory = (key) => {
    setActiveCategory(key);
    setShowAll(false);
  };

  return (
    <div className="projects-section-inner">

      {/* Header */}
      <div className="proj-section-header">
        <span className="proj-badge"><SparkleIcon /> Featured Work</span>
        <h2 className="proj-section-title">
          AI Projects in <span className="proj-title-accent">Action</span>
        </h2>
        <p className="proj-section-sub">
          Real-world AI applications — from chatbot automation and RAG systems to computer vision and full-stack platforms
        </p>
      </div>

      {/* Category filter */}
      <div className="proj-filter-row">
        {CATEGORIES.map(({ key, label }) => {
          const count = key === 'All' ? projects.length : projects.filter(p => p.categories.includes(key)).length;
          return (
            <button
              key={key}
              className={`proj-filter-btn ${activeCategory === key ? 'proj-filter-btn--active' : ''}`}
              onClick={() => handleCategory(key)}
            >
              {label}
              <span className="proj-filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {visible.length > 0 ? (
        <div className="proj-grid">
          {visible.map(project => (
            <ProjectCard key={project.id} project={project} onClick={setSelected} />
          ))}
        </div>
      ) : (
        <div className="proj-empty">No projects in this category yet.</div>
      )}

      {/* Show more / less */}
      {hasMore && (
        <div className="proj-footer">
          <button className="proj-view-all-btn" onClick={() => setShowAll(prev => !prev)}>
            {showAll ? <><ChevronUp /> Show Less</> : <><ChevronDown /> View All {filtered.length} Projects</>}
          </button>
          {!showAll && (
            <p className="proj-explore-hint">Showing {visible.length} of {filtered.length} projects</p>
          )}
        </div>
      )}

      {selected && <ProjectModal project={selected} onClose={close} />}
    </div>
  );
}

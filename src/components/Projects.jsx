import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

/* ─────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────── */
const projects = [

  /* ── 1. AI Automation & Chatbots ── */
  {
    id: 101,
    title: 'Facebook Lead Automation (Autofy Solution)',
    categories: ['AI Automation'],
    shortDesc: 'Automates 50+ daily Facebook leads directly into the Autofy CRM via n8n, saving hours of manual data entry.',
    fullDesc: 'I built an automated lead generation pipeline for Autofy Solutions entirely on n8n. It listens for incoming leads from Facebook Lead Ads via webhooks and posts them directly into their internal CRM. Currently automating 50+ leads daily, this simple yet powerful solution eliminates manual tracking and saves significant time for the team.',
    tags: ['n8n', 'Facebook Ads', 'CRM', 'Webhooks', 'Automation'],
    image: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20picture/facebook_lead_automation.png',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
    icon: '⚡',
    videoUrl: null,
    githubUrl: null,
    demoUrl: null,
    featured: true,
  },
  {
    id: 102,
    title: 'Personal AI News Agent',
    categories: ['AI Automation'],
    shortDesc: 'Custom n8n agent that fetches AI news daily, summarizes it using Groq LLM, and emails a personalized newsletter at 7 AM.',
    fullDesc: 'A personal automation agent acting as an intelligent news aggregator. Triggered daily at 7 AM via n8n, it fetches the latest AI news and tools from across the web. It uses a Groq-powered Chat Model to deduplicate and summarize the articles, generates a clean HTML newsletter, and automatically distributes it via Gmail. The system also manages subscriber lists natively via Google Sheets.',
    tags: ['n8n', 'Groq', 'LLM', 'Gmail API', 'Google Sheets', 'Automation'],
    image: '/images/project_ai_news.png',
    gradient: null,
    icon: null,
    videoUrl: null,
    githubUrl: null,
    demoUrl: null,
    featured: true,
  },
  {
    id: 103,
    title: 'AI Article Agent',
    categories: ['AI Automation', 'AI/ML Engineering'],
    shortDesc: 'FastAPI-driven workflow that scrapes web articles, summarizes them via Gemini AI, logs to Google Sheets, and emails the report.',
    fullDesc: 'An end-to-end AI article summarization pipeline. It receives URLs via a custom FastAPI webhook, scrapes the raw article text, and passes it to Google Gemini for summarization and insight extraction. The processed data is automatically appended to a Google Sheet database for archiving and simultaneously emailed directly to the user as a formatted report.',
    tags: ['FastAPI', 'Gemini AI', 'Web Scraping', 'Google Sheets', 'Gmail API', 'Python'],
    image: '/images/project_ai_article.png',
    gradient: null,
    icon: null,
    videoUrl: null,
    githubUrl: null,
    demoUrl: null,
    featured: true,
  },
  {
    id: 104,
    title: 'Autofy CRM & Omnichannel AI Agent',
    categories: ['AI Automation', 'Full-Stack'],
    shortDesc: 'Custom React CRM integrating WhatsApp & Messenger, featuring a trained AI agent that takes over conversations when staff are away.',
    fullDesc: 'A massive, full-stack CRM platform developed for Autofy Solutions. The frontend is built in React, providing a unified inbox for staff to chat with customers across WhatsApp and Messenger. When human agents are unavailable, a custom-trained AI agent seamlessly takes over the conversation, providing intelligent, context-aware automatic replies based on company data to ensure 24/7 customer engagement.',
    tags: ['React', 'WhatsApp API', 'Messenger API', 'AI Agent', 'CRM', 'Full-Stack'],
    image: '/images/project_autofy_crm.png',
    gradient: null,
    icon: null,
    videoUrl: null,
    githubUrl: null,
    demoUrl: null,
    featured: true,
  },

  /* ── 2. RAG & AI Applications ── */
  {
    id: 105,
    title: 'AutofyBit RAG Chatbot',
    categories: ['RAG & AI Apps'],
    shortDesc: 'Advanced RAG-powered chatbot built for AutofyBit to handle complex customer queries with context-aware responses.',
    fullDesc: 'A highly capable AI chatbot built specifically for AutofyBit, leveraging advanced RAG (Retrieval-Augmented Generation) architecture. It securely indexes company knowledge bases and utilizes semantic search to fetch relevant context before generating a response. This ensures the bot provides accurate, hallucination-free answers to complex customer support questions.',
    tags: ['RAG', 'LLM', 'Chatbot', 'Semantic Search', 'Vector DB', 'AI Agent'],
    image: null,
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    icon: '💬',
    videoUrl: null,
    githubUrl: null,
    demoUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: 'AskMyDocs',
    categories: ['RAG & AI Apps'],
    shortDesc: 'Enterprise-grade RAG system with Hybrid Search (BM25 + Vector) and Cross-Encoder reranking for accurate, citation-backed answers.',
    fullDesc: 'A production-ready Retrieval-Augmented Generation system combining BM25 keyword search with dense vector similarity for hybrid retrieval. Cross-Encoder reranking ensures the most relevant documents surface first, and every answer cites the exact source chunk. Supports PDF, DOCX, and TXT ingestion with pluggable LLM backends (OpenAI, Ollama).',
    tags: ['RAG', 'LangChain', 'FastAPI', 'Vector DB', 'OpenAI', 'Python'],
    image: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20picture/askmydocs.png',
    videoUrl: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20video/askmydocs.mp4',
    githubUrl: 'https://github.com/mirza-shafi/AskMyDocs',
    demoUrl: 'https://askmydocs.mirzashafi.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'Hospital RAG Assistant',
    categories: ['RAG & AI Apps'],
    shortDesc: 'Embedded AI assistant for a hospital management portal answering clinical queries from medical documents.',
    fullDesc: 'A specialized Retrieval-Augmented Generation (RAG) assistant built as part of a larger hospital management system. It securely ingests and indexes uploaded medical documents, allowing doctors and medical staff to instantly query clinical protocols and patient history via a chat interface with accurate citations.',
    tags: ['RAG', 'LLM', 'AI', 'Vector DB', 'Healthcare'],
    image: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20picture/hmp_rag_chatbot.png',
    videoUrl: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20video/hmp_rag_chatbot.mp4',
    githubUrl: 'https://github.com/mirza-shafi/Hospital_Management_Portal',
    demoUrl: 'https://hmp.mirzashafi.com/',
    featured: true,
  },
  {
    id: 301,
    title: 'Hospital Management Portal',
    categories: ['Full-Stack'],
    shortDesc: 'Full-stack MERN platform for hospitals featuring real-time appointment scheduling and blood bank inventory.',
    fullDesc: 'A comprehensive hospital management system built on the MERN stack. Features include real-time appointment scheduling using Socket.io, a robust blood bank inventory tracking system, and role-based dashboards with secure access control for doctors, nurses, administrators, and patients.',
    tags: ['MERN', 'Socket.io', 'MongoDB', 'React', 'Node.js', 'Express'],
    image: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20picture/hmp_website.png',
    videoUrl: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20video/hmp_website.mp4',
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
    image: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20picture/heart_disease_prediction_picture.png',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #2d0f0f 50%, #1a1a0a 100%)',
    icon: '❤️',
    videoUrl: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20video/heart%20disease%20prediction%20api.mp4',
    githubUrl: 'https://github.com/mirza-shafi/Heart-Disease-Prediction',
    demoUrl: 'https://heartdisease.mirzashafi.com/docs',
    featured: false,
  },
  {
    id: 5,
    title: 'Virtual Try-On System',
    categories: ['AI/ML Engineering'],
    shortDesc: 'Computer vision product where users upload images and virtually try on clothes via prompts using YOLOv8 and SAM2 masking.',
    fullDesc: 'A CV pipeline where users upload a photo of themselves and describe an outfit via text prompt. YOLOv8 detects clothing regions, SAM2 generates precise segmentation masks, and an image generation model inpaints the new garment realistically. Supports upper-body and lower-body region selection with fine-tuned inpainting for studio-quality results.',
    tags: ['YOLOv8', 'SAM2', 'FastAPI', 'Image Generation', 'React', 'Python'],
    image: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20picture/vertual_try_on_system.png',
    gradient: 'linear-gradient(135deg, #0d0a1a 0%, #1a0d2e 50%, #0a1a2e 100%)',
    icon: '👕',
    videoUrl: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20video/vertual_try_on_system.mp4',
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
    image: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20picture/sturent_picture.png',
    gradient: 'linear-gradient(135deg, #0a0d1a 0%, #0f1628 50%, #0a1a0f 100%)',
    icon: '🎓',
    videoUrl: 'https://pub-2e228f0de4e14489b5acc58b8a133c05.r2.dev/project%20video/sturent.mp4',
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
function CardThumb({ project, isHovered }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (!isHovered && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isHovered]);

  if (project.image) {
    return (
      <div className="proj-thumb">
        <img src={project.image} alt={project.title} className="proj-thumb-img" loading="lazy" />
        {project.videoUrl && (
          <video 
            ref={videoRef}
            src={project.videoUrl}
            className={`proj-thumb-video ${isHovered ? 'playing' : ''}`}
            muted 
            loop 
            playsInline
          />
        )}
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
  const [isHovered, setIsHovered] = useState(false);
  const visibleTags = project.tags.slice(0, VISIBLE_TAGS);
  const extraCount = project.tags.length - VISIBLE_TAGS;

  return (
    <div className="proj-card" 
      onClick={() => onClick(project)} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(project)}>
      <CardThumb project={project} isHovered={isHovered} />
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

      {selected && typeof document !== 'undefined' && createPortal(<ProjectModal project={selected} onClose={close} />, document.body)}
    </div>
  );
}

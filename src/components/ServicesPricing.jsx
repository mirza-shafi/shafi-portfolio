import React from 'react';

const services = [
  {
    id: 1,
    title: "AI Automation & Chatbots",
    price: "From $500",
    timing: "1-2 weeks delivery",
    description: "Automate lead generation and customer support with intelligent conversational bots.",
    icon: "💬",
    features: [
      "WhatsApp & Meta Messenger integration",
      "Lead qualification & CRM routing",
      "n8n / Make.com automation workflows",
      "Automated FAQ & knowledge base",
      "Human handover for unresolved queries"
    ],
    recommended: false
  },
  {
    id: 2,
    title: "RAG & Custom AI Agents",
    price: "From $1,500",
    timing: "2-4 weeks delivery",
    description: "Production-ready AI agents grounded securely in your private company data.",
    icon: "🧠",
    features: [
      "Advanced hybrid search (BM25 + vector)",
      "Cross-encoder reranking for accuracy",
      "Multi-agent autonomous workflows",
      "Voice AI agents (Twilio/WebSockets)",
      "Source-grounded responses with citations"
    ],
    recommended: true
  },
  {
    id: 3,
    title: "Full-Stack AI Products",
    price: "From $3,000",
    timing: "4-8 weeks delivery",
    description: "End-to-end web applications powered by custom machine learning models.",
    icon: "🚀",
    features: [
      "React/Next.js modern frontend",
      "FastAPI/Python scalable backend",
      "Custom ML model integration",
      "Secure authentication & databases",
      "Deployment & cloud architecture"
    ],
    recommended: false
  }
];

const CheckIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ServicesPricing() {
  return (
    <div className="services-section-inner">
      <div className="proj-section-header">
        <p className="badge font-mono text-accent" style={{ margin: '0 auto 16px auto', display: 'table' }}>Services & Pricing</p>
        <h2 className="section-title text-center">
          Scale Your Business with AI
        </h2>
      </div>

      <div className="pricing-grid">
        {services.map((service) => (
          <div key={service.id} className={`pricing-card ${service.recommended ? 'pricing-card--recommended' : ''}`}>
            {service.recommended && (
              <div className="pricing-recommended-badge">Most popular</div>
            )}
            
            <div className="pricing-header">
              <span className="pricing-icon">{service.icon}</span>
              <h3 className="pricing-title">{service.title}</h3>
              <p className="pricing-desc">{service.description}</p>
            </div>
            
            <div className="pricing-price-container">
              <div className="pricing-price-row">
                <span className="pricing-price">{service.price}</span>
                <span className="pricing-price-period">/ project</span>
              </div>
              <div className="pricing-timing">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {service.timing}
              </div>
            </div>

            <ul className="pricing-features">
              {service.features.map((feature, i) => (
                <li key={i} className="pricing-feature-item">
                  <span className="pricing-feature-icon"><CheckIcon /></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className={`pricing-btn ${service.recommended ? 'pricing-btn--primary' : 'pricing-btn--secondary'}`}>
              Book a consultation
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

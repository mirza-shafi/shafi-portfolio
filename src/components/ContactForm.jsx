import { useState } from 'react';
// emailjs is imported dynamically inside handleSubmit to avoid
// @emailjs/browser accessing localStorage at module-eval time (SSR crash)

const services = [
  'RAG / Document AI',
  'LLM Fine-tuning',
  'AI Chatbot / Agent',
  'Full-Stack AI App',
  'ML Model Integration',
  'AI Consultation',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', useCase: '', message: '', services: []
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

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
      // Dynamic import so emailjs never runs at module evaluation (avoids SSR crash)
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.send(
        'mirzashafi',
        'template_p0bnlwi',
        {
          name: formData.name,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.useCase || 'AI Project Inquiry',
          message: `Use Case: ${formData.useCase || 'N/A'}\nServices: ${formData.services.join(', ') || 'Not specified'}\n\n${formData.message}`,
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

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Message Sent!</h4>
        <p className="text-muted text-sm">Thanks for reaching out. I'll respond within 24 hours.</p>
        <button onClick={() => setSent(false)} className="btn-outline mt-4" style={{ padding: '10px 24px', borderRadius: '30px' }}>Send Another</button>
      </div>
    );
  }

  return (
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
          {services.map(service => (
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
  );
}

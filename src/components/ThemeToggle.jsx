import { useState, useEffect } from 'react';

const SunIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2"/><path d="M12 20v2"/>
    <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
    <path d="M2 12h2"/><path d="M20 12h2"/>
    <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Read the theme that was set by the inline script in Layout.astro
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
    document.documentElement.className = next;

    // Re-trigger scroll animations after theme change
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show-animate');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.hidden-animate').forEach(el => observer.observe(el));
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

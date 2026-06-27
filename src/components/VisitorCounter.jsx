import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    fetch('/api/counter/shafiportfolio/visitors/up')
      .then(r => r.json())
      .then(d => setVisitorCount(d.count ?? null))
      .catch(() => setVisitorCount(null));
  }, []);

  if (visitorCount === null) return null;

  return (
    <div className="visitor-counter">
      <span className="vc-dot" />
      <span className="vc-count">{visitorCount.toLocaleString()}</span>
      <span>views</span>
    </div>
  );
}

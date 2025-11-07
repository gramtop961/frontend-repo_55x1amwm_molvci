import React, { useCallback, useMemo } from 'react';
import Hero3D from './components/Hero3D';
import ProfileShowcase from './components/ProfileShowcase';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import ShareBar from './components/ShareBar';

function App() {
  const currentUrl = useMemo(() => (typeof window !== 'undefined' ? window.location.href : 'https://skillx.app'), []);

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({ title: 'SkillX Profile', text: 'Explore my SkillX profile', url: currentUrl }).catch(() => {});
    } else {
      navigator.clipboard.writeText(currentUrl).then(() => alert('Link copied to clipboard'));
    }
  }, [currentUrl]);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero3D onShare={handleShare} />

      <ProfileShowcase />

      <AnalyticsDashboard />

      <section className="bg-black py-16">
        <h3 className="mb-4 text-center text-2xl font-bold">Share your SkillX profile anywhere</h3>
        <p className="mb-8 text-center text-slate-300">One link that looks amazing on every platform.</p>
        <ShareBar url={currentUrl} />
      </section>

      <footer className="border-t border-white/10 bg-slate-950/60 py-8 text-center text-sm text-slate-400">
        SkillX — The ultimate talent identity. © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;

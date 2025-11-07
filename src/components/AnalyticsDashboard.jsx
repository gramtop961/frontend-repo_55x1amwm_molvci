import React from 'react';
import { motion } from 'framer-motion';
import { Eye, MousePointerClick, Share2, Activity } from 'lucide-react';

const MetricCard = ({ icon: Icon, label, value, delta }) => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950 p-5">
    <div className="flex items-start justify-between">
      <div>
        <div className="text-sm text-slate-400">{label}</div>
        <div className="mt-1 text-2xl font-bold text-white">{value}</div>
      </div>
      <Icon className="h-5 w-5 text-cyan-300" />
    </div>
    {delta && (
      <div className={`mt-2 text-xs ${delta.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{delta} this week</div>
    )}
  </div>
);

const AnalyticsDashboard = () => {
  return (
    <section id="analytics" className="relative w-full bg-gradient-to-b from-black via-slate-950 to-slate-950 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="bg-gradient-to-br from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
            Deep Dive Analytics
          </h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Understand how your profile performs across the web. Track visits, engagement, shares, and velocity at a glance.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard icon={Eye} label="Profile Views" value="28,942" delta="+12%" />
          <MetricCard icon={MousePointerClick} label="Clicks" value="7,210" delta="+8%" />
          <MetricCard icon={Share2} label="Shares" value="3,118" delta="+21%" />
          <MetricCard icon={Activity} label="Reach Velocity" value="1.8x" delta="+0.3x" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 p-4"
        >
          <div className="text-sm text-slate-300">
            Real-time insights integrate with your links to visualize audience journeys and highlight peak moments.
          </div>
          <div className="mt-4 h-40 w-full rounded-lg bg-gradient-to-r from-cyan-400/10 via-fuchsia-500/10 to-emerald-400/10 p-2">
            <div className="h-full w-full rounded-md bg-[conic-gradient(from_90deg_at_50%_50%,rgba(34,211,238,0.2),rgba(236,72,153,0.2),rgba(16,185,129,0.2),rgba(34,211,238,0.2))]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;

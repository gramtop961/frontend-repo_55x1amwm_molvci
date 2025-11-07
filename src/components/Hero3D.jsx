import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Share2 } from 'lucide-react';

const Hero3D = ({ onShare }) => {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Iridescent gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-400/20 via-fuchsia-500/10 to-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/10 via-cyan-400/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span className="text-xs font-medium tracking-wider text-cyan-100">Introducing SkillX</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="mt-6 bg-gradient-to-br from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Your Ultimate Hyper‑Futuristic Talent Profile
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-4 max-w-2xl text-base text-slate-200/90 sm:text-lg"
        >
          Curate skills, achievements, and certifications in one dazzling identity. Share anywhere. Impress everyone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#profile"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_40px_-12px_rgba(34,211,238,0.6)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            Build My Profile
          </a>

          <button
            onClick={onShare}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <Share2 className="h-4 w-4" /> Share
          </button>
        </motion.div>
      </div>

      {/* bottom glow divider */}
      <div className="relative z-10 mt-20 h-24 w-full bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
};

export default Hero3D;

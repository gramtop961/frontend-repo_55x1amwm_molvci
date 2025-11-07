import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Link as LinkIcon, Trophy, Shield } from 'lucide-react';

const ProfileShowcase = () => {
  const achievements = [
    { platform: 'Credly', title: 'AWS Certified Cloud Practitioner', link: 'https://www.credly.com/' },
    { platform: 'TryHackMe', title: 'Blue Team Junior', link: 'https://tryhackme.com/' },
    { platform: 'GitHub', title: '100+ Stars on Open Source', link: 'https://github.com/' },
  ];

  return (
    <section id="profile" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-cyan-500/10 via-fuchsia-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 md:grid-cols-5"
        >
          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl">
              <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.12),transparent_40%)]" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="h-16 w-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-[2px]">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-900">
                    <BadgeCheck className="h-7 w-7 text-cyan-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Ava Quantum</h3>
                  <p className="text-sm text-slate-300">Holographic Identity Engineer</p>
                </div>
              </div>
              <div className="relative z-10 mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: 'Followers', value: '12.3k' },
                  { label: 'Endorsements', value: '842' },
                  { label: 'Projects', value: '57' },
                  { label: 'Certs', value: '18' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6">
              <div className="mb-6 flex items-center gap-3">
                <Shield className="h-5 w-5 text-cyan-300" />
                <h4 className="text-lg font-semibold">Verified Achievements</h4>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {achievements.map((a) => (
                  <motion.a
                    key={a.title}
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-cyan-400/10 to-fuchsia-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-300">{a.platform}</div>
                        <LinkIcon className="h-4 w-4 text-slate-400" />
                      </div>
                      <div className="mt-1 text-base font-semibold text-white">{a.title}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-300" />
                  <h5 className="font-semibold">Showcase</h5>
                </div>
                <p className="text-sm text-slate-300">
                  Aggregate credentials from platforms like Credly, TryHackMe, and more. Auto-fetch badges, verify authenticity, and present them in your signature SkillX style.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileShowcase;

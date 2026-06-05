'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Zap, TrendingUp, Code } from 'lucide-react';
import { resumeData } from '@/data/resume';

const highlights = [
  {
    icon: Code,
    title: '8+ Years',
    desc: 'Frontend Engineering',
    color: 'from-violet-600 to-purple-600',
    glow: 'rgba(124,58,237,0.25)',
  },
  {
    icon: Users,
    title: '14+ Engineers',
    desc: 'Teams Led & Mentored',
    color: 'from-blue-600 to-cyan-600',
    glow: 'rgba(59,130,246,0.25)',
  },
  {
    icon: Zap,
    title: '30→90%',
    desc: 'PageSpeed Improvement',
    color: 'from-emerald-600 to-teal-600',
    glow: 'rgba(16,185,129,0.25)',
  },
  {
    icon: TrendingUp,
    title: '+25%',
    desc: 'Avg User Engagement Boost',
    color: 'from-orange-500 to-pink-600',
    glow: 'rgba(249,115,22,0.25)',
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Heading */}
          <motion.div variants={item} className="mb-16">
            <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-3">
              01 / About Me
            </p>
            <h2 className="section-heading">
              Crafting{' '}
              <span className="gradient-text">digital experiences</span>
              <br />
              that perform &amp; scale.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Summary */}
            <motion.div variants={item} className="space-y-5">
              <p className="text-slate-300 text-lg leading-relaxed">
                {resumeData.summary}
              </p>

              <div className="pt-4 space-y-3">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest font-mono">
                  Leadership
                </h3>
                {resumeData.leadership.map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-500 to-blue-500" />
                    <p className="text-slate-400 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <motion.a
                href="mailto:akaverma007@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl font-semibold text-sm text-white glass border border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/10 transition-all duration-300"
              >
                Let&apos;s Connect
                <span className="text-violet-400">→</span>
              </motion.a>
            </motion.div>

            {/* Right: Highlights */}
            <motion.div variants={item} className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc, color, glow }) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass glass-hover rounded-2xl p-6 relative overflow-hidden group"
                  style={{ '--glow': glow } as React.CSSProperties}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md`}
                    style={{ boxShadow: `0 0 20px ${glow}` }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="text-2xl font-black text-white mb-1">{title}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-medium">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

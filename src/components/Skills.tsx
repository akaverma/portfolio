'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, TestTube, Server, Database, Cloud, Layers, type LucideIcon } from 'lucide-react';
import { resumeData } from '@/data/resume';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  TestTube,
  Server,
  Database,
  Cloud,
  Layers,
};

const colorMap: Record<string, { bg: string; pill: string; glow: string; text: string }> = {
  violet: {
    bg: 'from-violet-600/20 to-purple-600/20',
    pill: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    glow: 'rgba(124,58,237,0.25)',
    text: 'text-violet-400',
  },
  emerald: {
    bg: 'from-emerald-600/20 to-teal-600/20',
    pill: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    glow: 'rgba(16,185,129,0.25)',
    text: 'text-emerald-400',
  },
  blue: {
    bg: 'from-blue-600/20 to-indigo-600/20',
    pill: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    glow: 'rgba(59,130,246,0.25)',
    text: 'text-blue-400',
  },
  orange: {
    bg: 'from-orange-600/20 to-amber-600/20',
    pill: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    glow: 'rgba(249,115,22,0.25)',
    text: 'text-orange-400',
  },
  cyan: {
    bg: 'from-cyan-600/20 to-sky-600/20',
    pill: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    glow: 'rgba(6,182,212,0.25)',
    text: 'text-cyan-400',
  },
  pink: {
    bg: 'from-pink-600/20 to-rose-600/20',
    pill: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
    glow: 'rgba(236,72,153,0.25)',
    text: 'text-pink-400',
  },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="skills" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-3">
            02 / Technical Skills
          </p>
          <h2 className="section-heading">
            Technologies I{' '}
            <span className="gradient-text">master</span>.
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-xl">
            A full-stack toolkit with deep frontend expertise and solid backend capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {resumeData.skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            const colors = colorMap[category.color] || colorMap.violet;

            return (
              <motion.div
                key={category.name}
                variants={card}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="glass glass-hover rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* BG gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${colors.glow.replace('0.25', '0.4')}, transparent)`,
                        boxShadow: `0 0 20px ${colors.glow}`,
                        border: `1px solid ${colors.glow.replace('0.25', '0.3')}`,
                      }}
                    >
                      <Icon size={18} className={colors.text} />
                    </div>
                    <h3 className={`font-bold text-lg ${colors.text}`}>{category.name}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${colors.pill} transition-all duration-200 hover:scale-105 cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

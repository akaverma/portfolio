'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { resumeData } from '@/data/resume';

const dotColors = [
  { border: '#7c3aed', shadow: 'rgba(124,58,237,0.5)', label: 'violet' },
  { border: '#2563eb', shadow: 'rgba(37,99,235,0.5)', label: 'blue' },
  { border: '#06b6d4', shadow: 'rgba(6,182,212,0.5)', label: 'cyan' },
  { border: '#10b981', shadow: 'rgba(16,185,129,0.5)', label: 'emerald' },
  { border: '#f59e0b', shadow: 'rgba(245,158,11,0.5)', label: 'amber' },
];

function ExperienceCard({
  job,
  index,
  isInView,
}: {
  job: (typeof resumeData.experience)[number];
  index: number;
  isInView: boolean;
}) {
  const dot = dotColors[index % dotColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[15px] top-6 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent last:hidden" />

      {/* Dot */}
      <div
        className="absolute left-0 top-1.5 w-8 h-8 rounded-full glass flex items-center justify-center"
        style={{ border: `2px solid ${dot.border}`, boxShadow: `0 0 16px ${dot.shadow}` }}
      >
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: dot.border, boxShadow: `0 0 8px ${dot.shadow}` }}
        />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="glass glass-hover rounded-2xl p-6 ml-2"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white font-bold text-lg">{job.title}</h3>
              {job.current && (
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  Current
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Building2 size={13} />
              <span className="font-semibold" style={{ color: dot.border }}>
                {job.company}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-500 text-xs">{job.type}</span>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono">
              <Calendar size={11} />
              <span>{job.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 text-xs">
              <MapPin size={11} />
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5">
          {job.highlights.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.12 + i * 0.06 + 0.3, duration: 0.4 }}
              className="flex gap-3 text-slate-400 text-sm leading-relaxed"
            >
              <CheckCircle2
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: dot.border }}
              />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-3">
            03 / Experience
          </p>
          <h2 className="section-heading">
            Where I&apos;ve{' '}
            <span className="gradient-text">made impact</span>.
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-xl">
            5 companies, 8 years of building products used by millions.
          </p>
        </motion.div>

        <div className="max-w-3xl">
          {resumeData.experience.map((job, i) => (
            <ExperienceCard key={job.company} job={job} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

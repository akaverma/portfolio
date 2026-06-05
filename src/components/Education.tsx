'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { resumeData } from '@/data/resume';

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="education" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-3">
            04 / Education
          </p>
          <h2 className="section-heading">
            Academic{' '}
            <span className="gradient-text">foundation</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="glass glass-hover rounded-3xl p-8 relative overflow-hidden group"
          >
            {/* Glow BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.08] to-blue-600/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="relative z-10">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-glow-purple">
                  <GraduationCap size={28} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {resumeData.education.degree}
                  </h3>
                  <p className="text-violet-400 font-semibold text-base mb-3">
                    {resumeData.education.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Calendar size={13} className="text-slate-500" />
                      <span>{resumeData.education.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin size={13} className="text-slate-500" />
                      <span>Uttar Pradesh, India</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award size={13} className="text-amber-400" />
                      <span className="text-amber-400 font-semibold">
                        {resumeData.education.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-slate-500 text-sm leading-relaxed">
                  Bachelor of Technology with a focus on Computer Science fundamentals — algorithms,
                  data structures, software engineering, and systems programming. Built the
                  foundation for a career in high-performance frontend engineering.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

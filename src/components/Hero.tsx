'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { resumeData } from '@/data/resume';

const titles = [
  'Senior Frontend Engineer',
  'Tech Lead',
  'React.js Expert',
  'Next.js Architect',
  'Performance Optimizer',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          }}
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)',
          }}
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-32 right-24 w-3 h-3 rounded-full bg-violet-500/60"
        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-64 left-20 w-2 h-2 rounded-full bg-cyan-400/60"
        animate={{ y: [0, 16, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-1.5 h-1.5 rounded-full bg-blue-400/50"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="container mx-auto px-6 z-10 text-center pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/30 text-xs text-violet-300 font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base mb-2 font-mono tracking-[0.2em] uppercase"
          >
            Hi there, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-9xl font-black mb-6 tracking-tight leading-none"
          >
            <span className="gradient-text">Akarshit</span>
            <br />
            <span className="text-white">Verma</span>
          </motion.h1>

          {/* Animated title */}
          <motion.div
            variants={itemVariants}
            className="h-10 flex items-center justify-center mb-4"
          >
            <span className="text-slate-500 mr-2 font-mono text-lg">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="text-xl md:text-2xl font-semibold text-cyan-400"
              >
                {titles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-10"
          >
            <MapPin size={13} />
            <span>{resumeData.location}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            8+ years crafting high-performance web apps. Expert in React.js, Next.js &amp; TypeScript.
            Scaled teams from 0 to 14 engineers and boosted PageSpeed from{' '}
            <span className="text-violet-400 font-semibold">30% → 90%</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-14"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-purple"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={16} />
                Get in Touch
              </span>
            </button>
            <button
              onClick={() => scrollToSection('#experience')}
              className="px-8 py-4 rounded-2xl font-semibold text-white glass border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/[0.08] transition-all duration-300 hover:-translate-y-1"
            >
              View My Work
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-16"
          >
            {[
              { href: resumeData.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: resumeData.github, icon: Github, label: 'GitHub' },
              { href: `mailto:${resumeData.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl glass border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {resumeData.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass glass-hover rounded-2xl p-5 text-center relative overflow-hidden shimmer"
              >
                <div
                  className="text-2xl font-black mb-1"
                  style={{
                    background: `linear-gradient(135deg, ${
                      ['#a855f7', '#06b6d4', '#3b82f6', '#10b981'][i]
                    }, ${['#7c3aed', '#0891b2', '#1d4ed8', '#059669'][i]})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors group"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-mono tracking-widest uppercase opacity-60">scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}

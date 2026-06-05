'use client';

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '@/data/resume';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: resumeData.github, label: 'GitHub' },
  { icon: Linkedin, href: resumeData.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${resumeData.email}`, label: 'Email' },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/[0.05] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white font-black text-sm shadow-glow-purple">
              AV
            </div>
            <div>
              <p className="font-bold text-white leading-none">Akarshit Verma</p>
              <p className="text-slate-600 text-xs mt-0.5">Senior Frontend Engineer · Tech Lead</p>
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-6"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="text-slate-500 hover:text-white text-sm transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </motion.nav>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl glass border border-white/[0.07] flex items-center justify-center text-slate-500 hover:text-white hover:border-violet-500/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={15} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs"
        >
          <p>© {new Date().getFullYear()} Akarshit Verma. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with{' '}
            <Heart size={11} className="text-rose-500 fill-rose-500" />
            {' '}using Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

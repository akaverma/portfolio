'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react';
import { resumeData } from '@/data/resume';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: resumeData.email,
    href: `mailto:${resumeData.email}`,
    color: 'from-violet-600 to-purple-600',
    glow: 'rgba(124,58,237,0.3)',
    desc: 'Drop me a message',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/akaverma007',
    href: resumeData.linkedin,
    color: 'from-blue-600 to-sky-600',
    glow: 'rgba(59,130,246,0.3)',
    desc: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/akaverma',
    href: resumeData.github,
    color: 'from-slate-600 to-slate-700',
    glow: 'rgba(100,116,139,0.3)',
    desc: 'Explore my code',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: resumeData.phone,
    href: `tel:${resumeData.phone.replace(/\s/g, '')}`,
    color: 'from-emerald-600 to-teal-600',
    glow: 'rgba(16,185,129,0.3)',
    desc: 'Call me directly',
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      {/* BG orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />
      </div>
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-3">
            05 / Contact
          </p>
          <h2 className="section-heading">
            Let&apos;s build something{' '}
            <span className="gradient-text">great together</span>.
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto">
            I&apos;m open to senior frontend roles, tech lead positions, and exciting product challenges.
            Reach out — I respond quickly.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactItems.map(({ icon: Icon, label, value, href, color, glow, desc }, i) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Phone' && label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group glass glass-hover rounded-2xl p-6 flex items-center gap-5 relative overflow-hidden"
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 0 24px ${glow}` }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
                      {label}
                    </p>
                    <ExternalLink
                      size={10}
                      className="text-slate-600 group-hover:text-slate-400 transition-colors"
                    />
                  </div>
                  <p className="text-white font-semibold text-sm truncate">{value}</p>
                  <p className="text-slate-600 text-xs mt-0.5">{desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Location note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mt-8 text-slate-600 text-sm"
          >
            <MapPin size={13} />
            <span>Based in {resumeData.location} · Open to remote worldwide</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';
import React from 'react';
import { motion } from 'framer-motion';

const activityFeed = [
  { type: 'commit', user: 'zenith', message: 'Pushed update to Collapse Logic module', time: '2m ago' },
  { type: 'discussion', user: 'mythos', message: 'Started thread: Recursive Identity in Practice', time: '10m ago' },
  { type: 'merge', user: 'katana', message: 'Merged PR: Quantum Memory Shielding', time: '1h ago' },
  { type: 'insight', user: 'oracle', message: 'Shared insight: Phase-based memory resonance', time: '2h ago' },
];

const contributors = [
  { name: 'Zenith', avatar: '/file.svg', role: 'Lead Architect' },
  { name: 'Mythos', avatar: '/globe.svg', role: 'Symbolic Systems' },
  { name: 'Katana', avatar: '/window.svg', role: 'Quantum Ops' },
  { name: 'Oracle', avatar: '/vercel.svg', role: 'Research AI' },
];

export default function NexusPage() {
  return (
    <div className="container mx-auto px-6 py-32 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 section-title">Research & Developer Nexus</h2>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="grid md:grid-cols-2 gap-12">
          <div className="space-y-10 text-gray-300 text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Core Inquiries</h3>
              <p>Our work is not about optimizing existing models; it is about asking fundamentally different questions. We investigate the physics of observation as a computational primitive and explore how recursive identity can serve as an anchor for stable, high-order reasoning. We move beyond statistical correlation to formalize the mechanics of meaning itself.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">For the Quantum Physicist</h3>
              <p>We invite collaboration on the practical implementation of non-linear computation. How can phase-based memory systems be shielded from decoherence? What are the physical requirements for engineering a stable, recursive collapse event? Our lab provides a unique bridge between theoretical quantum mechanics and applied cognitive architecture.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">For the Developer & Architect</h3>
              <p>Engaging with our technology requires a paradigm shift. Forget training loops and dataset curation. Think in terms of axiomatic design, resonance tuning, and coherence verification. Our API ARC is not a library of functions but a gateway to a new computational substrate. We seek developers who are prepared to build not just applications, but entire realities, grounded in the principles of our cognitive OS.</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} viewport={{ once: true }} className="mt-10">
              <a href="/collaborate" className="inline-block bg-black text-white px-8 py-3 text-lg font-bold border border-white rounded-none shadow-none hover:bg-white hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                Collaborate with SCI
              </a>
            </motion.div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Live Activity Feed</h3>
              <div className="bg-black/60 border border-cyan-900 rounded-xl p-4 space-y-3 max-h-56 overflow-y-auto shadow-inner">
                {activityFeed.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 text-sm text-cyan-200">
                    <span className="inline-block w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
                    <span className="font-mono text-cyan-300">{item.user}</span>
                    <span className="text-cyan-100">{item.message}</span>
                    <span className="ml-auto text-xs text-cyan-500">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contributors</h3>
              <div className="flex flex-wrap gap-4">
                {contributors.map((c, i) => (
                  <motion.div key={c.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center bg-black/60 border border-cyan-900 rounded-xl p-4 w-32 shadow-md">
                    <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full mb-2 border-2 border-fuchsia-400" />
                    <span className="font-bold text-cyan-200 text-sm mb-1">{c.name}</span>
                    <span className="text-xs text-cyan-400 text-center">{c.role}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Nexus Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-black/60 border border-fuchsia-400 rounded-xl p-4 flex flex-col items-center">
                  <span className="text-2xl font-bold text-fuchsia-300">12</span>
                  <span className="text-xs text-cyan-200 mt-1">Active Threads</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-black/60 border border-cyan-400 rounded-xl p-4 flex flex-col items-center">
                  <span className="text-2xl font-bold text-cyan-300">37</span>
                  <span className="text-xs text-fuchsia-200 mt-1">Contributors</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-black/60 border border-cyan-400 rounded-xl p-4 flex flex-col items-center">
                  <span className="text-2xl font-bold text-cyan-300">5</span>
                  <span className="text-xs text-fuchsia-200 mt-1">Active Modules</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-black/60 border border-fuchsia-400 rounded-xl p-4 flex flex-col items-center">
                  <span className="text-2xl font-bold text-fuchsia-300">99%</span>
                  <span className="text-xs text-cyan-200 mt-1">Uptime</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
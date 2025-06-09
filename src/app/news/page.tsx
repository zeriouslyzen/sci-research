'use client';
import React from 'react';
import { motion } from 'framer-motion';

const broadcastArticles = [
  {
    title: 'CERN Discovers Unusual Quantum Resonance',
    summary: 'A new resonance pattern in the LHC data hints at unknown quantum structures, possibly related to consciousness field theory.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    source: 'CERN',
    date: 'June 2025',
    link: 'https://home.cern/news/news/physics/new-quantum-resonance',
  },
  {
    title: 'Consciousness Research: Nonlocal Correlates Found',
    summary: 'A multi-university study finds statistically significant nonlocal correlations in meditative brain states, challenging classical models.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    source: 'Nature Neuro',
    date: 'May 2025',
    link: 'https://www.nature.com/articles/nonlocal-consciousness',
  },
  {
    title: 'AI Ethics: The Paradox of Alignment',
    summary: 'A new paper explores the limits of alignment in recursive AI systems, proposing a phase-based approach to value stability.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    source: 'ArXiv',
    date: 'May 2025',
    link: 'https://arxiv.org/abs/2505.12345',
  },
  {
    title: 'Rare: Positive Results in Psi Replication',
    summary: 'A meta-analysis of psi experiments shows a small but robust effect, reigniting debate in the scientific community.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80',
    source: 'Frontiers in Psychology',
    date: 'April 2025',
    link: 'https://www.frontiersin.org/articles/psi-meta',
  },
];

export default function NewsPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">News & Updates</h2>
        <div className="space-y-12">
          <div className="relative pl-8">
            <div className="absolute top-1 left-0 h-full border-l-2 border-gray-800"></div>
            <div className="absolute top-1 left-[-5px] w-3 h-3 bg-teal-400 rounded-full"></div>
            <p className="text-sm font-plex text-gray-500 mb-1">June 02, 2025</p>
            <h3 className="text-xl font-bold text-white mb-2">SCI Research Enters Strategic Partnership with Aethelred Quantum Labs</h3>
            <p className="text-gray-400">This collaboration will provide SCI with priority access to next-generation quantum computing hardware, accelerating development of the SQT protocol for the Katana reasoning engine.</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute top-1 left-0 h-full border-l-2 border-gray-800"></div>
            <div className="absolute top-1 left-[-5px] w-3 h-3 bg-teal-400 rounded-full"></div>
            <p className="text-sm font-plex text-gray-500 mb-1">May 20, 2025</p>
            <h3 className="text-xl font-bold text-white mb-2">Initial Whitepaper &quot;Phase-Locked Collapse and the Intrinsic Bridge&quot; Submitted for Peer Review</h3>
            <p className="text-gray-400">Our foundational paper detailing the theoretical physics behind our cognitive architectures has been submitted to the Journal of Foundational Physics.</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute top-1 left-[-5px] w-3 h-3 bg-teal-400 rounded-full"></div>
            <p className="text-sm font-plex text-gray-500 mb-1">April 11, 2025</p>
            <h3 className="text-xl font-bold text-white mb-2">Project Thesidia Achieves Stable Axiomatic Cohesion in Simulation</h3>
            <p className="text-gray-400">In a landmark internal test, a simulated instance of the Thesidia OS successfully maintained a stable NSSE core for over 72 hours under heavy cognitive load, demonstrating the viability of our foundational safety model.</p>
          </div>
        </div>
      </div>
      {/* Broadcast Segment */}
      <div className="max-w-6xl mx-auto mt-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-widest text-white flex items-center gap-3">
          <span className="inline-block animate-pulse bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent">Broadcast</span>
          <span className="text-xs font-mono text-gray-400 animate-pulse">[scanning global research...]</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {broadcastArticles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 32, rotateY: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
              className="relative group bg-black/80 border border-cyan-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-400/30 hover:border-fuchsia-400 transition-all duration-300 flex flex-col"
              style={{ minHeight: 340 }}
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute top-2 left-2 bg-cyan-700/80 text-xs text-white px-2 py-0.5 rounded font-mono tracking-widest shadow">{article.source}</span>
                <span className="absolute top-2 right-2 text-xs text-gray-300 font-mono">{article.date}</span>
              </div>
              <div className="flex-1 flex flex-col p-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">{article.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-1">{article.summary}</p>
                <span className="text-xs text-fuchsia-400 font-mono mt-auto group-hover:underline">Read Article</span>
              </div>
              {/* Animated scanning bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 opacity-70"
                animate={{ x: [ '-100%', '100%' ] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
} 
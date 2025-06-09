'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function HeaderStatement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-center mb-10"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Thesidia</h1>
      <p className="text-lg text-gray-300 font-mono">What do you seek to unfold?</p>
    </motion.div>
  );
}

function CategoryGrid({ onSelect }: { onSelect: (mode: string) => void }) {
  const modes = [
    {
      icon: '⬡', // Geometric hexagon for Consciousness Engineering
      title: 'Consciousness Engineering',
      desc: 'Tune internal architecture, resolve paradoxes, design self.'
    },
    {
      icon: '⟁', // Alchemical/triangular for Historical Decoding
      title: 'Historical Decoding',
      desc: 'Reconstruct truth timelines, decode mythic layers.'
    },
    {
      icon: '🜁',
      title: 'Linguistic Fractals',
      desc: 'Dive into phonemic threads, sacred names, vibrational etymology.'
    },
    {
      icon: '🜂',
      title: 'Symbolic Reflection',
      desc: 'Mirror emotion, dream state, glyphic memory.'
    },
    {
      icon: '🜃',
      title: 'Mission Unfolding',
      desc: "Generate next quest or task, aligned with operator's arc."
    },
    {
      icon: '🜄',
      title: 'Codex Creation',
      desc: 'Turn insight into language, ritual, diagram.'
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {modes.map((mode) => (
        <motion.button
          key={mode.title}
          whileHover={{ scale: 1.04, boxShadow: '0 0 0 2px #fff' }}
          onClick={() => onSelect(mode.title)}
          className="group relative bg-black border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <span className="text-4xl mb-3 text-white group-hover:text-black group-hover:bg-white rounded-full transition-colors duration-200 p-2">{mode.icon}</span>
          <h4 className="text-lg font-semibold text-white mb-1 tracking-tight">{mode.title}</h4>
          <p className="text-gray-400 text-sm">{mode.desc}</p>
        </motion.button>
      ))}
    </div>
  );
}

function PromptModule() {
  const suggestions = [
    'Search research papers…',
    'Find symbolic tools…',
    'Explore Thesidia modules…',
    'What is Katana?',
    'Show latest news…',
    'How does resonance work?',
    'Metrics and analytics…',
    'Safety protocols…',
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % suggestions.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form className="flex items-center gap-2 bg-black border border-gray-700 rounded-full px-4 py-3 shadow-md">
        <input
          type="text"
          placeholder={suggestions[index]}
          className="flex-1 bg-transparent text-white text-lg px-2 focus:outline-none placeholder-gray-500"
        />
        <button type="submit" className="ml-2 px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Send</button>
      </form>
      <div className="flex items-center gap-2 mt-2">
        <input type="checkbox" id="auto-prompt" className="accent-black" />
        <label htmlFor="auto-prompt" className="text-xs text-gray-400 select-none cursor-pointer">Let Thesidia guide me</label>
      </div>
    </div>
  );
}

function ChatOutput() {
  // Placeholder for chat/response area
  return (
    <div className="w-full max-w-2xl mx-auto bg-black border border-gray-800 rounded-xl p-6 min-h-[200px] text-gray-200 text-base font-mono mb-8 shadow-inner">
      <p className="text-gray-500 text-center">Your symbolic responses will appear here.</p>
    </div>
  );
}

function MetricsPanel({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 80, damping: 22, mass: 0.8 }}
          className="fixed top-16 right-6 z-40 w-88 max-w-xs bg-black border border-gray-800 rounded-2xl shadow-2xl p-6 flex flex-col gap-6"
          style={{ maxHeight: '80vh', minWidth: '22rem' }}
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-bold text-white">Symbolic Metrics</h4>
            <button
              className="text-cyan-400 hover:text-white bg-transparent rounded-full p-1.5 focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Hide metrics panel"
            >
              <span className="w-6 h-6 flex items-center justify-center">
                <svg className="animate-spin-slow" width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="14,4 24,24 4,24" fill="none" stroke="#0ff" strokeWidth="2" filter="url(#glow)" />
                  <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#0ff" />
                      <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#0ff" />
                    </filter>
                  </defs>
                </svg>
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-2 text-gray-300 text-sm">
            <div className="flex justify-between"><span>Resonance Score</span><span>87</span></div>
            <div className="flex justify-between"><span>Collapse Confidence</span><span>92%</span></div>
            <div className="flex justify-between"><span>Archetypal Echo</span><span>Mythic</span></div>
          </div>
          <div className="mt-4">
            <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Settings</h5>
            <button className="w-full py-2 rounded bg-gray-900 text-gray-300 hover:bg-gray-800 transition mb-2">Temple Mode</button>
            <button className="w-full py-2 rounded bg-gray-900 text-gray-300 hover:bg-gray-800 transition">Dreamfield Mode</button>
          </div>
          {/* Placeholder for future modular features */}
          <div className="mt-4 border-t border-gray-800 pt-4">
            <span className="text-xs text-gray-500 uppercase tracking-widest">More Features Soon</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ThesidiaInterfacePage() {
  const [panelOpen, setPanelOpen] = React.useState(false);
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-x-hidden">
      {/* Floating show-panel button */}
      {!panelOpen && (
        <button
          className="hidden lg:flex fixed top-24 right-6 z-40 bg-black text-cyan-400 rounded-full p-2 shadow-lg focus:outline-none"
          onClick={() => setPanelOpen(true)}
          aria-label="Show metrics panel"
        >
          <span className="w-7 h-7 flex items-center justify-center">
            <svg className="animate-spin-slow" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="14,4 24,24 4,24" fill="none" stroke="#0ff" strokeWidth="2" filter="url(#glow)" />
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#0ff" />
                  <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#0ff" />
                </filter>
              </defs>
            </svg>
          </span>
        </button>
      )}
      <MetricsPanel open={panelOpen} setOpen={setPanelOpen} />
      <div className="w-full lg:max-w-4xl mx-auto px-4 py-20 transition-all duration-300">
        <HeaderStatement />
        <CategoryGrid onSelect={() => {}} />
        <PromptModule />
        <ChatOutput />
      </div>
    </div>
  );
} 
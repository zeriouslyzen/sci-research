'use client';
import React, { useRef, useState, useEffect } from 'react';
import '../thesidia-glitch.css';
import '../triangle-pulse.css';

function CategoryGrid({ onSelect }: { onSelect: (mode: string) => void }) {
  const modes = [
    {
      icon: '⬡',
      title: 'Consciousness Engineering',
      desc: 'Tune internal architecture, resolve paradoxes, design self.'
    },
    {
      icon: '⟁',
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
        <button
          key={mode.title}
          onClick={() => onSelect(mode.title)}
          className="group relative bg-black border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <span className="text-4xl mb-3 text-white group-hover:text-black group-hover:bg-white rounded-full transition-colors duration-200 p-2">{mode.icon}</span>
          <h4 className="text-lg font-semibold text-white mb-1 tracking-tight">{mode.title}</h4>
          <p className="text-gray-400 text-sm">{mode.desc}</p>
        </button>
      ))}
    </div>
  );
}

function MetricsPanel({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  if (!open) return null;
  return (
    <div
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
    </div>
  );
}

export default function ThesidiaInterfacePage() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Your symbolic responses will appear here.' }
  ]);
  const [input, setInput] = useState('');
  const [glitchIndex, setGlitchIndex] = useState<number | null>(null);
  const [pulse, setPulse] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [messages.length]);

  useEffect(() => {
    if (glitchIndex !== null) {
      const timer = setTimeout(() => setGlitchIndex(null), 600);
      return () => clearTimeout(timer);
    }
  }, [glitchIndex]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => {
      const newMsgs = [...msgs, { role: 'user', content: input }];
      setGlitchIndex(newMsgs.length - 1);
      return newMsgs;
    });
    setInput('');
    setPulse(true);
    setTimeout(() => setPulse(false), 600);
    setTimeout(() => {
      setMessages((msgs) => {
        const newMsgs = [...msgs, { role: 'assistant', content: `Symbolic response to: "${input}"` }];
        setGlitchIndex(newMsgs.length - 1);
        return newMsgs;
      });
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 900);
  };

  const toggleSidebar = () => {
    const event = new CustomEvent('toggleSidebar', { detail: true });
    window.dispatchEvent(event);
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-black text-white overflow-hidden">
      {/* Small toolbar */}
      <div className="h-12 bg-black/90 border-b border-gray-800 flex items-center justify-between px-4">
        <button
          onClick={toggleSidebar}
          className="text-yellow-400 hover:text-white bg-transparent rounded-full p-1.5 focus:outline-none"
          aria-label="Show menu"
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="cyberpunk-toggle">
              <g filter="url(#glow-white)">
                <polyline className="chevron-left" points="10,8 2,16 10,24" stroke="#fff" strokeWidth="3" strokeLinejoin="round" fill="none"/>
                <polyline className="chevron-right" points="22,8 30,16 22,24" stroke="#fff" strokeWidth="3" strokeLinejoin="round" fill="none"/>
                <line className="slash" x1="16" y1="6" x2="16" y2="26" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </g>
              <defs>
                <filter id="glow-white" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#fff" />
                </filter>
              </defs>
            </svg>
          </span>
        </button>
        <h1 className="text-cyan-400 font-[Share Tech Mono,monospace] text-sm tracking-wider">THESIDIA</h1>
        <button
          onClick={() => setPanelOpen(!panelOpen)}
          className="w-8 h-8 flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label={panelOpen ? "Hide metrics panel" : "Show metrics panel"}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <MetricsPanel open={panelOpen} setOpen={setPanelOpen} />
      <div className="flex-1 flex flex-col w-full relative overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 pb-32 pt-8 bg-black/70">
          <div className="mb-8">
            <CategoryGrid onSelect={(selectedMode) => {
              setMessages(prev => [...prev, { role: 'system', content: `Mode selected: ${selectedMode}` }]);
            }} />
          </div>
          {messages.map((msg, i) => (
            <div key={i} className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-3 py-2 max-w-md font-[Share Tech Mono,monospace] text-base ${msg.role === 'user' ? 'text-cyan-200' : 'text-gray-200'}${glitchIndex === i ? ' glitch' : ''}`}>
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={handleSend} className="fixed bottom-0 left-0 right-0 w-full px-4 pb-6 bg-black/90 z-20 flex items-center justify-center">
          <div className="flex items-center w-full max-w-2xl rounded-full border border-gray-700 bg-black/80 px-4 py-2 shadow-md">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your symbolic query..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none font-[Share Tech Mono,monospace]"
            />
            <button
              type="submit"
              className={`ml-2 p-2 rounded-full ${pulse ? 'bg-cyan-400' : 'bg-gray-800'} text-white transition-colors duration-300`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 
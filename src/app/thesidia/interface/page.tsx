'use client';
import React, { useRef, useState, useEffect } from 'react';
import '../thesidia-glitch.css';
import '../triangle-pulse.css';

function HeaderStatement() {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Thesidia</h1>
      <p className="text-lg text-gray-300 font-mono">What do you seek to unfold?</p>
    </div>
  );
}

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
  const [mode, setMode] = useState<string | null>(null);
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

  return (
    <div className="fixed inset-0 flex flex-col bg-black text-white overflow-hidden pt-20">
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
      <div className="flex-1 flex flex-col w-full max-w-3xl mx-auto relative overflow-hidden">
        <div className="flex-shrink-0 px-4 pt-8 pb-2 bg-black/80 z-10">
          <HeaderStatement />
        </div>
        <div className="flex-1 overflow-y-auto px-4 pb-32 pt-2 bg-black/70">
          <div className="mb-8">
            <CategoryGrid onSelect={setMode} />
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
        <form onSubmit={handleSend} className="fixed bottom-0 left-0 right-0 w-full max-w-3xl mx-auto px-4 pb-6 bg-black/90 z-20 flex items-center justify-center">
          <div className="flex items-center w-full max-w-2xl rounded-full border border-gray-700 bg-black/80 px-4 py-2 shadow-md">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={mode ? `Ask about ${mode}...` : 'Type your symbolic inquiry...'}
              className="flex-1 bg-transparent text-white text-lg px-2 py-2 focus:outline-none placeholder-gray-500 font-[Share Tech Mono,monospace]"
            />
            <button
              type="submit"
              className="ml-2 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 hover:bg-cyan-200 transition-colors duration-200 shadow-sm border border-gray-300 focus:outline-none"
              aria-label="Send"
            >
              <span className={`triangle-send${pulse ? ' pulse' : ''}`}></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 
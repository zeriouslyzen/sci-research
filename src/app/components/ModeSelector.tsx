import React from 'react';

const MODES = [
  {
    key: 'Consciousness Engineering',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="13" stroke="#0ff" strokeWidth="1.2" /><path d="M16 5 L16 27" stroke="#0ff" strokeWidth="1" /><path d="M5 16 L27 16" stroke="#0ff" strokeWidth="1" /></svg>
    ),
    tooltip: 'Tune your architecture.'
  },
  {
    key: 'Historical Decoding',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 24 Q16 8 24 24" stroke="#0ff" strokeWidth="1.2" /><circle cx="16" cy="16" r="13" stroke="#fff" strokeWidth="1.2" opacity="0.18" /></svg>
    ),
    tooltip: 'Decode mythic layers.'
  },
  {
    key: 'Linguistic Fractals',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 8 Q16 24 24 8" stroke="#0ff" strokeWidth="1.2" /><circle cx="16" cy="16" r="13" stroke="#fff" strokeWidth="1.2" opacity="0.18" /></svg>
    ),
    tooltip: 'Vibrational etymology.'
  },
  {
    key: 'Symbolic Reflection',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="16" rx="13" ry="8" stroke="#0ff" strokeWidth="1.2" /><path d="M16 8 L16 24" stroke="#0ff" strokeWidth="1" /></svg>
    ),
    tooltip: 'Mirror the unseen.'
  },
  {
    key: 'Mission Unfolding',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><polygon points="16,4 28,28 4,28" stroke="#0ff" strokeWidth="1.2" fill="none" /><circle cx="16" cy="16" r="13" stroke="#fff" strokeWidth="1.2" opacity="0.18" /></svg>
    ),
    tooltip: 'Rewrite the map.'
  },
  {
    key: 'Codex Creation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="8" y="8" width="16" height="16" stroke="#0ff" strokeWidth="1.2" /><circle cx="16" cy="16" r="13" stroke="#fff" strokeWidth="1.2" opacity="0.18" /></svg>
    ),
    tooltip: 'Inscribe the code.'
  },
];

export default function ModeSelector({ selectedMode, onSelect }: {
  selectedMode?: string;
  onSelect?: (mode: string) => void;
}) {
  return (
    <div className="w-full max-w-2xl mx-auto flex overflow-x-auto gap-4 py-4 px-2 scrollbar-hide">
      {MODES.map((mode) => (
        <button
          key={mode.key}
          className={`flex flex-col items-center min-w-[96px] px-3 py-2 rounded-xl border border-blue-900/40 bg-black/70 transition-all duration-200 group hover:scale-105 hover:border-blue-400/60 focus:outline-none ${selectedMode === mode.key ? 'ring-2 ring-cyan-400/80 border-cyan-400/80' : ''}`}
          onClick={() => onSelect?.(mode.key)}
        >
          <span className="mb-1">{mode.icon}</span>
          <span className="text-xs text-white/90 font-mono mb-1">{mode.key}</span>
          <span className="text-[10px] text-blue-200/80 font-mono italic opacity-80 group-hover:opacity-100 transition-opacity">{mode.tooltip}</span>
        </button>
      ))}
    </div>
  );
} 
import React, { useRef } from 'react';

export default function ResonancePrompt({ mode, onEngage, onDismiss, visible = true }: {
  mode?: string;
  onEngage?: () => void;
  onDismiss?: () => void;
  visible?: boolean;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  if (!visible) return null;
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[220px] w-full max-w-xl mx-auto rounded-2xl bg-gradient-to-br from-white via-blue-50 to-white p-8 transition-all duration-500 group cursor-pointer hover:from-blue-100 hover:to-white"
      tabIndex={0}
      onClick={e => {
        if (buttonRef.current && buttonRef.current.contains(e.target as Node)) return;
        onEngage?.();
      }}
      onKeyDown={e => (e.key === 'Enter' ? onEngage?.() : undefined)}
      onMouseEnter={() => {}}
      onFocus={() => {}}
      style={{ boxShadow: 'none', border: '1.5px solid #e0e7ef', background: 'linear-gradient(135deg, #fff 60%, #e0e7ef 100%)', transition: 'background 0.5s' }}
    >
      {/* Sacred geometric glyph placeholder */}
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-4 animate-pulse-slow">
        <circle cx="32" cy="32" r="28" stroke="#222" strokeWidth="1.5" opacity="0.13" />
        <path d="M32 8 L56 56 L8 56 Z" stroke="#0ff" strokeWidth="1.5" fill="none" />
        <path d="M32 8 L32 56" stroke="#0ff" strokeWidth="1" opacity="0.5" />
        <path d="M8 56 L56 56" stroke="#0ff" strokeWidth="1" opacity="0.5" />
      </svg>
      <div className="text-center">
        <div className="text-lg md:text-2xl font-mono text-black/90 mb-2 animate-fadein">
          {mode ? `Resonating with: ${mode}` : 'What brings you here?'}
        </div>
        <div className="text-base md:text-lg text-blue-900/80 font-mono animate-fadein-slow">
          Begin with a feeling, word, or question…
        </div>
      </div>
      <button
        ref={buttonRef}
        className="mt-6 text-xs text-blue-700/80 hover:text-black bg-transparent px-4 py-2 rounded-full border border-blue-200/60 hover:border-black transition-all duration-200"
        onClick={e => { e.stopPropagation(); onDismiss?.(); }}
        tabIndex={0}
      >
        Enter in silence
      </button>
    </div>
  );
} 
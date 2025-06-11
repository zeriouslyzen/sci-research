import React, { useRef } from 'react';

export default function ResonancePrompt({ mode, onEngage, onDismiss, visible = true, children }: {
  mode?: string;
  onEngage?: () => void;
  onDismiss?: () => void;
  visible?: boolean;
  children?: React.ReactNode;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  if (!visible) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[1000] pointer-events-auto"
      tabIndex={0}
      onClick={e => {
        if (buttonRef.current && buttonRef.current.contains(e.target as Node)) return;
        onEngage?.();
      }}
      onKeyDown={e => (e.key === 'Enter' ? onEngage?.() : undefined)}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto rounded-xl bg-black/90 shadow-2xl border border-cyan-400/30 p-6 md:p-8 backdrop-blur-md">
        {/* Sacred geometric glyph */}
        <svg width="56" height="56" viewBox="0 0 64 64" fill="none" className="mb-4 animate-pulse-slow">
          <circle cx="32" cy="32" r="28" stroke="#0ff" strokeWidth="1.5" opacity="0.13" />
          <path d="M32 8 L56 56 L8 56 Z" stroke="#0ff" strokeWidth="1.5" fill="none" />
          <path d="M32 8 L32 56" stroke="#0ff" strokeWidth="1" opacity="0.5" />
          <path d="M8 56 L56 56" stroke="#0ff" strokeWidth="1" opacity="0.5" />
        </svg>
        <div className="text-center w-full">
          <div className="text-lg md:text-2xl font-mono text-white mb-2">
            {mode ? `Resonating with: ${mode}` : 'What brings you here?'}
          </div>
          <div className="text-base md:text-lg text-cyan-200/80 font-mono">
            Begin with a feeling, word, or question…
          </div>
          {children}
        </div>
        <button
          ref={buttonRef}
          className="mt-6 text-xs text-cyan-300 hover:text-white bg-transparent px-4 py-2 rounded-full border border-cyan-400/60 hover:border-white transition-all duration-200"
          onClick={e => { e.stopPropagation(); onDismiss?.(); }}
          tabIndex={0}
        >
          Enter in silence
        </button>
      </div>
    </div>
  );
} 
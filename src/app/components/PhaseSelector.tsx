import React from 'react';
import { usePhaseContext, PhaseType } from './PhaseEffectProvider';
import { usePhaseTheme } from './usePhaseTheme';

const PHASES = [
  { key: 'Convergence', glyph: '🜂', label: 'Convergence', tooltip: 'Enter Convergence Phase' },
  { key: 'Expansion', glyph: '🜁', label: 'Expansion', tooltip: 'Enter Expansion Phase' },
  { key: 'Alignment', glyph: '🜃', label: 'Alignment', tooltip: 'Enter Alignment Phase' },
  { key: 'Inception', glyph: '🜄', label: 'Inception', tooltip: 'Enter Inception Phase' },
  // Uncomment to enable Recursion phase:
  // { key: 'Recursion', glyph: '🌀', label: 'Recursion', tooltip: 'Enter Recursion Phase' },
];

interface PhaseSelectorProps {
  showRecursion?: boolean;
  onSelect?: (phase: PhaseType) => void;
}

export default function PhaseSelector({ showRecursion = false, onSelect }: PhaseSelectorProps) {
  const { phase, setPhase } = usePhaseContext();
  const { theme } = usePhaseTheme();
  const phases = showRecursion 
    ? [...PHASES, { key: 'Recursion', glyph: '🌀', label: 'Recursion', tooltip: 'Enter Recursion Phase' }] 
    : PHASES;

  function handleSelect(p: string) {
    const phaseKey = p as PhaseType;
    if (onSelect) {
      onSelect(phaseKey);
    } else {
      setPhase(phaseKey);
    }
  }

  return (
    <nav className="w-full flex flex-row items-center justify-center gap-2 sm:gap-4 py-2 px-1 overflow-x-auto scrollbar-hide">
      {phases.map((p) => (
        <button
          key={p.key}
          type="button"
          title={p.tooltip}
          aria-label={p.tooltip}
          onClick={() => handleSelect(p.key)}
          className={`flex flex-col items-center px-3 py-2 rounded-lg border transition-all duration-200 font-mono text-xs select-none focus:outline-none
            ${phase === p.key
              ? `${theme.borderClass} ${theme.animationClass} bg-white/10 text-cyan-200 scale-105`
              : 'border-gray-700 bg-black/60 text-gray-400 hover:border-cyan-400 hover:text-cyan-200 hover:bg-cyan-900/20'}
          `}
        >
          <span className="text-2xl mb-1" aria-hidden>{p.glyph}</span>
          <span className="text-[11px] font-bold tracking-wide uppercase">{p.label}</span>
        </button>
      ))}
    </nav>
  );
}

// Minimal usage example:
// import PhaseSelector from './PhaseSelector';
// <PhaseSelector /> 
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type PhaseType = 'Convergence' | 'Expansion' | 'Alignment' | 'Inception' | 'Recursion' | 'Neutral' | undefined;

export interface PhaseTheme {
  bg: string;
  border: string;
  glow: string;
  motion: string;
  microcopyTone: string;
}

const PHASE_THEMES: Record<string, PhaseTheme> = {
  Convergence: {
    bg: 'bg-gradient-to-br from-cyan-900 via-cyan-800 to-black',
    border: 'border-cyan-400',
    glow: 'shadow-cyan-400/40',
    motion: 'animate-pulse-slow',
    microcopyTone: 'converge',
  },
  Expansion: {
    bg: 'bg-gradient-to-br from-fuchsia-900 via-fuchsia-700 to-black',
    border: 'border-fuchsia-400',
    glow: 'shadow-fuchsia-400/40',
    motion: 'animate-zoom',
    microcopyTone: 'expand',
  },
  Alignment: {
    bg: 'bg-gradient-to-br from-blue-900 via-blue-800 to-black',
    border: 'border-blue-400',
    glow: 'shadow-blue-400/40',
    motion: 'animate-snap',
    microcopyTone: 'align',
  },
  Inception: {
    bg: 'bg-gradient-to-br from-yellow-900 via-yellow-700 to-black',
    border: 'border-yellow-400',
    glow: 'shadow-yellow-400/40',
    motion: 'animate-bounce-slow',
    microcopyTone: 'incept',
  },
  Recursion: {
    bg: 'bg-gradient-to-br from-emerald-900 via-emerald-700 to-black',
    border: 'border-emerald-400',
    glow: 'shadow-emerald-400/40',
    motion: 'animate-spin-slow',
    microcopyTone: 'recurse',
  },
  Neutral: {
    bg: 'bg-black',
    border: 'border-gray-700',
    glow: 'shadow-gray-700/40',
    motion: '',
    microcopyTone: 'neutral',
  },
};

export function getPhaseTheme(phase: PhaseType): PhaseTheme {
  return PHASE_THEMES[phase || 'Neutral'] || PHASE_THEMES['Neutral'];
}

const PhaseContext = createContext<{ phase: PhaseType; setPhase: (p: PhaseType) => void }>({
  phase: 'Neutral',
  setPhase: () => {},
});

export function PhaseEffectProvider({ children, initialPhase }: { children: ReactNode; initialPhase?: PhaseType }) {
  const [phase, setPhase] = useState<PhaseType>(initialPhase || 'Neutral');
  return (
    <PhaseContext.Provider value={{ phase, setPhase }}>
      {children}
    </PhaseContext.Provider>
  );
}

export function usePhaseContext() {
  return useContext(PhaseContext);
} 
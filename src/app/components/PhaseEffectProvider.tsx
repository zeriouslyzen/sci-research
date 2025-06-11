import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PHASE_THEMES } from './phaseThemeConfig';
import { PhaseLogProvider, usePhaseLog } from '../context/PhaseLogContext';

export type PhaseType = 'Convergence' | 'Expansion' | 'Alignment' | 'Inception' | 'Recursion' | 'Neutral' | undefined;

export interface PhaseTheme {
  bgClass: string;
  borderClass: string;
  textClass: string;
  glyph: string;
  motionClass: string;
  animationClass: string;
}

export function getPhaseTheme(phase: PhaseType): PhaseTheme {
  return PHASE_THEMES[phase || 'Neutral'] || PHASE_THEMES['Neutral'];
}

const PhaseContext = createContext<{ phase: PhaseType; setPhase: (p: PhaseType) => void }>({
  phase: 'Neutral',
  setPhase: () => {},
});

function PhaseEffectInnerProvider({ children, initialPhase }: { children: ReactNode; initialPhase?: PhaseType }) {
  const [phase, setPhaseState] = useState<PhaseType>(initialPhase || 'Neutral');
  const { logPhaseChange } = usePhaseLog();

  function setPhase(p: PhaseType) {
    setPhaseState(p);
    logPhaseChange(p as string);
  }

  return (
    <PhaseContext.Provider value={{ phase, setPhase }}>
      {children}
    </PhaseContext.Provider>
  );
}

export function PhaseEffectProvider({ children, initialPhase }: { children: ReactNode; initialPhase?: PhaseType }) {
  return (
    <PhaseLogProvider>
      <PhaseEffectInnerProvider initialPhase={initialPhase}>{children}</PhaseEffectInnerProvider>
    </PhaseLogProvider>
  );
}

export function usePhaseContext() {
  return useContext(PhaseContext);
} 
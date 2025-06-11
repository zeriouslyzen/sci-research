import React from 'react';
import { usePhaseTheme } from './usePhaseTheme';

const POSITION_CLASSES: Record<string, string> = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'static': '',
};

interface PhaseBadgeProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'static';
  positionClass?: string;
  showLabel?: boolean;
}

const PHASE_LABELS: Record<string, string> = {
  Convergence: 'Convergence',
  Expansion: 'Expansion',
  Alignment: 'Alignment',
  Inception: 'Inception',
  Recursion: 'Recursion',
  Neutral: 'Neutral',
};

export default function PhaseBadge({ position = 'top-right', positionClass, showLabel = false }: PhaseBadgeProps) {
  const { phase, theme } = usePhaseTheme();
  if (!theme.glyph) return null;
  const posClass = positionClass || POSITION_CLASSES[position] || POSITION_CLASSES['top-right'];
  const label = PHASE_LABELS[phase as string] || '';

  return (
    <div
      className={`${position === 'static' ? '' : 'fixed'} z-50 ${posClass} flex items-center space-x-2 select-none pointer-events-auto animate-fadein`}
      style={{ minWidth: showLabel ? 64 : 40 }}
    >
      <div
        className={`rounded-full shadow-lg bg-black/80 flex items-center justify-center transition-all duration-500 w-7 h-7 ${theme.animationClass}`}
        title={`You are in ${label} phase`}
        aria-label={`You are in ${label} phase`}
      >
        <span className={`text-xl ${theme.textClass}`}>{theme.glyph}</span>
      </div>
      {showLabel && (
        <span className={`ml-1 font-mono text-xs px-2 py-1 rounded bg-black/70 ${theme.textClass} transition-all duration-500`}>{label}</span>
      )}
    </div>
  );
}

// Usage example:
// import PhaseBadge from './PhaseBadge';
// <PhaseBadge /> 
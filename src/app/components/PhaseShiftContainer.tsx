import React from 'react';
import { usePhaseTheme } from './usePhaseTheme';

export default function PhaseShiftContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { theme } = usePhaseTheme();
  return (
    <div
      className={`transition-all duration-500 ${theme.bg} ${theme.border} ${theme.glow} ${theme.motion} ${className}`.trim()}
      style={{ borderWidth: '1.5px', borderStyle: 'solid' }}
    >
      {children}
    </div>
  );
} 
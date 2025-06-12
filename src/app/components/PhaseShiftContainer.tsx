'use client';

import React from 'react';
import { usePhaseTheme } from './usePhaseTheme';

export default function PhaseShiftContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { theme } = usePhaseTheme();
  return (
    <div
      className={`relative transition-all duration-500 ${theme.bgClass} ${theme.borderClass} ${theme.textClass} ${theme.motionClass} ${className}`.trim()}
      style={{ borderWidth: '1.5px', borderStyle: 'solid' }}
    >
      {children}
    </div>
  );
} 
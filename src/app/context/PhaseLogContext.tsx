import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface PhaseLogEntry {
  phase: string;
  timestamp: Date;
  notes?: string;
}

interface PhaseLogContextType {
  logs: PhaseLogEntry[];
  logPhaseChange: (phase: string, notes?: string) => void;
  addNote: (idx: number, notes: string) => void;
}

const PhaseLogContext = createContext<PhaseLogContextType | undefined>(undefined);

export function PhaseLogProvider({ children }: { children: ReactNode }) {
  const [logs, setLogs] = useState<PhaseLogEntry[]>([]);

  function logPhaseChange(phase: string, notes?: string) {
    setLogs(prev => [
      { phase, timestamp: new Date(), notes },
      ...prev,
    ]);
  }

  function addNote(idx: number, notes: string) {
    setLogs(prev => prev.map((entry, i) => i === idx ? { ...entry, notes } : entry));
  }

  return (
    <PhaseLogContext.Provider value={{ logs, logPhaseChange, addNote }}>
      {children}
    </PhaseLogContext.Provider>
  );
}

export function usePhaseLog() {
  const ctx = useContext(PhaseLogContext);
  if (!ctx) throw new Error('usePhaseLog must be used within a PhaseLogProvider');
  return ctx;
} 
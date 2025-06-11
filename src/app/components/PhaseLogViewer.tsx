import React from 'react';
import { usePhaseLog } from '../context/PhaseLogContext';
import { getPhaseTheme, PhaseType } from './PhaseEffectProvider';

function formatTime(date: Date | string) {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
}

export default function PhaseLogViewer() {
  const { logs, addNote } = usePhaseLog();

  return (
    <div className="max-h-[300px] overflow-y-auto rounded-lg border border-cyan-900/30 bg-black/60 p-3 space-y-3 shadow-inner">
      {logs.length === 0 && (
        <div className="text-gray-400 text-sm text-center py-8">No phase changes yet.</div>
      )}
      {logs.map((entry, idx) => {
        const theme = getPhaseTheme(entry.phase as PhaseType);
        return (
          <div
            key={idx}
            className={`flex items-start gap-3 rounded-lg border border-cyan-800/20 bg-black/70 p-2 transition-all duration-200 hover:shadow-cyan-400/10 hover:border-cyan-400/40 group`}
          >
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-2xl ${theme.textClass} bg-black/80 border ${theme.borderClass} shadow-md`}>
              {theme.glyph}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className={`font-bold text-sm ${theme.textClass}`}>{entry.phase}</span>
                <span className="text-xs text-gray-400 ml-2 group-hover:text-cyan-200 transition-colors duration-200">{formatTime(entry.timestamp)}</span>
              </div>
              <textarea
                className="w-full mt-1 bg-black/60 border border-cyan-900/30 rounded px-2 py-1 text-xs text-cyan-100 font-mono focus:outline-none focus:border-cyan-400 transition resize-none"
                rows={2}
                placeholder="Add notes..."
                value={entry.notes || ''}
                onChange={e => addNote(idx, e.target.value)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Usage example:
// import PhaseLogViewer from './PhaseLogViewer';
// <PhaseLogViewer /> 
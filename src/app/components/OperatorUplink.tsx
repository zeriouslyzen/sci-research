import React, { useState } from 'react';

export default function OperatorUplink({ open, onClose, onSeed }: {
  open: boolean;
  onClose?: () => void;
  onSeed?: (seed: string) => void;
}) {
  const [intent, setIntent] = useState('');
  const [seed, setSeed] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!intent.trim()) return;
    // Generate a symbolic mission seed (placeholder logic)
    const generated = `Mission Seed: “${intent}” — Begin with resonance.`;
    setSeed(generated);
    onSeed?.(generated);
  };
  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-blue-950 to-black/90 backdrop-blur-sm animate-fadein">
      <div className="bg-black/90 rounded-2xl shadow-2xl p-8 max-w-md w-full border border-blue-900/40 relative">
        <button className="absolute top-4 right-4 text-blue-200/80 hover:text-white text-xs px-3 py-1 rounded-full border border-blue-900/40 hover:border-white transition-all" onClick={onClose}>Enter in silence</button>
        <h2 className="text-xl font-bold text-white mb-4 text-center font-mono">Operator Uplink</h2>
        {!seed ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={intent}
              onChange={e => setIntent(e.target.value)}
              placeholder="State your intent, feeling, or question…"
              className="bg-black/70 border border-blue-900/40 rounded px-4 py-2 text-white font-mono focus:outline-none focus:border-cyan-400 transition"
              autoFocus
            />
            <button type="submit" className="bg-cyan-500 text-black font-semibold rounded-full px-4 py-2 mt-2 hover:bg-cyan-400 transition">Transmit</button>
          </form>
        ) : (
          <div className="text-center text-blue-200/90 font-mono text-lg animate-fadein-slow mt-6">{seed}</div>
        )}
      </div>
    </div>
  ) : null;
} 
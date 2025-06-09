import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sliderSpecs = [
  {
    left: 'Abstract',
    right: 'Practical',
    color: 'from-cyan-400 to-fuchsia-400',
  },
  {
    left: 'Emotional',
    right: 'Strategic',
    color: 'from-fuchsia-400 to-yellow-300',
  },
  {
    left: 'Personal',
    right: 'Mythic',
    color: 'from-teal-400 to-cyan-400',
  },
  {
    left: 'Known',
    right: 'Unknown',
    color: 'from-gray-400 to-fuchsia-400',
  },
];

export default function OnboardingResonance({ onEnter }: { onEnter?: (state: number[]) => void }) {
  const [resonanceState, setResonanceState] = useState([0.5, 0.5, 0.5, 0.5]);

  function handleSlider(idx: number, value: number) {
    setResonanceState((prev) => prev.map((v, i) => (i === idx ? value : v)));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full max-w-xl mx-auto flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="w-full flex flex-col gap-10 mb-12">
        {sliderSpecs.map((spec, idx) => (
          <div key={idx} className="w-full flex flex-col gap-2">
            <div className="flex justify-between text-xs font-mono text-gray-400 mb-1 select-none">
              <span>{spec.left}</span>
              <span>{spec.right}</span>
            </div>
            <div className="relative w-full h-8 flex items-center">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={resonanceState[idx]}
                onChange={e => handleSlider(idx, parseFloat(e.target.value))}
                className={`w-full h-2 bg-gradient-to-r ${spec.color} rounded-full appearance-none focus:outline-none transition-all duration-300`}
                style={{ accentColor: '#4FD1C5' }}
              />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 left-0 h-6 w-6 rounded-full bg-white/80 shadow-lg border border-cyan-300 pointer-events-none"
                style={{ x: `calc(${resonanceState[idx] * 100}% - 12px)` }}
                layoutId={`slider-thumb-${idx}`}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.04, background: 'linear-gradient(90deg, #0ff, #f0f, #ffe600)' }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 px-8 py-3 rounded-full bg-black/80 border-2 border-cyan-400 text-white font-mono text-lg tracking-widest shadow-xl hover:border-fuchsia-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
        onClick={() => onEnter?.(resonanceState)}
      >
        Enter the Field
      </motion.button>
    </motion.div>
  );
} 
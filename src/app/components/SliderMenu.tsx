'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SliderMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SliderMenu({ isOpen, onToggle }: SliderMenuProps) {
  return (
    <div className="fixed left-0 top-0 h-screen z-50">
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed left-4 top-4 z-50 bg-black/80 p-2 rounded-lg hover:bg-black/90 transition-colors"
      >
        <div className="flex flex-col items-start">
          <span className="text-white font-extrabold text-sm tracking-widest font-[Share Tech Mono,monospace] animate-glow leading-tight">SCI</span>
          <span className="text-white text-[8px] font-[Share Tech Mono,monospace] tracking-widest animate-glow leading-tight">Research</span>
        </div>
      </button>

      {/* Slider Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-screen w-64 bg-black/95 backdrop-blur-sm border-r border-white/10 p-4"
          >
            <nav className="mt-16">
              <ul className="space-y-1 font-mono text-xs">
                <li className="pt-2"><span className="text-[10px] text-gray-500">QUEST</span></li>
                <li><button className="w-full text-left py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link flex items-center gap-2">
                  <span className="text-yellow-400">∑</span> New Quest
                </button></li>
                <li><button className="w-full text-left py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link flex items-center gap-2">
                  <span className="text-green-400">∎</span> Completed
                </button></li>
                <li><button className="w-full text-left py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link flex items-center gap-2">
                  <span className="text-cyan-400">⌖</span> Codex
                </button></li>
                
                <li className="pt-4"><span className="text-[10px] text-gray-500">MODELS</span></li>
                <li><button className="w-full text-left py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link flex items-center gap-2">
                  <span className="text-purple-400">λ</span> Katana
                </button></li>
                <li><button className="w-full text-left py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link flex items-center gap-2">
                  <span className="text-blue-400">Ψ</span> Myth0s
                </button></li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
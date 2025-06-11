'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SidebarOpenButton({ visible, onClick }: { visible: boolean, onClick: () => void }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          onClick={onClick}
          className="fixed top-16 left-4 z-[9999] p-2 rounded-full shadow-lg hover:bg-white/10 transition-colors animate-pulse"
          aria-label="Open sidebar"
          style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span className="text-white text-xl font-mono" style={{ fontWeight: 900 }}>{'</>'}</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
} 
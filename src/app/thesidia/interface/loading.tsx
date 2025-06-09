'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#11131a] to-black">
        <motion.div
          initial={{ rotate: 0, scale: 0.8, opacity: 0.7 }}
          animate={{ rotate: 360, scale: 1, opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          className="mb-8"
        >
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="40" stroke="#fff" strokeWidth="2" opacity="0.15" />
            <polygon points="48,16 80,80 16,80" stroke="#fff" strokeWidth="3" fill="none" className="animate-pulse" />
            <circle cx="48" cy="48" r="8" fill="#fff" opacity="0.8" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <span className="text-white text-xl font-mono tracking-widest drop-shadow-lg animate-glow">Initializing Thesidia...</span>
        </motion.div>
      </div>
    );
  }
  // After 3 seconds, render nothing (let Next.js show the loaded page)
  return null;
} 
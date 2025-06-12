'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Language() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-12">
          <h1 className="text-4xl font-mono font-bold mb-4">Language</h1>
          <p className="text-lg font-mono text-gray-400 mb-2">
            Advancing natural language understanding, translation, and communication technologies for global collaboration and knowledge sharing.
          </p>
        </div>
        <div className="mb-8 border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Use Cases</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>Real-time multilingual translation for international research teams.</li>
            <li>Automated document summarization and semantic search.</li>
            <li>Accessible communication tools for diverse populations.</li>
          </ul>
        </div>
        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Effects</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>Enhanced global collaboration and knowledge transfer.</li>
            <li>Reduced language barriers in science and education.</li>
            <li>Greater inclusivity and accessibility in digital communication.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 
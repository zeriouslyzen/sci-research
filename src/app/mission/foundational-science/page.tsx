'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function FoundationalScience() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-12">
          <h1 className="text-4xl font-mono font-bold mb-4">Foundational Science</h1>
          <p className="text-lg font-mono text-gray-400 mb-2">
            Advancing core scientific research in mathematics, physics, and computation to enable breakthroughs across disciplines.
          </p>
        </div>
        <div className="mb-8 border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Use Cases</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>Development of new mathematical frameworks for AI and data science.</li>
            <li>Simulation of complex physical systems for engineering and research.</li>
            <li>Algorithmic advances in computational theory and practice.</li>
          </ul>
        </div>
        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Effects</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>Accelerated scientific discovery and innovation.</li>
            <li>Cross-disciplinary breakthroughs and applications.</li>
            <li>Improved theoretical foundations for emerging technologies.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 
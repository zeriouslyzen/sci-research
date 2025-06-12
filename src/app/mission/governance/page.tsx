'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Governance() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-12">
          <h1 className="text-4xl font-mono font-bold mb-4">Governance</h1>
          <p className="text-lg font-mono text-gray-400 mb-2">
            Researching transparent, adaptive, and ethical governance systems for resilient institutions and equitable societies.
          </p>
        </div>
        <div className="mb-8 border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Use Cases</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>AI-driven policy analysis and decision support.</li>
            <li>Transparent voting and consensus mechanisms.</li>
            <li>Automated compliance and regulatory monitoring.</li>
          </ul>
        </div>
        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Effects</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>Improved institutional trust and accountability.</li>
            <li>Faster, more adaptive policy responses.</li>
            <li>Greater equity and transparency in governance.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 
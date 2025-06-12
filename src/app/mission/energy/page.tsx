'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Energy() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-12">
          <h1 className="text-4xl font-mono font-bold mb-4">Energy</h1>
          <p className="text-lg font-mono text-gray-400 mb-2">
            Research and innovation in sustainable energy systems, grid optimization, and advanced energy storage for a resilient future.
          </p>
        </div>
        <div className="mb-8 border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Use Cases</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>Smart grid management for real-time energy distribution and efficiency.</li>
            <li>Integration of renewable energy sources into national grids.</li>
            <li>Advanced battery storage solutions for off-grid and emergency scenarios.</li>
          </ul>
        </div>
        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Effects</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>Reduced carbon emissions and environmental impact.</li>
            <li>Increased energy security and resilience.</li>
            <li>Lower operational costs and improved access to clean energy.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 
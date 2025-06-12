'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function LogisticsAndAgriculture() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-12">
          <h1 className="text-4xl font-mono font-bold mb-4">Logistics & Agriculture</h1>
          <p className="text-lg font-mono text-gray-400 mb-2">
            Innovating supply chain management and sustainable agriculture for food security and efficient resource distribution.
          </p>
        </div>
        <div className="mb-8 border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Use Cases</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>AI-driven crop yield prediction and resource optimization.</li>
            <li>Automated supply chain tracking and logistics planning.</li>
            <li>Precision agriculture for sustainable food production.</li>
          </ul>
        </div>
        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Effects</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>Increased food security and reduced waste.</li>
            <li>Greater efficiency in resource allocation and distribution.</li>
            <li>Enhanced sustainability in agricultural practices.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 
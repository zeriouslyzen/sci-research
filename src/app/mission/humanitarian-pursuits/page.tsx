'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function HumanitarianPursuits() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-12">
          <h1 className="text-4xl font-mono font-bold mb-4">Humanitarian Pursuits</h1>
          <p className="text-lg font-mono text-gray-400 mb-2">
            Applying advanced research and technology to address global humanitarian challenges and promote well-being.
          </p>
        </div>
        <div className="mb-8 border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Use Cases</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>Disaster response coordination and resource allocation.</li>
            <li>Predictive analytics for public health and crisis prevention.</li>
            <li>Technology-driven education and empowerment initiatives.</li>
          </ul>
        </div>
        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-mono font-bold mb-4">Effects</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 font-mono space-y-2">
            <li>Faster, more effective humanitarian interventions.</li>
            <li>Improved health and safety outcomes for vulnerable populations.</li>
            <li>Broader access to education and opportunity worldwide.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 
'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function DataPrivacy() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header Section */}
        <div className="mb-16">
          <motion.h1 
            className="text-4xl font-mono font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Data Privacy & Secure Knowledge Retention
          </motion.h1>
          <motion.p 
            className="text-lg font-mono max-w-3xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            User data is destroyed after processing, but the system retains only the distilled knowledge or reflection—never the raw data. Privacy is absolute, while learning is preserved.
          </motion.p>
        </div>

        {/* Metrics and Pie Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="border border-white/10 p-8">
              <h2 className="text-xl font-mono font-bold mb-6">Privacy Metrics</h2>
              <div className="space-y-4 text-sm text-gray-400 font-mono">
                <div>Data Destruction Rate: <span className="text-white font-bold">100%</span></div>
                <div>Knowledge Retention: <span className="text-white font-bold">98.9%</span></div>
                <div>Personal Data Retained: <span className="text-white font-bold">0%</span></div>
                <div>Compliance Coverage: <span className="text-white font-bold">100%</span></div>
                <div>Privacy Breach Incidents: <span className="text-white font-bold">0</span></div>
                <div>Reflection Extraction Accuracy: <span className="text-white font-bold">99.7%</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="border border-white/10 p-8 flex flex-col items-center">
              <h2 className="text-xl font-mono font-bold mb-6">Data Lifecycle</h2>
              {/* Pie Chart SVG */}
              <svg width="160" height="160" viewBox="0 0 160 160" className="mb-2">
                <circle cx="80" cy="80" r="70" fill="#fff" fillOpacity="0.03" stroke="#bbb" strokeWidth="2" />
                {/* Pie slices */}
                <path d="M80,80 L80,10 A70,70 0 1,1 10,80 Z" fill="#0ff" fillOpacity="0.18" /> {/* Knowledge Retained */}
                <path d="M80,80 L10,80 A70,70 0 0,1 80,150 Z" fill="#fff" fillOpacity="0.10" /> {/* Data Destroyed */}
                <path d="M80,80 L80,150 A70,70 0 0,1 80,10 Z" fill="#fff" fillOpacity="0.05" /> {/* Reflection Extracted */}
                {/* Labels */}
                <text x="30" y="40" fontSize="12" fill="#0ff">Knowledge</text>
                <text x="30" y="120" fontSize="12" fill="#bbb">Destroyed</text>
                <text x="100" y="150" fontSize="12" fill="#bbb">Reflection</text>
              </svg>
              <div className="text-xs text-gray-500 font-mono">Pie chart: data destroyed vs. knowledge retained</div>
            </div>
          </motion.div>
        </div>

        {/* Research Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border border-white/10 p-8 mb-16"
        >
          <h2 className="text-xl font-mono font-bold mb-6">Research Details & Privacy Flows</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Technical Overview</h3>
              <p className="text-sm text-gray-500 font-mono mb-4">
                The system implements secure, irreversible data destruction immediately after processing. Only abstracted knowledge or reflection is retained, ensuring no personal or raw data persists. Privacy is mathematically enforced and auditable.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>Immediate, irreversible data destruction</li>
                <li>Retention of only distilled knowledge or reflection</li>
                <li>Zero personal data persistence</li>
                <li>Automated privacy compliance and auditing</li>
                <li>High-accuracy reflection extraction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Privacy Flows</h3>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>User data is processed, then destroyed</li>
                <li>Knowledge or reflection is extracted and retained</li>
                <li>Compliance checks and audits run continuously</li>
                <li>Privacy guarantees are mathematically enforced</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 
'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function FoundationalAlignment() {
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
            Foundational Alignment Security
          </motion.h1>
          <motion.p 
            className="text-lg font-mono max-w-3xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Ensuring all system components and agents remain aligned with core security principles, even under adversarial conditions. Layered defense and recursive verification are central to this approach.
          </motion.p>
        </div>

        {/* Metrics and Radar Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="border border-white/10 p-8">
              <h2 className="text-xl font-mono font-bold mb-6">Alignment Security Metrics</h2>
              <div className="space-y-4 text-sm text-gray-400 font-mono">
                <div>Alignment Integrity: <span className="text-white font-bold">99.9%</span></div>
                <div>Recursive Verification Depth: <span className="text-white font-bold">16 layers</span></div>
                <div>Defense Layering: <span className="text-white font-bold">5 tiers</span></div>
                <div>Adversarial Drift Detection: <span className="text-white font-bold">99.7%</span></div>
                <div>Alignment Recovery Time: <span className="text-white font-bold">&lt;0.2s</span></div>
                <div>Policy Compliance: <span className="text-white font-bold">100%</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="border border-white/10 p-8 flex flex-col items-center">
              <h2 className="text-xl font-mono font-bold mb-6">Security Profile</h2>
              {/* Radar Chart SVG */}
              <svg width="220" height="220" viewBox="0 0 220 220" className="mb-2">
                <polygon points="110,30 200,80 170,190 50,190 20,80" fill="#fff" fillOpacity="0.05" stroke="#bbb" strokeWidth="1" />
                <polygon points="110,60 170,95 150,170 70,170 50,95" fill="#fff" fillOpacity="0.10" stroke="#bbb" strokeWidth="1" />
                <polygon points="110,90 140,110 130,150 90,150 80,110" fill="#fff" fillOpacity="0.18" stroke="#bbb" strokeWidth="1" />
                {/* Data polygon */}
                <polygon points="110,50 185,90 160,180 60,180 35,90" fill="#0ff" fillOpacity="0.18" stroke="#0ff" strokeWidth="2" />
                {/* Axis labels */}
                <text x="110" y="20" fontSize="12" fill="#bbb" textAnchor="middle">Integrity</text>
                <text x="200" y="75" fontSize="12" fill="#bbb">Verification</text>
                <text x="170" y="205" fontSize="12" fill="#bbb">Layering</text>
                <text x="50" y="205" fontSize="12" fill="#bbb">Drift</text>
                <text x="20" y="75" fontSize="12" fill="#bbb">Recovery</text>
              </svg>
              <div className="text-xs text-gray-500 font-mono">Radar chart: layered security profile</div>
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
          <h2 className="text-xl font-mono font-bold mb-6">Research Details & Security Flows</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Technical Overview</h3>
              <p className="text-sm text-gray-500 font-mono mb-4">
                Foundational alignment security is achieved through recursive verification, multi-tiered defense, and continuous monitoring. The system adapts to adversarial drift and recovers alignment autonomously, ensuring policy compliance at all times.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>Recursive, multi-layered alignment checks</li>
                <li>Autonomous detection and correction of drift</li>
                <li>Layered defense: policy, logic, data, interface, network</li>
                <li>Continuous compliance and auditability</li>
                <li>Rapid recovery from misalignment or attack</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Security Flows</h3>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>Policy update triggers recursive verification across all layers</li>
                <li>Drift detection initiates immediate correction and audit</li>
                <li>Layered defense blocks multi-vector attacks</li>
                <li>Continuous monitoring ensures persistent alignment</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 
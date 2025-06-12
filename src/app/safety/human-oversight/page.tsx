'use client';
import React from 'react';
import { motion } from 'framer-motion';

const comparisonData = [
  { model: 'SCI Model', oversight: 'Continuous', countermeasures: 'Active + Counter-Attack', transparency: 'Full', response: 'Real-time', notes: 'Human-in-the-loop, adversarial defense, autonomous countermeasures' },
  { model: 'Standard LLM', oversight: 'Periodic', countermeasures: 'Passive', transparency: 'Partial', response: 'Delayed', notes: 'Manual review, limited adversarial defense' },
  { model: 'MoE', oversight: 'Expert-based', countermeasures: 'Passive', transparency: 'Partial', response: 'Batch', notes: 'Expert routing, no active defense' },
  { model: 'VLM', oversight: 'Limited', countermeasures: 'Passive', transparency: 'Low', response: 'Delayed', notes: 'Vision-text only, no counter-attack' },
];

export default function HumanOversight() {
  return (
    <div className="min-h-screen bg-black text-white p-3 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto w-full"
      >
        {/* Header Section */}
        <div className="mb-16">
          <motion.h1 
            className="text-4xl font-mono font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Human Oversight & Security
          </motion.h1>
          <motion.p 
            className="text-lg font-mono max-w-3xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Continuous, real-time human oversight and advanced adversarial defense mechanisms ensure the SCI Model&apos;s security is unmatched, including autonomous counter-attack capabilities.
          </motion.p>
        </div>

        {/* Metrics and Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-16 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="border border-white/10 p-4 sm:p-8 w-full">
              <h2 className="text-xl font-mono font-bold mb-6">Security Metrics</h2>
              <div className="space-y-4 text-sm text-gray-400 font-mono">
                <div>Oversight Coverage: <span className="text-white font-bold">100%</span></div>
                <div>Adversarial Detection Rate: <span className="text-white font-bold">99.8%</span></div>
                <div>Counter-Attack Success: <span className="text-white font-bold">97.2%</span></div>
                <div>Incident Response Time: <span className="text-white font-bold">&lt;0.1s</span></div>
                <div>Transparency Index: <span className="text-white font-bold">1.00</span></div>
                <div>Human-in-the-Loop: <span className="text-white font-bold">Enabled</span></div>
                <div>Audit Trail Completeness: <span className="text-white font-bold">100%</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="border border-white/10 p-4 sm:p-8 flex flex-col items-center w-full overflow-x-auto">
              <h2 className="text-xl font-mono font-bold mb-6">Security Performance</h2>
              {/* Simple SVG Bar Chart */}
              <svg width="100%" height="120" viewBox="0 0 260 120" className="mb-2 w-full max-w-xs sm:max-w-sm md:max-w-md h-auto">
                <rect x="20" y="20" width="30" height="80" fill="#fff" fillOpacity="0.8" />
                <rect x="70" y="30" width="30" height="70" fill="#fff" fillOpacity="0.6" />
                <rect x="120" y="40" width="30" height="60" fill="#fff" fillOpacity="0.5" />
                <rect x="170" y="60" width="30" height="40" fill="#fff" fillOpacity="0.4" />
                <rect x="220" y="90" width="30" height="10" fill="#fff" fillOpacity="0.3" />
                <text x="20" y="115" fontSize="10" fill="#bbb">Oversight</text>
                <text x="70" y="115" fontSize="10" fill="#bbb">Detect</text>
                <text x="120" y="115" fontSize="10" fill="#bbb">Counter</text>
                <text x="170" y="115" fontSize="10" fill="#bbb">Response</text>
                <text x="220" y="115" fontSize="10" fill="#bbb">Audit</text>
              </svg>
              <div className="text-xs text-gray-500 font-mono">Bar chart: security metrics (SCI Model vs. standard)</div>
            </div>
          </motion.div>
        </div>

        {/* Research Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border border-white/10 p-4 sm:p-8 mb-16 w-full overflow-x-auto"
        >
          <h2 className="text-xl font-mono font-bold mb-6">Research Details & Use Cases</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Technical Overview</h3>
              <p className="text-sm text-gray-500 font-mono mb-4">
                The SCI Model integrates continuous human oversight with autonomous adversarial defense and counter-attack modules. Real-time monitoring, audit trails, and transparency protocols ensure every action is logged and reviewable. Counter-attack systems can neutralize threats and adapt to new attack vectors autonomously.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>Continuous, real-time human-in-the-loop oversight</li>
                <li>Autonomous adversarial detection and response</li>
                <li>Active counter-attack and threat neutralization</li>
                <li>Comprehensive audit trails and transparency</li>
                <li>Adaptive learning from new attack patterns</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Use Cases</h3>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>Real-time defense against adversarial prompt injection</li>
                <li>Autonomous countermeasures against coordinated attacks</li>
                <li>Continuous compliance monitoring for regulated industries</li>
                <li>Transparent audit trails for legal and ethical review</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="border border-white/10 p-4 sm:p-8 mb-16 w-full overflow-x-auto"
        >
          <h2 className="text-xl font-mono font-bold mb-6">Security Model Comparison</h2>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full w-full text-xs font-mono text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-2 text-left">Model</th>
                  <th className="p-2 text-left">Oversight</th>
                  <th className="p-2 text-left">Countermeasures</th>
                  <th className="p-2 text-left">Transparency</th>
                  <th className="p-2 text-left">Response</th>
                  <th className="p-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.model} className="border-b border-white/5">
                    <td className="p-2 font-bold text-white">{row.model}</td>
                    <td className="p-2">{row.oversight}</td>
                    <td className="p-2">{row.countermeasures}</td>
                    <td className="p-2">{row.transparency}</td>
                    <td className="p-2">{row.response}</td>
                    <td className="p-2">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 
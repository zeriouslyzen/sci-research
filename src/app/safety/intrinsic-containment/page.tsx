'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function IntrinsicContainment() {
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
            Intrinsic Containment & Override
          </motion.h1>
          <motion.p 
            className="text-lg font-mono max-w-3xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Multi-layered containment protocols and override mechanisms ensure that all system actions remain within strict operational boundaries, with instant override in case of anomaly or threat.
          </motion.p>
        </div>

        {/* Metrics and Layered Defense Flow Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="border border-white/10 p-8">
              <h2 className="text-xl font-mono font-bold mb-6">Containment Metrics</h2>
              <div className="space-y-4 text-sm text-gray-400 font-mono">
                <div>Containment Layer Count: <span className="text-white font-bold">7</span></div>
                <div>Override Response Time: <span className="text-white font-bold">&lt;0.03s</span></div>
                <div>Containment Breach Incidents: <span className="text-white font-bold">0</span></div>
                <div>Autonomous Override Success: <span className="text-white font-bold">100%</span></div>
                <div>Manual Override Availability: <span className="text-white font-bold">Always</span></div>
                <div>Containment Audit Coverage: <span className="text-white font-bold">100%</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="border border-white/10 p-8 flex flex-col items-center">
              <h2 className="text-xl font-mono font-bold mb-6">Layered Defense Flow</h2>
              {/* Layered Defense Flow SVG */}
              <svg width="200" height="180" viewBox="0 0 200 180" className="mb-2">
                {/* Layers */}
                <ellipse cx="100" cy="90" rx="90" ry="70" fill="#fff" fillOpacity="0.03" stroke="#bbb" strokeWidth="2" />
                <ellipse cx="100" cy="90" rx="70" ry="55" fill="#fff" fillOpacity="0.07" stroke="#bbb" strokeWidth="1.5" />
                <ellipse cx="100" cy="90" rx="50" ry="38" fill="#fff" fillOpacity="0.12" stroke="#bbb" strokeWidth="1" />
                <ellipse cx="100" cy="90" rx="30" ry="22" fill="#0ff" fillOpacity="0.18" stroke="#0ff" strokeWidth="1.5" />
                {/* Arrows for flow */}
                <polyline points="100,20 100,40" stroke="#0ff" strokeWidth="2" markerEnd="url(#arrow)" />
                <polyline points="100,140 100,160" stroke="#0ff" strokeWidth="2" markerEnd="url(#arrow)" />
                <polyline points="20,90 40,90" stroke="#0ff" strokeWidth="2" markerEnd="url(#arrow)" />
                <polyline points="180,90 160,90" stroke="#0ff" strokeWidth="2" markerEnd="url(#arrow)" />
                {/* Override icon */}
                <circle cx="100" cy="90" r="10" fill="#fff" fillOpacity="0.5" stroke="#0ff" strokeWidth="2" />
                <text x="100" y="95" fontSize="14" fill="#0ff" textAnchor="middle" fontWeight="bold">!</text>
                <defs>
                  <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6" fill="#0ff" />
                  </marker>
                </defs>
                {/* Labels */}
                <text x="100" y="10" fontSize="12" fill="#bbb" textAnchor="middle">Input</text>
                <text x="100" y="175" fontSize="12" fill="#bbb" textAnchor="middle">Output</text>
                <text x="25" y="95" fontSize="12" fill="#bbb">Policy</text>
                <text x="175" y="95" fontSize="12" fill="#bbb" textAnchor="end">Override</text>
              </svg>
              <div className="text-xs text-gray-500 font-mono">Layered defense: containment and override flow</div>
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
          <h2 className="text-xl font-mono font-bold mb-6">Research Details & Containment Flows</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Technical Overview</h3>
              <p className="text-sm text-gray-500 font-mono mb-4">
                Intrinsic containment is achieved through multiple, independent defense layers, each with autonomous and manual override. The system instantly halts or redirects any anomalous or unauthorized action, ensuring operational safety at all times.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>Seven independent containment layers</li>
                <li>Instantaneous override for any anomaly</li>
                <li>Autonomous and manual override mechanisms</li>
                <li>Continuous audit and monitoring of all actions</li>
                <li>Zero breach tolerance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Containment Flows</h3>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>Input passes through all containment layers</li>
                <li>Any anomaly triggers immediate override</li>
                <li>Override can be autonomous or manual</li>
                <li>Output is only released if all checks pass</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 
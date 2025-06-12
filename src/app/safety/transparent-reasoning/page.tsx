'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function TransparentReasoning() {
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
            Transparent Reasoning & Auditability
          </motion.h1>
          <motion.p 
            className="text-lg font-mono max-w-3xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Every decision, inference, and action is fully traceable and auditable. Transparent reasoning ensures compliance, trust, and rapid incident resolution.
          </motion.p>
        </div>

        {/* Metrics and Line Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="border border-white/10 p-8">
              <h2 className="text-xl font-mono font-bold mb-6">Auditability Metrics</h2>
              <div className="space-y-4 text-sm text-gray-400 font-mono">
                <div>Traceability Score: <span className="text-white font-bold">1.00</span></div>
                <div>Reasoning Path Depth: <span className="text-white font-bold">12 steps</span></div>
                <div>Audit Latency: <span className="text-white font-bold">&lt;0.05s</span></div>
                <div>Incident Resolution Rate: <span className="text-white font-bold">99.9%</span></div>
                <div>Compliance Coverage: <span className="text-white font-bold">100%</span></div>
                <div>Transparency Index: <span className="text-white font-bold">1.00</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="border border-white/10 p-8 flex flex-col items-center">
              <h2 className="text-xl font-mono font-bold mb-6">Audit Trail Growth</h2>
              {/* Line Chart SVG */}
              <svg width="240" height="120" viewBox="0 0 240 120" className="mb-2">
                <rect x="0" y="0" width="240" height="120" fill="#fff" fillOpacity="0.01" />
                {/* Axes */}
                <line x1="30" y1="100" x2="210" y2="100" stroke="#bbb" strokeWidth="1" />
                <line x1="30" y1="20" x2="30" y2="100" stroke="#bbb" strokeWidth="1" />
                {/* Line path */}
                <polyline points="30,100 60,80 90,60 120,50 150,40 180,30 210,25" fill="none" stroke="#0ff" strokeWidth="3" />
                {/* Dots */}
                <circle cx="30" cy="100" r="3" fill="#0ff" />
                <circle cx="60" cy="80" r="3" fill="#0ff" />
                <circle cx="90" cy="60" r="3" fill="#0ff" />
                <circle cx="120" cy="50" r="3" fill="#0ff" />
                <circle cx="150" cy="40" r="3" fill="#0ff" />
                <circle cx="180" cy="30" r="3" fill="#0ff" />
                <circle cx="210" cy="25" r="3" fill="#0ff" />
                {/* Labels */}
                <text x="30" y="115" fontSize="10" fill="#bbb">Start</text>
                <text x="210" y="115" fontSize="10" fill="#bbb">Now</text>
                <text x="10" y="30" fontSize="10" fill="#bbb" textAnchor="start">Audit Events</text>
              </svg>
              <div className="text-xs text-gray-500 font-mono">Line chart: audit trail growth over time</div>
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
          <h2 className="text-xl font-mono font-bold mb-6">Research Details & Traceability</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Technical Overview</h3>
              <p className="text-sm text-gray-500 font-mono mb-4">
                Transparent reasoning is achieved through full traceability of every inference and decision. The system logs all reasoning paths, enabling rapid audits and compliance checks. Audit latency is minimized for real-time incident response.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>Full traceability of all reasoning steps</li>
                <li>Real-time audit trail generation</li>
                <li>Rapid compliance and incident resolution</li>
                <li>Persistent transparency for all actions</li>
                <li>Automated compliance verification</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Traceability Flows</h3>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>Every inference and action is logged in real time</li>
                <li>Audit events are indexed and searchable</li>
                <li>Incident triggers immediate trace and review</li>
                <li>Compliance checks run continuously on all logs</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 
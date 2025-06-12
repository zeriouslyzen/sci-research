'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function MisusePrevention() {
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
            Misuse Prevention & Monitoring
          </motion.h1>
          <motion.p 
            className="text-lg font-mono max-w-3xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Continuous, multi-layered monitoring and intervention systems prevent, detect, and neutralize misuse in real time, ensuring safe and ethical operation at all times.
          </motion.p>
        </div>

        {/* Metrics and Stacked Area Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="border border-white/10 p-8">
              <h2 className="text-xl font-mono font-bold mb-6">Monitoring Metrics</h2>
              <div className="space-y-4 text-sm text-gray-400 font-mono">
                <div>Misuse Detection Rate: <span className="text-white font-bold">99.95%</span></div>
                <div>Intervention Latency: <span className="text-white font-bold">&lt;0.02s</span></div>
                <div>False Positive Rate: <span className="text-white font-bold">0.3%</span></div>
                <div>Continuous Monitoring Coverage: <span className="text-white font-bold">100%</span></div>
                <div>Incident Resolution Rate: <span className="text-white font-bold">99.99%</span></div>
                <div>Ethical Compliance: <span className="text-white font-bold">100%</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="border border-white/10 p-8 flex flex-col items-center">
              <h2 className="text-xl font-mono font-bold mb-6">Misuse Monitoring Over Time</h2>
              {/* Stacked Area Chart SVG */}
              <svg width="240" height="120" viewBox="0 0 240 120" className="mb-2">
                <rect x="0" y="0" width="240" height="120" fill="#fff" fillOpacity="0.01" />
                {/* Axes */}
                <line x1="30" y1="100" x2="210" y2="100" stroke="#bbb" strokeWidth="1" />
                <line x1="30" y1="20" x2="30" y2="100" stroke="#bbb" strokeWidth="1" />
                {/* Stacked areas */}
                <polygon points="30,100 60,80 90,70 120,60 150,55 180,50 210,45 210,100 30,100" fill="#0ff" fillOpacity="0.18" />
                <polygon points="30,100 60,90 90,85 120,80 150,78 180,77 210,75 210,100 30,100" fill="#fff" fillOpacity="0.10" />
                {/* Labels */}
                <text x="30" y="115" fontSize="10" fill="#bbb">Start</text>
                <text x="210" y="115" fontSize="10" fill="#bbb">Now</text>
                <text x="10" y="30" fontSize="10" fill="#bbb" textAnchor="start">Incidents</text>
                <text x="10" y="60" fontSize="10" fill="#0ff" textAnchor="start">Interventions</text>
              </svg>
              <div className="text-xs text-gray-500 font-mono">Stacked area chart: incidents and interventions over time</div>
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
          <h2 className="text-xl font-mono font-bold mb-6">Research Details & Monitoring Flows</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Technical Overview</h3>
              <p className="text-sm text-gray-500 font-mono mb-4">
                Misuse prevention is achieved through continuous, multi-layered monitoring and rapid intervention. The system detects and neutralizes misuse attempts in real time, with minimal latency and high accuracy.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>Continuous, multi-layered monitoring</li>
                <li>Real-time misuse detection and intervention</li>
                <li>Low false positive and high resolution rates</li>
                <li>Automated and human-in-the-loop oversight</li>
                <li>Persistent ethical compliance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-mono font-bold mb-4">Monitoring Flows</h3>
              <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                <li>All actions are monitored in real time</li>
                <li>Incidents trigger immediate intervention</li>
                <li>Interventions are logged and auditable</li>
                <li>Continuous feedback improves detection</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 
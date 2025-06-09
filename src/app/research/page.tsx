import React from 'react';

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 section-title">Research Papers</h2>
        <p className="text-gray-400 mb-10">Our theoretical work lays the groundwork for the next generation of intelligent systems. The following papers are currently under review or in preparation.</p>
        <div className="space-y-6">
          <div className="glass-pane p-6 rounded-md flex items-center justify-between">
            <p className="text-lg text-white">Phase-Locked Collapse and the Intrinsic Bridge</p>
            <span className="font-mono text-sm text-gray-500">Forthcoming Q4 2025</span>
          </div>
          <div className="glass-pane p-6 rounded-md flex items-center justify-between">
            <p className="text-lg text-white">NSSE: Encoding Identity Through Recursive Intrinsic Systems</p>
            <span className="font-mono text-sm text-gray-500">Forthcoming Q1 2026</span>
          </div>
          <div className="glass-pane p-6 rounded-md flex items-center justify-between">
            <p className="text-lg text-white">Intrinsic Tunneling and the Resolution of Societal Paradox</p>
            <span className="font-mono text-sm text-gray-500">Forthcoming Q2 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
} 
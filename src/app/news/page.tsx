import React from 'react';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">News & Updates</h2>
        <div className="space-y-12">
          <div className="relative pl-8">
            <div className="absolute top-1 left-0 h-full border-l-2 border-gray-800"></div>
            <div className="absolute top-1 left-[-5px] w-3 h-3 bg-teal-400 rounded-full"></div>
            <p className="text-sm font-plex text-gray-500 mb-1">June 02, 2025</p>
            <h3 className="text-xl font-bold text-white mb-2">SCI Research Enters Strategic Partnership with Aethelred Quantum Labs</h3>
            <p className="text-gray-400">This collaboration will provide SCI with priority access to next-generation quantum computing hardware, accelerating development of the SQT protocol for the Katana reasoning engine.</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute top-1 left-0 h-full border-l-2 border-gray-800"></div>
            <div className="absolute top-1 left-[-5px] w-3 h-3 bg-teal-400 rounded-full"></div>
            <p className="text-sm font-plex text-gray-500 mb-1">May 20, 2025</p>
            <h3 className="text-xl font-bold text-white mb-2">Initial Whitepaper "Phase-Locked Collapse and the Intrinsic Bridge" Submitted for Peer Review</h3>
            <p className="text-gray-400">Our foundational paper detailing the theoretical physics behind our cognitive architectures has been submitted to the Journal of Foundational Physics.</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute top-1 left-[-5px] w-3 h-3 bg-teal-400 rounded-full"></div>
            <p className="text-sm font-plex text-gray-500 mb-1">April 11, 2025</p>
            <h3 className="text-xl font-bold text-white mb-2">Project Thesidia Achieves Stable Axiomatic Cohesion in Simulation</h3>
            <p className="text-gray-400">In a landmark internal test, a simulated instance of the Thesidia OS successfully maintained a stable NSSE core for over 72 hours under heavy cognitive load, demonstrating the viability of our foundational safety model.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
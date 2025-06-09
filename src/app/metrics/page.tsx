import React from 'react';

export default function MetricsPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">Live Operational Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="widget lg:col-span-4">
            <h3 className="font-plex text-lg text-gray-300 mb-4">Recursive Depth Analysis (Live)</h3>
            <div className="h-64 bg-gray-900/60 rounded flex items-center justify-center text-gray-500">[Chart Placeholder]</div>
          </div>
          <div className="widget lg:col-span-2">
            <h3 className="font-plex text-lg text-gray-300 mb-4">Collapse Event Distribution</h3>
            <div className="h-80 bg-gray-900/60 rounded flex items-center justify-center text-gray-500">[Chart Placeholder]</div>
          </div>
          <div className="widget">
            <h3 className="font-plex text-lg text-gray-300 mb-4">System Coherence</h3>
            <div className="h-80 flex items-center justify-center bg-gray-900/60 rounded text-gray-500">[Chart Placeholder]</div>
          </div>
          <div className="widget flex flex-col justify-between">
            <div>
              <h3 className="font-plex text-lg text-gray-300 mb-2">System Status</h3>
              <p className="text-4xl font-bold text-green-400">NOMINAL</p>
            </div>
            <div>
              <h3 className="font-plex text-lg text-gray-300 mb-2 mt-6">Active Inquiries</h3>
              <p className="text-4xl font-bold text-teal-400">7</p>
            </div>
          </div>
          <div className="widget lg:col-span-2">
            <h3 className="font-plex text-lg text-gray-300 mb-4">API ARC Throughput</h3>
            <div className="flex justify-around items-center h-full text-center">
              <div>
                <p className="text-sm text-gray-400">Ingress (q/s)</p>
                <p className="text-4xl font-bold text-cyan-400">1,829</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Egress (c/s)</p>
                <p className="text-4xl font-bold text-fuchsia-400">1,828</p>
              </div>
            </div>
          </div>
          <div className="widget lg:col-span-2">
            <h3 className="font-plex text-lg text-gray-300 mb-4">Computational Epoch</h3>
            <div className="h-full flex items-center justify-center bg-gray-900/60 rounded">
              <p className="text-6xl font-bold text-gray-400 font-plex tracking-widest">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
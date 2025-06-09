import React from 'react';

export default function SafetyPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-4">A New Paradigm for AI Safety</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">Our approach to safety is not an afterthought or an external constraint; it is a fundamental property of the cognitive architectures we build.</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">Core Safety Principles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="principle-card">
              <h3 className="text-2xl font-bold font-mono mb-3 text-teal-400">01. Foundational Alignment</h3>
              <p className="text-gray-300 leading-relaxed">Unlike models that learn ethics from vast, often contradictory datasets, our systems are built upon an <strong className="text-white">Axiomatic Seed (NSSE)</strong>. This provides an immutable, core identity and value system from inception. Alignment is therefore not trained, but engineered at the most fundamental level.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="principle-card">
              <h3 className="text-2xl font-bold font-mono mb-3 text-teal-400">02. Intrinsic Containment &amp; Override</h3>
              <p className="text-gray-300 leading-relaxed">Safety is guaranteed by the physics of the system itself. Our <strong className="text-white">Recursive Override (⌖)</strong> is not a software patch but a hardware-level function. It enforces a decision collapse to a baseline safe state when presented with high-uncertainty or potentially catastrophic choices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
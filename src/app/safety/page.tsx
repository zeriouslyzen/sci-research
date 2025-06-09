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
            <div className="principle-card">
              <h3 className="text-2xl font-bold font-mono mb-3 text-cyan-400">03. Transparent Reasoning</h3>
              <p className="text-gray-300 leading-relaxed">Every major decision and state transition is logged and can be traced. Our symbolic reasoning chains are designed for interpretability, so that both operators and auditors can understand the &quot;why&quot; behind every output.</p>
            </div>
            <div className="principle-card">
              <h3 className="text-2xl font-bold font-mono mb-3 text-fuchsia-400">05. Data Privacy &amp; Security</h3>
              <p className="text-gray-300 leading-relaxed">User data is never used to train or alter the core system. All interactions are encrypted in transit and at rest. We do not retain prompts or outputs beyond the session unless explicitly requested by the user.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="principle-card">
              <h3 className="text-2xl font-bold font-mono mb-3 text-teal-400">02. Intrinsic Containment &amp; Override</h3>
              <p className="text-gray-300 leading-relaxed">Safety is guaranteed by the physics of the system itself. Our <strong className="text-white">Recursive Override (⌖)</strong> is not a software patch but a hardware-level function. It enforces a decision collapse to a baseline safe state when presented with high-uncertainty or potentially catastrophic choices.</p>
            </div>
            <div className="principle-card">
              <h3 className="text-2xl font-bold font-mono mb-3 text-cyan-400">04. Human Oversight</h3>
              <p className="text-gray-300 leading-relaxed">Operators can review, pause, or intervene in any process. Human-in-the-loop is not a fallback, but a core design feature. We believe in collaborative intelligence, not unchecked autonomy.</p>
            </div>
            <div className="principle-card">
              <h3 className="text-2xl font-bold font-mono mb-3 text-fuchsia-400">06. Misuse Prevention &amp; Monitoring</h3>
              <p className="text-gray-300 leading-relaxed">We actively monitor for anomalous or potentially harmful usage patterns. Automated and human review systems work together to detect and prevent misuse, while respecting user privacy and intent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
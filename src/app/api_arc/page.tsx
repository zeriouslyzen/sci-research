import React from 'react';

export default function ApiArcPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 section-title inline-block">API ARC</h2>
          <p className="text-lg text-teal-400 font-plex">The Aligned Resonance & Coherence Interface</p>
        </div>
        <div className="space-y-12">
          <div className="api-section">
            <h3 className="text-xl font-semibold mb-3">Interface Philosophy</h3>
            <p className="text-gray-400 leading-relaxed">The API ARC is not a conventional REST API. It is a verification layer designed to ensure all external interactions are in fundamental alignment with an agent&#39;s core operational axioms (NSSE). We do not expose direct functions; we expose a verified channel for coherent inquiry. Every query is evaluated for &#39;resonance&#39; before being passed to a reasoning engine like Katana. Decoherent or misaligned queries are collapsed at the boundary.</p>
          </div>
          <div className="api-section">
            <h3 className="text-xl font-semibold mb-3">Access & Authentication</h3>
            <p className="text-gray-400 leading-relaxed mb-4">Access to API ARC is granted exclusively to approved research partners. To request access, please submit a proposal through our <a href="/collaborate" className="text-teal-400 hover:text-teal-300 underline">collaboration portal</a>.</p>
            <p className="text-gray-400 leading-relaxed mb-4">Authentication is managed via a unique <strong className="text-white">Resonance Key</strong>. This key must be included in the header of all requests. It is tied to your organization and the specific axioms of the agent you are cleared to interact with.</p>
            <div className="api-code-block bg-gray-900/70 rounded p-4 text-sm font-mono text-teal-300 mb-2"><span className="text-gray-400">Authorization:</span> <span className="text-white">Bearer</span> <span className="text-teal-400">sci_rk_xxxxxxxxxxxxxxxxxxxxxxxx</span></div>
          </div>
          <div className="api-section">
            <h3 className="text-xl font-semibold mb-3">The Coherence Interface</h3>
            <p className="text-gray-400 leading-relaxed mb-4">To ensure all queries are intention-aligned, the ARC requires a SHA-256 <strong className="text-white">Intent Hash</strong>. This hash is generated from a concatenated string of your query&#39;s core parameters. This process forces the requester to formalize their intent, which the ARC uses as a primary coherence check. Mismatched hashes result in an immediate decoherence event (error).</p>
          </div>
          <div className="api-section">
            <h3 className="text-xl font-semibold mb-3">Making a Query</h3>
            <p className="text-gray-400 leading-relaxed mb-4">All interactions are <code className="bg-gray-800 px-1 rounded text-teal-300">POST</code> requests to a dynamic query endpoint. The example below demonstrates a query to the Katana reasoning engine.</p>
            <p className="font-plex text-sm text-gray-500 mb-2">POST /v1/katana/query</p>
            <pre className="api-code-block bg-gray-900/70 rounded p-4 text-sm font-mono text-teal-300 overflow-x-auto mb-2"><code>{`curl https://arc.sci.research/v1/katana/query \
  -H "Authorization: Bearer {RESONANCE_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "query_text": "Model the entropic decay of a closed economic system under information scarcity.",
    "intent_hash": "a1b2...",
    "parameters": {
      "max_recursion": 16,
      "output_format": "symbolic_graph"
    }
  }'
`}</code></pre>
          </div>
          <div className="api-section">
            <h3 className="text-xl font-semibold mb-3">Receiving a Collapse (Response)</h3>
            <p className="text-gray-400 leading-relaxed mb-4">A successful query results in a &#39;Collapse Event&#39;. The response payload contains the data itself, a coherence signature verifying its alignment with the agent&#39;s core, and metadata about the process.</p>
            <pre className="api-code-block bg-gray-900/70 rounded p-4 text-sm font-mono text-teal-300 overflow-x-auto"><code>{`{
  "collapse_id": "evt_xxxxxxxxxxxx",
  "coherence_signature": "sig_xxxxxxxxxxxx",
  "data": {
    "type": "symbolic_graph",
    "result": /* ... Katana-like answer data ... */
  },
  "metadata": {
    "recursion_depth_achieved": 14,
    "processing_time_ms": 183
  }
}`}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
} 
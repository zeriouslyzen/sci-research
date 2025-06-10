'use client';
import React, { useState } from 'react';

// Example metrics (reuse from AccountPanel)
const METRICS = [
  { key: 'questions', value: 42, label: 'Questions', symbol: 'Δ', description: 'Reflects the power of inquiry — questions posed that led to discoveries or new dialogues.' },
  { key: 'synchronicity', value: 87, label: 'Synchronicity', symbol: 'Ψ', description: 'Subtle tracker for when user actions align with larger symbolic events.' },
  { key: 'missions', value: 12, label: 'Missions', symbol: '⟁', description: 'Tracks unique experiences, quests, or prompts accepted and finished.' },
  { key: 'reflections', value: 23, label: 'Reflections', symbol: '⟁', description: 'Number of self-reflections, entries, or resonance journal interactions.' },
  { key: 'nodes', value: 9, label: 'Nodes', symbol: '⦿', description: 'Tracks how many people, topics, or datasets the user has helped link together.' },
  { key: 'phase', value: 'Convergence', label: 'Phase', symbol: 'Φ', description: 'Displays their current phase (e.g., "Convergence," "Alignment," "Expansion").' },
];

const MISSIONS = [
  { title: 'Decode the Paradox', status: 'active', description: 'Resolve the paradox in the latest research dataset.' },
  { title: 'Dream Journal', status: 'complete', description: 'Log and reflect on 7 consecutive dreams.' },
  { title: 'Connect 3 New Nodes', status: 'active', description: 'Link three new topics or people in the Codex.' },
];

const JOURNAL = [
  { title: 'Resonance Entry', date: '2025-06-10', content: 'Today I noticed a synchronicity between my research and a dream symbol...' },
  { title: 'Dream: The Infinite Library', date: '2025-06-09', content: 'I dreamt of a library where every book was a different version of myself.' },
];

export default function CodexPage() {
  const [activeMetric, setActiveMetric] = useState<string | null>(null);
  const [expandedMission, setExpandedMission] = useState<number | null>(null);
  const [journal, setJournal] = useState(JOURNAL);
  const [newEntry, setNewEntry] = useState('');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-2 py-8">
      {/* Metrics Dashboard */}
      <div className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {METRICS.map(metric => (
          <div
            key={metric.key}
            className={`relative flex flex-col items-center p-3 rounded bg-black/80 border border-gray-800 cursor-pointer transition-colors ${activeMetric === metric.key ? 'text-cyan-400 border-cyan-400' : 'text-white'}`}
            onMouseEnter={() => setActiveMetric(metric.key)}
            onMouseLeave={() => setActiveMetric(null)}
            onTouchStart={() => setActiveMetric(activeMetric === metric.key ? null : metric.key)}
            tabIndex={0}
          >
            <span className="text-2xl font-bold mb-1">{metric.symbol}{metric.value}</span>
            <span className="text-xs text-gray-400">{metric.label}</span>
            {activeMetric === metric.key && (
              <div className="absolute left-1/2 top-full z-20 w-44 -translate-x-1/2 mt-2 px-3 py-2 rounded bg-black text-white text-xs shadow-lg border border-gray-800 whitespace-normal pointer-events-none animate-fadein">
                {metric.description}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* 3D Sphere/Graph Placeholder */}
      <div className="w-full max-w-xl flex flex-col items-center mb-10">
        <div className="w-64 h-64 bg-gradient-to-br from-black via-gray-900 to-black rounded-full flex items-center justify-center border-2 border-gray-800 mb-4 relative">
          {/* Placeholder for 3D sphere/graph. Replace with real 3D/graph component. */}
          <span className="text-5xl text-cyan-400 font-mono animate-pulse">⦿</span>
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-400">Interactive Sphere: Connections</span>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-2 py-1 rounded bg-gray-900 text-xs">Δcaptainjack</span>
          <span className="px-2 py-1 rounded bg-gray-900 text-xs">Ψparadox</span>
          <span className="px-2 py-1 rounded bg-gray-900 text-xs">⦿node-link</span>
        </div>
      </div>
      {/* Missions/Quests */}
      <div className="w-full max-w-2xl mb-10">
        <h2 className="text-lg font-bold mb-3">Missions & Quests</h2>
        <div className="flex flex-col gap-3">
          {MISSIONS.map((mission, i) => (
            <div key={mission.title} className="rounded bg-black/80 border border-gray-800 p-3">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setExpandedMission(expandedMission === i ? null : i)}>
                <span className="font-bold text-white">{mission.title}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${mission.status === 'complete' ? 'bg-cyan-700' : 'bg-gray-700'}`}>{mission.status}</span>
              </div>
              {expandedMission === i && (
                <div className="mt-2 text-sm text-gray-300">{mission.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Research & Journal */}
      <div className="w-full max-w-2xl mb-10">
        <h2 className="text-lg font-bold mb-3">Research & Journal</h2>
        <div className="flex flex-col gap-3 mb-4">
          {journal.map((entry, i) => (
            <div key={i} className="rounded bg-black/80 border border-gray-800 p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-white text-sm">{entry.title}</span>
                <span className="text-xs text-gray-500">{entry.date}</span>
              </div>
              <div className="text-xs text-gray-300 whitespace-pre-line">{entry.content}</div>
            </div>
          ))}
        </div>
        <form onSubmit={e => { e.preventDefault(); if (newEntry.trim()) { setJournal([{ title: 'New Entry', date: new Date().toISOString().slice(0, 10), content: newEntry }, ...journal]); setNewEntry(''); } }} className="flex flex-col gap-2">
          <textarea value={newEntry} onChange={e => setNewEntry(e.target.value)} placeholder="Write a new research note, dream, or reflection..." className="w-full bg-black border border-gray-800 text-white text-xs font-mono rounded p-2 focus:outline-none" rows={2} />
          <button type="submit" className="self-end px-4 py-1 rounded bg-cyan-700 text-white text-xs font-bold hover:bg-cyan-500 transition">Add Entry</button>
        </form>
      </div>
      <style jsx>{`
        .animate-fadein { animation: fadein 0.4s; }
        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
} 
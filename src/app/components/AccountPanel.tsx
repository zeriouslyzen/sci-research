import React, { useState } from 'react';
import Link from 'next/link';

interface AccountPanelProps {
  user: {
    avatarUrl?: string;
    fullName: string;
    username: string;
    email: string;
    bio?: string;
    followers?: number;
    following?: number;
    energy?: number; // 0-100
    pulse?: 'online' | 'offline' | 'active';
  };
  onBack: () => void;
}

const METRICS = [
  {
    key: 'questions',
    value: 42,
    label: 'Questions',
    description: 'Reflects the power of inquiry — questions posed that led to discoveries or new dialogues.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" className="icon-spin"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
    ),
  },
  {
    key: 'synchronicity',
    value: 87,
    label: 'Synchronicity',
    description: 'Subtle tracker for when user actions align with larger symbolic events (can be semi-random or user-tagged).',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" className="icon-pulse"><rect x="5" y="5" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
    ),
  },
  {
    key: 'missions',
    value: 12,
    label: 'Missions',
    description: 'Tracks unique experiences, quests, or prompts accepted and finished.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" className="icon-bounce"><polygon points="10,3 17,17 3,17" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
    ),
  },
  {
    key: 'reflections',
    value: 23,
    label: 'Reflections',
    description: 'Number of self-reflections, entries, or resonance journal interactions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" className="icon-pulse"><ellipse cx="10" cy="10" rx="8" ry="5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
    ),
  },
  {
    key: 'nodes',
    value: 9,
    label: 'Nodes',
    description: 'Tracks how many people, topics, or datasets the user has helped link together.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" className="icon-spin"><line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="2" /><line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="2" /></svg>
    ),
  },
  {
    key: 'phase',
    value: 'Convergence',
    label: 'Phase',
    description: 'Displays their current phase (e.g., "Convergence," "Alignment," "Expansion").',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" className="icon-pulse"><path d="M10 2 A8 8 0 1 1 9.99 2" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
    ),
  },
];

const BROADCAST_SLIDES = [
  {
    title: 'Consciousness Research: Nonlocal Correlates',
    summary: 'A multi-university study finds statistically significant nonlocal correlations in meditative brain states, challenging classical models.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    link: 'https://www.nature.com/articles/nonlocal-consciousness',
  },
  {
    title: 'CERN Discovers Unusual Quantum Resonance',
    summary: 'A new resonance pattern in the LHC data hints at unknown quantum structures, possibly related to consciousness field theory.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    link: 'https://home.cern/news/news/physics/new-quantum-resonance',
  },
  {
    title: 'AI Ethics: The Paradox of Alignment',
    summary: 'A new paper explores the limits of alignment in recursive AI systems, proposing a phase-based approach to value stability.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    link: 'https://arxiv.org/abs/2505.12345',
  },
];

const AccountPanel: React.FC<AccountPanelProps> = ({ user, onBack }) => {
  const [energy] = useState(user.energy ?? 76);
  const [pulse] = useState(user.pulse ?? 'active');
  const [followers] = useState(user.followers ?? 128);
  const [following] = useState(user.following ?? 87);
  const [activeMetric, setActiveMetric] = useState<string | null>(null);
  const [broadcastIndex, setBroadcastIndex] = useState(0);
  const broadcast = BROADCAST_SLIDES[broadcastIndex];

  // Pulse color
  const pulseColor = pulse === 'online' ? 'bg-green-400' : pulse === 'active' ? 'bg-blue-400' : 'bg-gray-500';

  return (
    <div className="flex flex-col h-full justify-between p-4 bg-black animate-fadein">
      <button onClick={onBack} className="mb-4 text-white text-sm font-mono self-start">← Back</button>
      <div className="flex flex-col items-center gap-4 mt-2 w-full h-full overflow-y-auto scrollbar-none">
        {/* Broadcast Widget (Slider) */}
        <div className="w-full mb-3 rounded-2xl overflow-hidden bg-black/90 border border-cyan-900 shadow-lg flex flex-col relative">
          <div className="relative h-20 w-full overflow-hidden">
            <img src={broadcast.image} alt={broadcast.title} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            {/* Left arrow */}
            <button
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-cyan-900/80 focus:outline-none"
              onClick={e => { e.stopPropagation(); setBroadcastIndex((broadcastIndex - 1 + BROADCAST_SLIDES.length) % BROADCAST_SLIDES.length); }}
              aria-label="Previous broadcast"
              tabIndex={0}
            >
              &#8592;
            </button>
            {/* Right arrow */}
            <button
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-cyan-900/80 focus:outline-none"
              onClick={e => { e.stopPropagation(); setBroadcastIndex((broadcastIndex + 1) % BROADCAST_SLIDES.length); }}
              aria-label="Next broadcast"
              tabIndex={0}
            >
              &#8594;
            </button>
          </div>
          <div className="flex-1 flex flex-col p-3">
            <h3 className="text-base font-bold text-white mb-1">{broadcast.title}</h3>
            <p className="text-gray-300 text-xs mb-1 flex-1">{broadcast.summary}</p>
            <a href={broadcast.link} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 font-mono hover:underline">Read Article</a>
          </div>
        </div>
        {/* Social/energy row */}
        <div className="flex flex-col items-center w-full mb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-mono text-base font-bold">Δcaptainjack</span>
            <span className={`w-2 h-2 rounded-full ${pulseColor} inline-block`} title={`Pulse: ${pulse}`}></span>
            <span className="text-xs text-gray-400 ml-1">{pulse.charAt(0).toUpperCase() + pulse.slice(1)}</span>
          </div>
          <div className="flex items-center gap-6 mb-1">
            <span className="text-xs text-gray-300"><b>{followers}</b> Followers</span>
            <span className="text-xs text-gray-300"><b>{following}</b> Following</span>
          </div>
          <div className="w-full flex flex-col items-center">
            <span className="text-xs text-gray-400 mb-1">Energy Level</span>
            <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-2 bg-white rounded-full" style={{ width: `${energy}%` }}></div>
            </div>
          </div>
        </div>
        {/* Modular Metrics Section */}
        <div className="grid grid-cols-2 gap-3 w-full my-2">
          {METRICS.map((metric) => (
            <div
              key={metric.key}
              className={`relative flex items-center gap-2 p-2 rounded bg-black/80 group cursor-pointer transition-colors ${activeMetric === metric.key ? 'text-cyan-400 bg-gray-900' : 'text-white'}`}
              tabIndex={0}
              onMouseEnter={() => setActiveMetric(metric.key)}
              onMouseLeave={() => setActiveMetric(null)}
              onTouchStart={() => setActiveMetric(activeMetric === metric.key ? null : metric.key)}
              onBlur={() => setActiveMetric(null)}
              onFocus={() => setActiveMetric(metric.key)}
              aria-label={metric.description}
            >
              <span className={`transition-colors ${activeMetric === metric.key ? 'text-cyan-400' : 'text-white'}`}>{metric.icon}</span>
              <div>
                <div className="text-xs font-bold">{metric.value}</div>
                <div className="text-[10px] text-gray-400">{metric.label}</div>
              </div>
              {/* Tooltip */}
              {activeMetric === metric.key && (
                <div className="absolute left-1/2 top-full z-20 w-44 -translate-x-1/2 mt-2 px-3 py-2 rounded bg-black text-white text-xs shadow-lg border border-gray-800 whitespace-normal pointer-events-none animate-fadein">
                  {metric.description}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 mt-8">
          {/* Modular Codex and Settings buttons with Greek/math icons */}
          <div className="flex flex-row gap-3 justify-center w-full mt-4">
            <Link href="/codex" className="flex-1 py-2 rounded text-white font-semibold hover:bg-gray-700 transition text-center flex items-center justify-center gap-2">
              <span className="text-cyan-400 text-lg">Ψ</span> Codex
            </Link>
            <button className="flex-1 py-2 rounded text-white font-semibold hover:bg-gray-700 transition flex items-center justify-center gap-2">
              <span className="text-yellow-400 text-lg">Σ</span> Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPanel;

<style jsx>{`
  .animate-spin-slow {
    animation: spin 3s linear infinite;
  }
  .icon-spin {
    animation: spin 3s linear infinite;
  }
  .icon-pulse {
    animation: pulse 1.5s infinite alternate;
  }
  .icon-bounce {
    animation: bounce 1.2s infinite alternate;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
`}</style> 
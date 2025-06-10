import React, { useState } from 'react';

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
  onSignOut: () => void;
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

const AccountPanel: React.FC<AccountPanelProps> = ({ user, onBack, onSignOut }) => {
  const [bio, setBio] = useState(user.bio || '');
  const [energy] = useState(user.energy ?? 76);
  const [pulse] = useState(user.pulse ?? 'active');
  const [followers] = useState(user.followers ?? 128);
  const [following] = useState(user.following ?? 87);
  const [activeMetric, setActiveMetric] = useState<string | null>(null);

  // Placeholder for save action
  const handleSave = () => {
    alert('Profile saved!');
  };

  // Pulse color
  const pulseColor = pulse === 'online' ? 'bg-green-400' : pulse === 'active' ? 'bg-blue-400' : 'bg-gray-500';

  return (
    <div className="flex flex-col h-full justify-between p-4 bg-black animate-fadein">
      <button onClick={onBack} className="mb-4 text-white text-sm font-mono self-start">← Back</button>
      <div className="flex flex-col items-center gap-4 mt-2 w-full">
        {/* Social/energy row */}
        <div className="flex flex-col items-center w-full mb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-mono text-base font-bold">@{user.username}</span>
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
        <textarea
          className="w-full bg-black text-white text-xs font-mono text-center focus:outline-none placeholder:text-gray-400 mt-1 resize-none"
          value={bio}
          onChange={e => setBio(e.target.value)}
          placeholder="Short professional bio"
          rows={2}
          maxLength={120}
        />
        <button onClick={handleSave} className="w-full mt-2 py-1 rounded bg-white text-black font-bold text-sm">Save</button>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <button onClick={onSignOut} className="w-full py-2 rounded bg-gray-800 text-white font-semibold">Sign Out</button>
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
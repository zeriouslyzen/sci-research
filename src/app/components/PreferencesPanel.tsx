import React from 'react';

interface PreferencesPanelProps {
  theme: string;
  setTheme: (theme: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
  onBack: () => void;
}

const PreferencesPanel: React.FC<PreferencesPanelProps> = ({ theme, setTheme, language, setLanguage, onBack }) => (
  <div className="flex flex-col h-full justify-between p-4 bg-black/95 rounded-b-2xl border-l border-white/10 animate-fadein">
    <button onClick={onBack} className="mb-4 text-cyan-400 hover:text-white text-sm font-mono self-start">← Back</button>
    <div className="flex flex-col gap-6">
      <div>
        <label className="block text-white font-bold mb-2">Theme</label>
        <select value={theme} onChange={e => setTheme(e.target.value)} className="w-full bg-black border border-cyan-400 text-cyan-200 rounded p-2">
          <option value="auto">Auto</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div>
        <label className="block text-white font-bold mb-2">Language</label>
        <select value={language} onChange={e => setLanguage(e.target.value)} className="w-full bg-black border border-cyan-400 text-cyan-200 rounded p-2">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          {/* Add more languages as needed */}
        </select>
      </div>
      <div className="text-gray-400 text-xs mt-4">More settings coming soon...</div>
    </div>
  </div>
);

export default PreferencesPanel; 
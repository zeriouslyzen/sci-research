'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PhaseShiftContainer from '../components/PhaseShiftContainer';

interface SettingsSection {
  id: string;
  title: string;
  glyph: string;
  description: string;
  titleGlyph: string;
}

const settingsSections: SettingsSection[] = [
  { 
    id: 'identity', 
    title: 'Identity Matrix', 
    glyph: '⌖',
    titleGlyph: '∴',
    description: 'Configure your operator credentials and phase alignment'
  },
  { 
    id: 'resonance', 
    title: 'Resonance Settings', 
    glyph: '🜂',
    titleGlyph: '⚖',
    description: 'Tune your connection parameters and synchronization'
  },
  { 
    id: 'system', 
    title: 'System Protocol', 
    glyph: '🜁',
    titleGlyph: '∅',
    description: 'Adjust core system parameters and update channels'
  },
  { 
    id: 'data', 
    title: 'Data Nexus', 
    glyph: '🜃',
    titleGlyph: '∇',
    description: 'Manage your data streams and codex synchronization'
  },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('identity');

  return (
    <PhaseShiftContainer>
      <div className="min-h-screen bg-black text-cyan-100 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-2xl font-mono font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-silver-400 to-silver-600 animate-glow">
            System Configuration ⌘
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Navigation Sidebar */}
            <motion.div
              className="md:col-span-1 bg-black/80 backdrop-blur-lg rounded-xl border border-silver-900/5 p-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <nav className="space-y-1">
                {settingsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2
                      ${activeSection === section.id 
                        ? 'bg-silver-900/20 text-silver-400 border border-silver-500/10' 
                        : 'hover:bg-silver-900/10 border border-transparent'
                      }`}
                  >
                    <span className={`text-lg transition-all duration-300 ${
                      activeSection === section.id 
                        ? 'animate-pulse' 
                        : 'hover:opacity-80'
                    } ${
                      section.id === 'identity' ? 'text-yellow-400 animate-spin-slow' :
                      section.id === 'resonance' ? 'text-purple-400 animate-pulse' :
                      section.id === 'system' ? 'text-green-400 animate-bounce' :
                      'text-blue-400 animate-pulse'
                    }`}>{section.glyph}</span>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-mono">{section.title}</span>
                      <span className="text-[10px] text-silver-500/70">{section.description}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Main Content Area */}
            <motion.div
              className="md:col-span-3 bg-black/80 backdrop-blur-lg rounded-xl border border-silver-900/5 p-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {activeSection === 'identity' && (
                <div>
                  <h2 className="text-lg font-mono font-bold mb-6 text-silver-300 flex items-center">
                    <span className="text-yellow-400 animate-pulse text-2xl mr-2">{settingsSections[0].titleGlyph}</span>
                    Identity Matrix
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-mono text-silver-300 mb-2">Operator ID</label>
                      <input
                        type="text"
                        className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent"
                        placeholder="Enter your Operator ID"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-mono text-silver-300 mb-2">Access Code</label>
                      <input
                        type="password"
                        className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent"
                        placeholder="Enter your Access Code"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-mono text-silver-300 mb-2">Phase Alignment</label>
                      <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                        <option value="convergence">Convergence</option>
                        <option value="expansion">Expansion</option>
                        <option value="alignment">Alignment</option>
                        <option value="inception">Inception</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'resonance' && (
                <div>
                  <h2 className="text-lg font-mono font-bold mb-6 text-silver-300 flex items-center">
                    <span className="text-purple-400 animate-pulse text-2xl mr-2">{settingsSections[1].titleGlyph}</span>
                    Resonance Settings
                  </h2>
                  <div className="space-y-6">
                    {/* AI Interaction Settings */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-purple-400 mr-2">⌖</span>
                        AI Interaction
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Response Mode</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="balanced">Balanced</option>
                            <option value="creative">Creative</option>
                            <option value="precise">Precise</option>
                            <option value="concise">Concise</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Context Memory</label>
                            <p className="text-xs text-silver-500 mt-1">Enable persistent conversation context</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500/20"></div>
                          </label>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-mono text-silver-300">Response Length</label>
                            <span className="text-xs text-silver-500">Medium</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="range"
                              min="1"
                              max="5"
                              defaultValue="3"
                              className="w-full h-1 bg-silver-900/20 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-xs text-silver-400 font-mono">3</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Website Performance */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-purple-400 mr-2">⚡</span>
                        Performance Optimization
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Dynamic Loading</label>
                            <p className="text-xs text-silver-500 mt-1">Enable progressive content loading</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500/20"></div>
                          </label>
                        </div>
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Cache Strategy</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="aggressive">Aggressive</option>
                            <option value="balanced">Balanced</option>
                            <option value="minimal">Minimal</option>
                            <option value="custom">Custom</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-black/30 rounded-lg p-3">
                            <div className="text-xs text-silver-500 mb-1">Page Load Time</div>
                            <div className="text-lg font-mono text-silver-300">0.8s</div>
                            <div className="w-full h-1 bg-silver-900/20 rounded-full mt-2">
                              <div className="h-1 bg-purple-400/50 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                          <div className="bg-black/30 rounded-lg p-3">
                            <div className="text-xs text-silver-500 mb-1">Performance Score</div>
                            <div className="text-lg font-mono text-silver-300">92/100</div>
                            <div className="w-full h-1 bg-silver-900/20 rounded-full mt-2">
                              <div className="h-1 bg-purple-400/50 rounded-full" style={{ width: '92%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Advanced Features */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-purple-400 mr-2">∴</span>
                        Advanced Features
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Neural Processing</label>
                            <p className="text-xs text-silver-500 mt-1">Enable advanced AI processing capabilities</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500/20"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Quantum Entanglement</label>
                            <p className="text-xs text-silver-500 mt-1">Enable quantum computing features</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500/20"></div>
                          </label>
                        </div>
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Processing Priority</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="standard">Standard</option>
                            <option value="high">High Priority</option>
                            <option value="quantum">Quantum Priority</option>
                            <option value="custom">Custom Priority</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Future Capabilities */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-purple-400 mr-2">∇</span>
                        Future Capabilities
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Holographic Interface</label>
                            <p className="text-xs text-silver-500 mt-1">Enable 3D holographic display support</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500/20"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Neural Interface</label>
                            <p className="text-xs text-silver-500 mt-1">Enable direct neural connection support</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500/20"></div>
                          </label>
                        </div>
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Interface Mode</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="standard">Standard</option>
                            <option value="holographic">Holographic</option>
                            <option value="neural">Neural</option>
                            <option value="hybrid">Hybrid</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'system' && (
                <div>
                  <h2 className="text-lg font-mono font-bold mb-6 text-silver-300 flex items-center">
                    <span className="text-green-400 animate-pulse text-2xl mr-2">{settingsSections[2].titleGlyph}</span>
                    System Protocol
                  </h2>
                  <div className="space-y-6">
                    {/* Engine Parameters */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-green-400 mr-2">🜁</span>
                        Engine Parameters
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-mono text-silver-300">Quantum Processing Units</label>
                            <span className="text-xs text-silver-500">4/8 Available</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="range"
                              min="1"
                              max="8"
                              defaultValue="4"
                              className="w-full h-1 bg-silver-900/20 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-xs text-silver-400 font-mono">4</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-mono text-silver-300">Memory Allocation</label>
                            <span className="text-xs text-silver-500">16GB/32GB</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="range"
                              min="4"
                              max="32"
                              defaultValue="16"
                              className="w-full h-1 bg-silver-900/20 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-xs text-silver-400 font-mono">16GB</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Settings */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-green-400 mr-2">⚙</span>
                        Performance Settings
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Processing Mode</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="balanced">Balanced</option>
                            <option value="performance">High Performance</option>
                            <option value="efficiency">Power Efficiency</option>
                            <option value="custom">Custom Profile</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Thread Priority</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="normal">Normal</option>
                            <option value="high">High</option>
                            <option value="realtime">Real-time</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Advanced Configuration */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-green-400 mr-2">⌘</span>
                        Advanced Configuration
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Enable Hyperthreading</label>
                            <p className="text-xs text-silver-500 mt-1">Optimize CPU performance for parallel processing</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500/20"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Cache Optimization</label>
                            <p className="text-xs text-silver-500 mt-1">Enable advanced memory caching algorithms</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500/20"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Debug Mode</label>
                            <p className="text-xs text-silver-500 mt-1">Enable detailed system diagnostics</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500/20"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* System Metrics */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-green-400 mr-2">∅</span>
                        System Metrics
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/30 rounded-lg p-3">
                          <div className="text-xs text-silver-500 mb-1">CPU Usage</div>
                          <div className="text-lg font-mono text-silver-300">42%</div>
                          <div className="w-full h-1 bg-silver-900/20 rounded-full mt-2">
                            <div className="h-1 bg-green-400/50 rounded-full" style={{ width: '42%' }}></div>
                          </div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-3">
                          <div className="text-xs text-silver-500 mb-1">Memory Usage</div>
                          <div className="text-lg font-mono text-silver-300">8.2GB</div>
                          <div className="w-full h-1 bg-silver-900/20 rounded-full mt-2">
                            <div className="h-1 bg-green-400/50 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'data' && (
                <div>
                  <h2 className="text-lg font-mono font-bold mb-6 text-silver-300 flex items-center">
                    <span className="text-blue-400 animate-pulse text-2xl mr-2">{settingsSections[3].titleGlyph}</span>
                    Data Nexus
                  </h2>
                  <div className="space-y-6">
                    {/* Storage Management */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-blue-400 mr-2">🜃</span>
                        Storage Management
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-black/30 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-mono text-silver-300">Total Storage</span>
                            <span className="text-xs text-silver-500">1.2TB / 2TB</span>
                          </div>
                          <div className="w-full h-2 bg-silver-900/20 rounded-full">
                            <div className="h-2 bg-blue-400/50 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="text-center">
                              <div className="text-xs text-silver-500">Used</div>
                              <div className="text-sm font-mono text-silver-300">1.2TB</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-silver-500">Free</div>
                              <div className="text-sm font-mono text-silver-300">800GB</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-silver-500">Reserved</div>
                              <div className="text-sm font-mono text-silver-300">200GB</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Synchronization */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-blue-400 mr-2">⚖</span>
                        Data Synchronization
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Auto-Sync</label>
                            <p className="text-xs text-silver-500 mt-1">Automatically synchronize data across nodes</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500/20"></div>
                          </label>
                        </div>
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Sync Frequency</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="realtime">Real-time</option>
                            <option value="5min">Every 5 minutes</option>
                            <option value="15min">Every 15 minutes</option>
                            <option value="30min">Every 30 minutes</option>
                            <option value="custom">Custom Interval</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Data Analytics */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-blue-400 mr-2">∅</span>
                        Data Analytics
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/30 rounded-lg p-3">
                          <div className="text-xs text-silver-500 mb-1">Data Throughput</div>
                          <div className="text-lg font-mono text-silver-300">2.4 GB/s</div>
                          <div className="w-full h-1 bg-silver-900/20 rounded-full mt-2">
                            <div className="h-1 bg-blue-400/50 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-3">
                          <div className="text-xs text-silver-500 mb-1">Cache Hit Rate</div>
                          <div className="text-lg font-mono text-silver-300">98.5%</div>
                          <div className="w-full h-1 bg-silver-900/20 rounded-full mt-2">
                            <div className="h-1 bg-blue-400/50 rounded-full" style={{ width: '98.5%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Advanced Data Features */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-blue-400 mr-2">⚡</span>
                        Advanced Features
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Data Compression</label>
                            <p className="text-xs text-silver-500 mt-1">Enable advanced data compression algorithms</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500/20"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Encryption</label>
                            <p className="text-xs text-silver-500 mt-1">Enable end-to-end data encryption</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500/20"></div>
                          </label>
                        </div>
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Encryption Level</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="aes256">AES-256</option>
                            <option value="aes512">AES-512</option>
                            <option value="quantum">Quantum-Resistant</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Data Recovery */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-blue-400 mr-2">⌘</span>
                        Data Recovery
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Backup Frequency</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="hourly">Hourly</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="custom">Custom Schedule</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Incremental Backups</label>
                            <p className="text-xs text-silver-500 mt-1">Only backup changed data since last backup</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500/20"></div>
                          </label>
                        </div>
                        <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-lg transition-colors duration-200 border border-blue-500/20 font-mono text-sm">
                          Initiate Backup Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'safety' && (
                <div>
                  <h2 className="text-lg font-mono font-bold mb-6 text-silver-300 flex items-center">
                    <span className="text-red-400 animate-pulse text-2xl mr-2">🛡</span>
                    Safety Protocol
                  </h2>
                  <div className="space-y-6">
                    {/* Security Measures */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-red-400 mr-2">⚔</span>
                        Security Measures
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Quantum Encryption</label>
                            <p className="text-xs text-silver-500 mt-1">Enable quantum-resistant encryption protocols</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500/20"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Neural Firewall</label>
                            <p className="text-xs text-silver-500 mt-1">AI-powered threat detection system</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500/20"></div>
                          </label>
                        </div>
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Security Level</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="standard">Standard</option>
                            <option value="enhanced">Enhanced</option>
                            <option value="maximum">Maximum</option>
                            <option value="custom">Custom</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Threat Detection */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-red-400 mr-2">⚡</span>
                        Threat Detection
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-black/30 rounded-lg p-3">
                            <div className="text-xs text-silver-500 mb-1">Active Threats</div>
                            <div className="text-lg font-mono text-silver-300">0</div>
                            <div className="w-full h-1 bg-silver-900/20 rounded-full mt-2">
                              <div className="h-1 bg-red-400/50 rounded-full" style={{ width: '0%' }}></div>
                            </div>
                          </div>
                          <div className="bg-black/30 rounded-lg p-3">
                            <div className="text-xs text-silver-500 mb-1">Threat Level</div>
                            <div className="text-lg font-mono text-silver-300">Low</div>
                            <div className="w-full h-1 bg-silver-900/20 rounded-full mt-2">
                              <div className="h-1 bg-red-400/50 rounded-full" style={{ width: '15%' }}></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Auto-Containment</label>
                            <p className="text-xs text-silver-500 mt-1">Automatically isolate detected threats</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500/20"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Access Control */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-red-400 mr-2">⌘</span>
                        Access Control
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Biometric Authentication</label>
                            <p className="text-xs text-silver-500 mt-1">Enable advanced biometric security</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500/20"></div>
                          </label>
                        </div>
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Access Level</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="restricted">Restricted</option>
                            <option value="standard">Standard</option>
                            <option value="elevated">Elevated</option>
                            <option value="administrator">Administrator</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Session Timeout</label>
                            <p className="text-xs text-silver-500 mt-1">Automatically log out after inactivity</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500/20"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Emergency Protocols */}
                    <div>
                      <h3 className="text-sm font-mono text-silver-300 mb-4 flex items-center">
                        <span className="text-red-400 mr-2">⚠</span>
                        Emergency Protocols
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-sm font-mono text-silver-300">Auto-Lockdown</label>
                            <p className="text-xs text-silver-500 mt-1">Enable automatic system lockdown on threat detection</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-silver-900/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-silver-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500/20"></div>
                          </label>
                        </div>
                        <div>
                          <label className="block text-sm font-mono text-silver-300 mb-2">Lockdown Level</label>
                          <select className="w-full bg-black/50 border border-silver-900/5 rounded-lg px-3 py-2 text-silver-100 font-mono focus:ring-2 focus:ring-silver-500/20 focus:border-transparent">
                            <option value="partial">Partial</option>
                            <option value="standard">Standard</option>
                            <option value="complete">Complete</option>
                            <option value="custom">Custom</option>
                          </select>
                        </div>
                        <button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-colors duration-200 border border-red-500/20 font-mono text-sm">
                          Initiate Emergency Protocol
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PhaseShiftContainer>
  );
} 
'use client';
import './globals.css';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import AccountPanel from './components/AccountPanel';
import PreferencesPanel from './components/PreferencesPanel';
import SidebarOpenButton from './components/SidebarOpenButton';
import { PhaseEffectProvider } from './components/PhaseEffectProvider';
import PhaseShiftContainer from './components/PhaseShiftContainer';
import PhaseBadge from './components/PhaseBadge';
import AmbientSoundSystem from './components/AmbientSoundSystem';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sidebarView, setSidebarView] = React.useState<'main'|'account'|'preferences'>('main');
  const [theme, setTheme] = React.useState('auto');
  const [language, setLanguage] = React.useState('en');
  const pathname = usePathname();
  // Placeholder user data
  const user = {
    avatarUrl: '',
    fullName: 'Deshon Jackson',
    username: 'shonjaks56302',
    email: 'deshon@example.com',
  };

  // Add effect to handle sidebar toggle event
  React.useEffect(() => {
    const handleToggleSidebar = (event: CustomEvent) => {
      setSidebarOpen(event.detail);
    };

    window.addEventListener('toggleSidebar', handleToggleSidebar as EventListener);
    return () => {
      window.removeEventListener('toggleSidebar', handleToggleSidebar as EventListener);
    };
  }, []);

  React.useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <PhaseEffectProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
          <style jsx global>{`
@keyframes glow {
  0%, 100% { text-shadow: 0 0 1.5px #fff, 0 0 3px #fff; }
  50% { text-shadow: 0 0 2.5px #fff, 0 0 5px #fff; }
}
@keyframes glowSubtle {
  0%, 100% { text-shadow: 0 0 2px #fff, 0 0 4px #0ff; }
  50% { text-shadow: 0 0 4px #fff, 0 0 8px #0ff; }
}
.animate-glow {
  animation: glow 2.5s infinite alternate;
}
.animate-glow-subtle {
  animation: glowSubtle 2.5s infinite alternate;
}
@keyframes flicker {
  0%, 100% { opacity: 1; filter: drop-shadow(0 0 8px #ffe600) drop-shadow(0 0 16px #ffe600); }
  45% { opacity: 0.85; filter: drop-shadow(0 0 12px #ffe600) drop-shadow(0 0 24px #ffe600); }
  50% { opacity: 0.7; filter: drop-shadow(0 0 24px #ffe600) drop-shadow(0 0 32px #ffe600); }
  55% { opacity: 0.85; filter: drop-shadow(0 0 12px #ffe600) drop-shadow(0 0 24px #ffe600); }
}
.cyberpunk-toggle {
  animation: flicker 2.2s infinite alternate;
}
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 5s linear infinite;
}
@keyframes chevron-expand {
  0%, 100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(-2px);
  }
}
@keyframes chevron-contract {
  0%, 100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(2px);
  }
  50% {
    transform: translateX(5px);
  }
  80% {
    transform: translateX(2px);
  }
}
@keyframes slash-expand {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.15);
  }
}
.cyberpunk-toggle .chevron-left {
  animation: chevron-expand 1.8s infinite cubic-bezier(0.4,0,0.2,1);
}
.cyberpunk-toggle .chevron-right {
  animation: chevron-contract 1.8s infinite cubic-bezier(0.4,0,0.2,1);
}
.cyberpunk-toggle .slash {
  animation: slash-expand 1.8s infinite cubic-bezier(0.4,0,0.2,1);
}
.cyberpunk-toggle {
  animation: none;
}
@keyframes fragment {
  0%, 100% { text-shadow: none; }
  20% { text-shadow: 1px 0 0 #fff, -1px 0 0 #fff; }
  40% { text-shadow: 2px 0 0 #fff, -2px 0 0 #fff; }
  60% { text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff; }
  80% { text-shadow: 0 2px 0 #fff, 0 -2px 0 #fff; }
}
.fragment-link {
  color: #fff;
  transition: text-shadow 0.2s, color 0.2s;
}
.fragment-link:hover {
  animation: fragment 0.7s linear;
  color: #fff;
}
`}</style>
        </head>
        <body className="bg-[#0A0A0A] text-[#E0E0E0] font-sans min-h-screen antialiased">
          <PhaseShiftContainer>
            {/* Show sidebar open button on every page except /thesidia/interface */}
            {pathname !== '/thesidia/interface' && (
              <SidebarOpenButton visible={!sidebarOpen} onClick={() => setSidebarOpen(true)} />
            )}
            {/* Slide-in Side Menu */}
            <aside
              className={`fixed left-0 top-0 h-screen w-36 md:w-44 p-1 z-40 bg-black/95 backdrop-blur-sm border-r border-white/10 transition-transform duration-300 ease-in-out
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
              style={{ marginTop: pathname === '/thesidia/interface' ? '0' : '3.5rem' }}
            >
              {/* SCI Logo for interface */}
              {pathname === '/thesidia/interface' && (
                <div className="px-2 py-3 border-b border-white/10">
                  <button 
                    onClick={() => {
                      console.log('SCI Research button clicked');
                      setSidebarOpen(true);
                      console.log('sidebarOpen:', true);
                    }}
                    className="w-full text-left focus:outline-none"
                    aria-label="Open sidebar"
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-white font-extrabold text-sm tracking-widest font-[Share Tech Mono,monospace] animate-glow leading-tight">SCI</span>
                      <span className="text-white text-[8px] font-[Share Tech Mono,monospace] tracking-widest animate-glow leading-tight">Research</span>
                    </div>
                  </button>
                </div>
              )}
              <nav className={(pathname === '/thesidia/interface' ? 'mt-16' : 'mt-4') + ' h-full overflow-y-auto scrollbar-none'}>
                {pathname === '/thesidia/interface' ? (
                  <ul className="space-y-1 font-mono text-xs">
                    <li className="pt-2"><span className="text-[10px] text-gray-500">QUEST</span></li>
                    <li><button className="w-full text-left py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link flex items-center gap-2">
                      <span className="text-yellow-400">∑</span> New Quest
                    </button></li>
                    <li><button className="w-full text-left py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link flex items-center gap-2">
                      <span className="text-green-400">∎</span> Completed
                    </button></li>
                    <li><Link href="/codex" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link flex items-center gap-2">
                      <span className="text-cyan-400">⌖</span> Codex
                    </Link></li>
                    
                    <li className="pt-4"><span className="text-[10px] text-gray-500">MODELS</span></li>
                    <li><button className="w-full text-left py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link flex items-center gap-2">
                      <span className="text-purple-400">λ</span> Katana
                    </button></li>
                    <li><button className="w-full text-left py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link flex items-center gap-2">
                      <span className="text-blue-400">Ψ</span> Myth0s
                    </button></li>

                    <li className="pt-4"><span className="text-[10px] text-gray-500">RECENT QUESTS</span></li>
                    <li><button className="w-full text-left py-1.5 px-2 text-white/70 hover:text-white rounded transition-colors fragment-link text-[10px] truncate flex items-center gap-2">
                      <span className="text-yellow-400/70">⌖</span> Analyze quantum...
                    </button></li>
                    <li><button className="w-full text-left py-1.5 px-2 text-white/70 hover:text-white rounded transition-colors fragment-link text-[10px] truncate flex items-center gap-2">
                      <span className="text-yellow-400/70">⌖</span> Generate neural...
                    </button></li>
                    <li><button className="w-full text-left py-1.5 px-2 text-white/70 hover:text-white rounded transition-colors fragment-link text-[10px] truncate flex items-center gap-2">
                      <span className="text-yellow-400/70">⌖</span> Optimize algo...
                    </button></li>

                    <li className="pt-4"><span className="text-[10px] text-gray-500">PLANS</span></li>
                    <li><button className="w-full text-left py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link flex items-center gap-2">
                      <span className="text-yellow-400">∞</span> Upgrade
                    </button></li>
                  </ul>
                ) : (
                  <ul className="space-y-1 font-mono text-base">
                    <li className="flex items-center justify-between w-full">
                      <Link href="/" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Home</Link>
                      <Link href="/codex" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" aria-label="Codex">{'</>'}</Link>
                    </li>
                    <li><Link href="/mission" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Mission</Link></li>
                    <li><Link href="/research" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Research</Link></li>
                    <li className="pt-2"><span className="text-xs text-gray-500">PHILOSOPHY</span></li>
                    <li><Link href="/nexus" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Nexus</Link></li>
                    <li><Link href="/impact" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Impact</Link></li>
                    <li className="pt-2"><span className="text-xs text-gray-500">PROJECTS</span></li>
                    <li><Link href="/thesidia" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Thesidia</Link></li>
                    <li><Link href="/katana" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Katana</Link></li>
                    <li><Link href="/myth0s" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Myth0s</Link></li>
                    <li className="pt-2"><span className="text-xs text-gray-500">RESOURCES</span></li>
                    <li><Link href="/metrics" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Metrics</Link></li>
                    <li><Link href="/api_arc" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">API ARC</Link></li>
                    <li><Link href="/safety" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Safety</Link></li>
                    <li><Link href="/news" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">News</Link></li>
                    <li className="pt-2"><span className="text-xs text-gray-500">SYMBOLIC NETWORK</span></li>
                    <li><button onClick={() => setSidebarView('account')} className="w-full text-left py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">My Space</button></li>
                    <li><Link href="/visions" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Visions</Link></li>
                    <li><Link href="/codex" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link">Codex</Link></li>
                  </ul>
                )}
              </nav>
            </aside>
            {/* Sidebar slide panels */}
            <AnimatePresence>
              {sidebarOpen && sidebarView !== 'main' && (
                <motion.div
                  key={sidebarView}
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed left-0 top-20 mt-0 h-[calc(100vh-5rem)] w-72 md:w-80 p-0 z-[60] bg-black border-r border-white/10 rounded-b-2xl shadow-xl"
                  style={{ pointerEvents: 'auto' }}
                >
                  {sidebarView === 'account' && (
                    <AccountPanel
                      user={user}
                      onBack={() => setSidebarView('main')}
                    />
                  )}
                  {sidebarView === 'preferences' && (
                    <PreferencesPanel
                      theme={theme}
                      setTheme={setTheme}
                      language={language}
                      setLanguage={setLanguage}
                      onBack={() => setSidebarView('main')}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10 ${pathname === '/thesidia/interface' ? 'hidden md:block' : ''}`}>
              <div className="px-4 py-2 flex items-center justify-between gap-4">
                <div className="flex items-center">
                  <div className="flex flex-col items-start">
                    <span className="text-white font-extrabold text-2xl tracking-widest font-[Share Tech Mono,monospace] animate-glow leading-tight">SCI</span>
                    <span className="text-white text-xs font-[Share Tech Mono,monospace] tracking-widest animate-glow leading-tight">Research</span>
                  </div>
                </div>
                <div className="flex-1 flex justify-center px-2 max-w-md mx-auto">
                  <form className="relative w-full">
                    <input 
                      type="text" 
                      placeholder="Initiate Inquiry..." 
                      className="w-full bg-black/50 py-1.5 pl-4 pr-10 text-white font-mono text-sm focus:outline-none border border-gray-700 rounded-full" 
                    />
                    <span className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 font-bold">⌖</span>
                  </form>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 flex items-center justify-center">
                      <PhaseBadge position="static" showLabel={false} />
                    </div>
                    <Link href="/resonate" className="hidden sm:inline-block px-3 py-1.5 text-sm font-semibold border border-cyan-400 text-cyan-200 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300 shadow-md tracking-widest">Resonate</Link>
                  </div>
                </div>
              </div>
            </header>
            {/* Main Content */}
            <div className={`${sidebarOpen ? 'md:pl-44' : ''} pt-16 min-h-screen flex flex-col transition-all duration-300`}>
              <AnimatePresence mode="wait">
                <motion.main
                  key={pathname}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="flex-1 z-20"
                >
                  {children}
                </motion.main>
              </AnimatePresence>
              <footer className="py-16 bg-black/30 border-t border-white/10 mt-32">
                <div className="container mx-auto px-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-1">
                      <Link href="/" className="text-2xl font-bold font-mono tracking-wider text-white font-[Share Tech Mono,monospace]">SCI</Link>
                      <p className="text-sm text-gray-400 mt-2">Architecting Foundational Intelligence.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-wider uppercase text-gray-400 text-sm">Philosophy</h3>
                      <ul className="mt-4 space-y-3">
                        <li><Link href="/mission" className="text-gray-300 hover:text-teal-400 transition-colors">Mission</Link></li>
                        <li><Link href="/nexus" className="text-gray-300 hover:text-teal-400 transition-colors">Nexus</Link></li>
                        <li><Link href="/impact" className="text-gray-300 hover:text-teal-400 transition-colors">Impact</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-wider uppercase text-gray-400 text-sm">Projects</h3>
                      <ul className="mt-4 space-y-3">
                        <li><Link href="/thesidia" className="text-gray-300 hover:text-teal-400 transition-colors">Thesidia</Link></li>
                        <li><Link href="/katana" className="text-gray-300 hover:text-teal-400 transition-colors">Katana</Link></li>
                        <li><Link href="/myth0s" className="text-gray-300 hover:text-teal-400 transition-colors">Myth0s</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-wider uppercase text-gray-400 text-sm">Resources</h3>
                      <ul className="mt-4 space-y-3">
                        <li><Link href="/research" className="text-gray-300 hover:text-teal-400 transition-colors">Research</Link></li>
                        <li><Link href="/api_arc" className="text-gray-300 hover:text-teal-400 transition-colors">API ARC</Link></li>
                        <li><Link href="/safety" className="text-gray-300 hover:text-teal-400 transition-colors">Safety</Link></li>
                        <li><Link href="/news" className="text-gray-300 hover:text-teal-400 transition-colors">News</Link></li>
                        <li><Link href="/metrics" className="text-gray-300 hover:text-teal-400 transition-colors">Metrics</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-wider uppercase text-gray-400 text-sm">Legal</h3>
                      <ul className="mt-4 space-y-3">
                        <li><Link href="/legal/terms" className="text-gray-300 hover:text-teal-400 transition-colors">Terms of Service</Link></li>
                        <li><Link href="/legal/privacy" className="text-gray-300 hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/legal/usage" className="text-gray-300 hover:text-teal-400 transition-colors">Usage Agreement</Link></li>
                        <li><Link href="/legal/disclaimers" className="text-gray-300 hover:text-teal-400 transition-colors">Disclaimers</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>&copy; 2025 SCI Research. All Rights Reserved. Patent Pending.</p>
                  </div>
                </div>
              </footer>
            </div>
          </PhaseShiftContainer>
          <AmbientSoundSystem />
        </body>
      </html>
    </PhaseEffectProvider>
  );
}

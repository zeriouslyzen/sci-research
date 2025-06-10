'use client';
import './globals.css';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const pathname = usePathname();

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    }
  }, []);

  return (
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
        {/* Slide-in Side Menu */}
        <aside
          className={`fixed left-0 top-20 mt-0 h-[calc(100vh-5rem)] w-36 md:w-44 p-1 z-50 bg-black border-r border-white/10 rounded-b-2xl transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0 block' : '-translate-x-full hidden'} md:block`}
        >
          {/* Sidebar toggle button */}
          <button
            className="absolute top-6 right-3 text-yellow-400 hover:text-white bg-transparent rounded-full p-1.5 z-50 focus:outline-none"
            onClick={() => setSidebarOpen(false)}
            aria-label="Hide menu"
          >
            <span className="w-6 h-6 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="cyberpunk-toggle">
                <g filter="url(#glow-white)">
                  <polyline className="chevron-left" points="10,8 2,16 10,24" stroke="#fff" strokeWidth="3" strokeLinejoin="round" fill="none"/>
                  <polyline className="chevron-right" points="22,8 30,16 22,24" stroke="#fff" strokeWidth="3" strokeLinejoin="round" fill="none"/>
                  <line className="slash" x1="16" y1="6" x2="16" y2="26" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                </g>
                <defs>
                  <filter id="glow-white" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#fff" />
                  </filter>
                </defs>
              </svg>
            </span>
          </button>
          <nav>
            <ul className="space-y-1 font-mono text-base mt-8">
              <li><Link href="/" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>Home</Link></li>
              <li><Link href="/mission" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>Mission</Link></li>
              <li><Link href="/research" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>Research</Link></li>
              <li className="pt-2"><span className="text-xs text-gray-500">PHILOSOPHY</span></li>
              <li><Link href="/nexus" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>Nexus</Link></li>
              <li><Link href="/impact" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>Impact</Link></li>
              <li className="pt-2"><span className="text-xs text-gray-500">PROJECTS</span></li>
              <li><Link href="/thesidia" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>Thesidia</Link></li>
              <li><Link href="/katana" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>Katana</Link></li>
              <li><Link href="/myth0s" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>Myth0s</Link></li>
              <li className="pt-2"><span className="text-xs text-gray-500">RESOURCES</span></li>
              <li><Link href="/metrics" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>Metrics</Link></li>
              <li><Link href="/api_arc" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>API ARC</Link></li>
              <li><Link href="/safety" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>Safety</Link></li>
              <li><Link href="/news" className="block py-1.5 px-2 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>News</Link></li>
              <li><Link href="/collaborate" className="block pt-6 text-white hover:text-white rounded transition-colors fragment-link" onClick={() => setSidebarOpen(false)}>Collaborate</Link></li>
            </ul>
          </nav>
        </aside>
        {/* Floating show-sidebar button */}
        {!sidebarOpen && (
          <button
            className="fixed top-20 left-3 z-50 bg-transparent text-yellow-400 rounded-full p-2 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
            aria-label="Show menu"
          >
            <span className="w-7 h-7 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="cyberpunk-toggle">
                <g filter="url(#glow-white)">
                  <polyline className="chevron-left" points="12,10 4,18 12,26" stroke="#fff" strokeWidth="3" strokeLinejoin="round" fill="none"/>
                  <polyline className="chevron-right" points="24,10 32,18 24,26" stroke="#fff" strokeWidth="3" strokeLinejoin="round" fill="none"/>
                  <line className="slash" x1="18" y1="8" x2="18" y2="28" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                </g>
                <defs>
                  <filter id="glow-white" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#fff" />
                  </filter>
                </defs>
              </svg>
            </span>
          </button>
        )}
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-30 bg-transparent">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Hamburger for mobile (hidden if sidebar is open on desktop) */}
              <button
                className="md:hidden text-cyan-400 focus:outline-none px-2 bg-transparent"
                onClick={() => setSidebarOpen((open) => !open)}
                aria-label="Open menu"
              >
                <span className="w-7 h-7 flex items-center justify-center">
                  {/* Removed animated triangle SVG */}
                </span>
              </button>
              {/* Remove the animated geometric SVG icon here */}
              <div className="flex flex-col items-start">
                <span className="text-white font-extrabold text-3xl tracking-widest font-[Share Tech Mono,monospace] animate-glow leading-tight">SCI</span>
                <span className="text-white text-sm font-[Share Tech Mono,monospace] tracking-widest animate-glow leading-tight mt-1">Research</span>
              </div>
            </div>
            <div className="flex-1 flex justify-center px-2">
              <div className="w-full max-w-md">
                <form className="relative rounded-full">
                  <input type="text" placeholder="Initiate Inquiry..." className="w-full bg-transparent py-2 pl-5 pr-10 text-white font-mono text-sm focus:outline-none border-b border-gray-700" />
                  <span className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 font-bold">⌖</span>
                </form>
              </div>
            </div>
            <Link href="/collaborate" className="hidden sm:inline-block px-4 py-2 text-sm font-semibold border border-gray-700 text-gray-300 rounded-full hover:bg-white hover:text-black transition-colors duration-300">Contact</Link>
            <Link href="/resonate" className="hidden sm:inline-block ml-3 px-4 py-2 text-sm font-semibold border border-cyan-400 text-cyan-200 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300 shadow-md tracking-widest">Resonate</Link>
          </div>
        </header>
        {/* Main Content */}
        <div className={`${sidebarOpen ? 'md:pl-44' : ''} pt-20 min-h-screen flex flex-col transition-all duration-300`}>
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
        {/* Overlay for mobile menu */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu overlay"
          />
        )}
      </body>
    </html>
  );
}

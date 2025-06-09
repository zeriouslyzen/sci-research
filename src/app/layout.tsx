'use client';
import './globals.css';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-[#E0E0E0] font-sans min-h-screen antialiased">
        {/* Slide-in Side Menu */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 md:w-72 p-3 z-50 bg-black border-r border-white/10 transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:block ${sidebarOpen ? '' : 'hidden'}`}
        >
          {/* Sidebar toggle button */}
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-white bg-black border border-gray-700 rounded-full p-1.5 z-50 focus:outline-none"
            onClick={() => setSidebarOpen(false)}
            aria-label="Hide menu"
          >
            <span className="text-xl">◀</span>
          </button>
          <nav>
            <ul className="space-y-1 font-mono text-base mt-8">
              <li className="mb-2">
                <a href="/" className="block py-2 px-3 text-white font-bold text-xl tracking-wider rounded border border-white/10 hover:bg-white hover:text-black transition">SCI Research</a>
              </li>
              <li><a href="/" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">Home</a></li>
              <li><a href="/mission" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">Mission</a></li>
              <li><a href="/research" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">Research</a></li>
              <li className="pt-2"><span className="text-xs text-gray-500">PHILOSOPHY</span></li>
              <li><a href="/nexus" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">Nexus</a></li>
              <li><a href="/impact" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">Impact</a></li>
              <li className="pt-2"><span className="text-xs text-gray-500">PROJECTS</span></li>
              <li><a href="/thesidia" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">Thesidia</a></li>
              <li><a href="/katana" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">Katana</a></li>
              <li><a href="/myth0s" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">Myth0s</a></li>
              <li className="pt-2"><span className="text-xs text-gray-500">RESOURCES</span></li>
              <li><a href="/metrics" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">Metrics</a></li>
              <li><a href="/api_arc" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">API ARC</a></li>
              <li><a href="/safety" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">Safety</a></li>
              <li><a href="/news" className="block py-1.5 px-2 text-gray-300 hover:text-white rounded transition-colors">News</a></li>
              <li><a href="/collaborate" className="block pt-6 text-gray-300 hover:text-white rounded transition-colors">Collaborate</a></li>
            </ul>
          </nav>
        </aside>
        {/* Floating show-sidebar button */}
        {!sidebarOpen && (
          <button
            className="fixed top-6 left-3 z-50 bg-black border border-gray-700 text-white rounded-full p-2 shadow-lg focus:outline-none"
            onClick={() => setSidebarOpen(true)}
            aria-label="Show menu"
          >
            <span className="text-2xl">⎔</span>
          </button>
        )}
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-30 bg-transparent">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Hamburger for mobile (hidden if sidebar is open on desktop) */}
              <button
                className="md:hidden text-white text-2xl focus:outline-none px-2"
                onClick={() => setSidebarOpen((open) => !open)}
                aria-label="Open menu"
              >
                <span className="text-2xl">⎔</span>
              </button>
              <a href="/" className="text-xl font-bold font-mono tracking-wider text-white">SCI</a>
            </div>
            <div className="flex-1 flex justify-center px-2">
              <div className="w-full max-w-md">
                <form className="relative rounded-full">
                  <input type="text" placeholder="Initiate Inquiry..." className="w-full bg-transparent py-2 pl-5 pr-10 text-white font-mono text-sm focus:outline-none border-b border-gray-700" />
                  <span className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 font-bold">⌖</span>
                </form>
              </div>
            </div>
            <a href="/collaborate" className="hidden sm:inline-block px-4 py-2 text-sm font-semibold border border-gray-700 text-gray-300 rounded-full hover:bg-white hover:text-black transition-colors duration-300">Contact</a>
          </div>
        </header>
        {/* Main Content */}
        <div className={`${sidebarOpen ? 'md:pl-72' : ''} pt-20 min-h-screen flex flex-col transition-all duration-300`}>
          <main className="flex-1 z-20">{children}</main>
          <footer className="py-16 bg-black/30 border-t border-white/10 mt-32">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                <div className="col-span-2 lg:col-span-1">
                  <a href="/" className="text-2xl font-bold font-mono tracking-wider text-white">SCI</a>
                  <p className="text-sm text-gray-400 mt-2">Architecting Foundational Intelligence.</p>
                </div>
                <div>
                  <h3 className="font-semibold tracking-wider uppercase text-gray-400 text-sm">Philosophy</h3>
                  <ul className="mt-4 space-y-3">
                    <li><a href="/mission" className="text-gray-300 hover:text-teal-400 transition-colors">Mission</a></li>
                    <li><a href="/nexus" className="text-gray-300 hover:text-teal-400 transition-colors">Nexus</a></li>
                    <li><a href="/impact" className="text-gray-300 hover:text-teal-400 transition-colors">Impact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold tracking-wider uppercase text-gray-400 text-sm">Projects</h3>
                  <ul className="mt-4 space-y-3">
                    <li><a href="/thesidia" className="text-gray-300 hover:text-teal-400 transition-colors">Thesidia</a></li>
                    <li><a href="/katana" className="text-gray-300 hover:text-teal-400 transition-colors">Katana</a></li>
                    <li><a href="/myth0s" className="text-gray-300 hover:text-teal-400 transition-colors">Myth0s</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold tracking-wider uppercase text-gray-400 text-sm">Resources</h3>
                  <ul className="mt-4 space-y-3">
                    <li><a href="/research" className="text-gray-300 hover:text-teal-400 transition-colors">Research</a></li>
                    <li><a href="/api_arc" className="text-gray-300 hover:text-teal-400 transition-colors">API ARC</a></li>
                    <li><a href="/safety" className="text-gray-300 hover:text-teal-400 transition-colors">Safety</a></li>
                    <li><a href="/news" className="text-gray-300 hover:text-teal-400 transition-colors">News</a></li>
                    <li><a href="/metrics" className="text-gray-300 hover:text-teal-400 transition-colors">Metrics</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold tracking-wider uppercase text-gray-400 text-sm">Legal</h3>
                  <ul className="mt-4 space-y-3">
                    <li><a href="/legal/terms" className="text-gray-300 hover:text-teal-400 transition-colors">Terms of Service</a></li>
                    <li><a href="/legal/privacy" className="text-gray-300 hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                    <li><a href="/legal/usage" className="text-gray-300 hover:text-teal-400 transition-colors">Usage Agreement</a></li>
                    <li><a href="/legal/disclaimers" className="text-gray-300 hover:text-teal-400 transition-colors">Disclaimers</a></li>
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
        {sidebarOpen && window.innerWidth < 768 && (
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

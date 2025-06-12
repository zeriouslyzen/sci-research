'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import PhaseShiftContainer from '../components/PhaseShiftContainer';

interface SettingsLayoutProps {
  children: ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <PhaseShiftContainer>
      <div className="min-h-screen bg-black">
        {/* Navigation Bar */}
        <nav className="bg-black/80 backdrop-blur-lg border-b border-cyan-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-glow">
                SCI Research
              </Link>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/"
                  className="text-cyan-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-mono transition-colors duration-200"
                >
                  Return to Interface
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-6">
          {children}
        </main>
      </div>
    </PhaseShiftContainer>
  );
} 
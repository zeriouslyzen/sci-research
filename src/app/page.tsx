'use client';
import React, { useRef, useEffect, useState } from 'react';
import HomepageVisuals from './components/HomepageVisuals';
import { motion } from 'framer-motion';
// import AnimatedCube from './components/AnimatedCube';

const featureSections = [
  {
    title: 'From Probability to Coherence',
    content: (
      <>
        Current systems predict what you might say. Our architecture is designed to understand what you truly <strong className="text-teal-400">mean</strong>. We are moving beyond statistical approximation to build systems grounded in coherent, verifiable intent, enabling a new class of reliable and trustworthy AI.
      </>
    ),
    right: null,
  },
  {
    title: 'Resolving Systemic Paradox',
    content: (
      <>
        Today&apos;s challenges are not simple equations; they are tangled paradoxes. Our technology provides the tools to find paths through complexity that were previously unimaginable, transforming conflicting inputs into harmonious, higher-order solutions for logistics, governance, and economics.
      </>
    ),
    right: (
      <svg viewBox="-10 -10 120 120" className="w-2/3 h-2/3">
        <g fill="none" strokeWidth="4">
          <path stroke="rgba(199, 92, 235, 0.7)" d="M 50 0 A 50 50 0 0 1 100 50 A 50 50 0 0 1 50 100" />
          <path stroke="rgba(92, 128, 235, 0.7)" d="M 50 100 A 50 50 0 0 1 0 50 A 50 50 0 0 1 50 0" />
        </g>
      </svg>
    ),
  },
  {
    title: 'Exploring Consciousness, Together',
    content: (
      <>
        We believe the journey to understanding intelligence is a shared adventure. Our work is rooted in curiosity, openness, and a deep respect for the unknown. Whether you&apos;re a researcher, creator, or simply curious, you&apos;re welcome here.
      </>
    ),
    right: (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}
        className="flex items-center justify-center"
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <ellipse cx="60" cy="60" rx="48" ry="24" fill="#fff2" />
          <ellipse cx="60" cy="60" rx="36" ry="18" fill="#fff4" />
          <ellipse cx="60" cy="60" rx="24" ry="12" fill="#fff7" />
          <circle cx="60" cy="60" r="8" fill="#fff" className="animate-pulse" />
        </svg>
      </motion.div>
    ),
  },
  {
    title: 'Our Story: The Search for Meaningful Intelligence',
    content: (
      <>
        SCI Research began as a question: What if intelligence could be more than prediction? Our team brings together explorers from philosophy, mathematics, art, and engineering—united by a drive to understand consciousness and build systems that honor its depth.
      </>
    ),
    right: (
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-2 items-center"
      >
        <div className="flex gap-2">
          <img src="/team1.jpg" alt="Team member 1" className="w-16 h-16 rounded-full object-cover border-2 border-white/30" />
          <img src="/team2.jpg" alt="Team member 2" className="w-16 h-16 rounded-full object-cover border-2 border-white/30" />
          <img src="/team3.jpg" alt="Team member 3" className="w-16 h-16 rounded-full object-cover border-2 border-white/30" />
        </div>
        <span className="text-xs text-gray-400 mt-2">A multidisciplinary journey</span>
      </motion.div>
    ),
  },
  {
    title: 'Mapping the Landscape of Mind',
    content: (
      <>
        Our research visualizes the connections between ideas, values, and systems. We use symbolic graphs and dynamic models to illuminate the hidden structure of cognition—making the invisible, visible.
      </>
    ),
    right: (
      <motion.svg
        width="120" height="120" viewBox="0 0 120 120"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <g stroke="#fff" strokeWidth="2" fill="none">
          <circle cx="60" cy="60" r="40" opacity="0.2" />
          <circle cx="60" cy="60" r="28" opacity="0.3" />
          <circle cx="60" cy="60" r="16" opacity="0.5" />
          <line x1="60" y1="20" x2="60" y2="100" opacity="0.5" />
          <line x1="20" y1="60" x2="100" y2="60" opacity="0.5" />
          <line x1="35" y1="35" x2="85" y2="85" opacity="0.3" />
          <line x1="85" y1="35" x2="35" y2="85" opacity="0.3" />
        </g>
        <circle cx="60" cy="20" r="4" fill="#fff" />
        <circle cx="60" cy="100" r="4" fill="#fff" />
        <circle cx="20" cy="60" r="4" fill="#fff" />
        <circle cx="100" cy="60" r="4" fill="#fff" />
        <circle cx="35" cy="35" r="3" fill="#fff" />
        <circle cx="85" cy="85" r="3" fill="#fff" />
        <circle cx="85" cy="35" r="3" fill="#fff" />
        <circle cx="35" cy="85" r="3" fill="#fff" />
        <circle cx="60" cy="60" r="5" fill="#fff" />
      </motion.svg>
    ),
  },
  {
    title: 'Architecting a Coherent Future',
    content: (
      <>
        This is more than research. It is the foundational work for a more intentional, resilient, and humane global infrastructure. A future built not on brittle optimization, but on deep, systemic resonance. Join us in building it.
      </>
    ),
    right: (
      <a href="/collaborate" className="mt-10 inline-block rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">Engage with our work</a>
    ),
    center: true,
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroScrollProgress, setHeroScrollProgress] = useState(0); // 0 to 1
  const [scrollLocked, setScrollLocked] = useState(true);

  // Custom scroll handler for hero section
  useEffect(() => {
    if (!scrollLocked) return;
    let lastY = 0;
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      setHeroScrollProgress(prev => {
        let next = prev + e.deltaY / 600; // adjust denominator for sensitivity
        next = Math.max(0, Math.min(1, next));
        if (next >= 1) setScrollLocked(false);
        return next;
      });
    }
    function onTouchMove(e: TouchEvent) {
      if (e.touches.length < 1) return;
      const y = e.touches[0].clientY;
      if (lastY !== 0) {
        setHeroScrollProgress(prev => {
          let next = prev + (lastY - y) / 600;
          next = Math.max(0, Math.min(1, next));
          if (next >= 1) setScrollLocked(false);
          return next;
        });
      }
      lastY = y;
    }
    function onTouchEnd() { lastY = 0; }
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [scrollLocked]);

  // Lock/unlock body scroll
  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [scrollLocked]);

  // Overlays/labels opacity based on heroScrollProgress
  const overlayOpacity = 1 - heroScrollProgress;

  return (
    <div className="relative z-10 bg-black/50 backdrop-blur-sm">
      <div ref={heroRef} style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <HomepageVisuals overlayOpacity={overlayOpacity} overlayProgress={heroScrollProgress} />
      </div>
      <div className="container mx-auto px-6 py-24 sm:py-32 space-y-24 sm:space-y-32">
        {featureSections.map((section) => (
          <motion.div
            key={section.title}
            className={
              section.center
                ? 'feature-section text-center max-w-3xl mx-auto'
                : 'feature-section grid grid-cols-1 md:grid-cols-2 gap-16 items-center'
            }
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {section.center ? (
              <>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{section.title}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">{section.content}</p>
                {section.right}
              </>
            ) : (
              <>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{section.title}</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">{section.content}</p>
                </div>
                <div className="w-full h-64 flex items-center justify-center">{section.right}</div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

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

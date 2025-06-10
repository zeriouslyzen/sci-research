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
    right: (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 sm:w-32 sm:h-32 mx-auto"
      >
        {/* Brain/network (left) */}
        <ellipse cx="40" cy="60" rx="28" ry="18" fill="#0ff2" />
        <ellipse cx="40" cy="60" rx="18" ry="10" fill="#0ff4" />
        <circle cx="30" cy="60" r="3" fill="#0ff" />
        <circle cx="50" cy="60" r="3" fill="#0ff" />
        <circle cx="40" cy="50" r="3" fill="#0ff" />
        <circle cx="40" cy="70" r="3" fill="#0ff" />
        <line x1="30" y1="60" x2="40" y2="50" stroke="#0ff" strokeWidth="1.5" />
        <line x1="30" y1="60" x2="40" y2="70" stroke="#0ff" strokeWidth="1.5" />
        <line x1="50" y1="60" x2="40" y2="50" stroke="#0ff" strokeWidth="1.5" />
        <line x1="50" y1="60" x2="40" y2="70" stroke="#0ff" strokeWidth="1.5" />
        {/* Crystal/geometric (right) */}
        <polygon points="80,40 110,60 80,80 50,60" fill="#fff3" stroke="#fff" strokeWidth="2" className="animate-geoshift" />
        <polygon points="80,40 80,80 65,60" fill="#0ff6" stroke="#0ff" strokeWidth="1" className="animate-geoshift" />
        <polygon points="80,40 110,60 65,60" fill="#0ff2" stroke="#0ff" strokeWidth="1" className="animate-geoshift" />
        <polygon points="80,80 110,60 65,60" fill="#0ff2" stroke="#0ff" strokeWidth="1" className="animate-geoshift" />
        {/* Transition lines */}
        <line x1="50" y1="60" x2="65" y2="60" stroke="#0ff" strokeDasharray="4 2" strokeWidth="1.5" />
      </svg>
    ),
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

const sliderContent = [
  {
    type: 'svg',
    title: 'Symbolic Network',
    description: 'Animated symbolic network visualizing AI connections.',
    svg: (
      <svg viewBox="0 0 80 48" fill="none" className="w-16 h-16 mx-auto animate-pulse">
        <circle cx="20" cy="24" r="8" fill="#0ff" fillOpacity="0.18" />
        <circle cx="60" cy="24" r="8" fill="#f0f" fillOpacity="0.18" />
        <circle cx="40" cy="12" r="6" fill="#fff" fillOpacity="0.18" />
        <circle cx="40" cy="36" r="6" fill="#fff" fillOpacity="0.18" />
        <line x1="20" y1="24" x2="40" y2="12" stroke="#0ff" strokeWidth="2" />
        <line x1="20" y1="24" x2="40" y2="36" stroke="#0ff" strokeWidth="2" />
        <line x1="60" y1="24" x2="40" y2="12" stroke="#f0f" strokeWidth="2" />
        <line x1="60" y1="24" x2="40" y2="36" stroke="#f0f" strokeWidth="2" />
        <line x1="20" y1="24" x2="60" y2="24" stroke="#fff" strokeWidth="2" />
      </svg>
    )
  },
  {
    type: 'image',
    src: '/team1.jpg',
    alt: 'Team at work',
    caption: 'Our team in the lab, exploring new frontiers.'
  },
  {
    type: 'article',
    title: 'The Future of Symbolic AI',
    excerpt: 'How symbolic reasoning is reshaping the landscape of artificial intelligence and trust.',
    link: '/research'
  },
  {
    type: 'svg',
    title: 'Data Flow',
    description: 'Animated data flow, representing information technologies.',
    svg: (
      <svg viewBox="0 0 80 48" fill="none" className="w-16 h-16 mx-auto animate-spin-slow">
        <rect x="10" y="20" width="60" height="8" rx="4" fill="#0ff" fillOpacity="0.12" />
        <rect x="20" y="24" width="40" height="4" rx="2" fill="#f0f" fillOpacity="0.18" />
        <circle cx="40" cy="24" r="6" fill="#fff" fillOpacity="0.18" />
      </svg>
    )
  },
  {
    type: 'image',
    src: '/team2.jpg',
    alt: 'Research session',
    caption: 'Collaborative research session on cognitive architectures.'
  },
  {
    type: 'article',
    title: 'From Probability to Coherence',
    excerpt: 'Moving beyond prediction to build systems grounded in coherent, verifiable intent.',
    link: '/mission'
  },
  {
    type: 'svg',
    title: 'Crystal Growth',
    description: 'Geometric crystal growing, symbolizing coherence.',
    svg: (
      <svg viewBox="0 0 80 48" fill="none" className="w-16 h-16 mx-auto animate-geoshift">
        <polygon points="40,8 72,24 40,40 8,24" fill="#fff3" stroke="#fff" strokeWidth="2" />
        <polygon points="40,8 40,40 24,24" fill="#0ff6" stroke="#0ff" strokeWidth="1" />
        <polygon points="40,8 72,24 24,24" fill="#0ff2" stroke="#0ff" strokeWidth="1" />
        <polygon points="40,40 72,24 24,24" fill="#0ff2" stroke="#0ff" strokeWidth="1" />
      </svg>
    )
  },
  {
    type: 'image',
    src: '/team3.jpg',
    alt: 'Symbolic graphs',
    caption: 'Visualizing the hidden structure of cognition.'
  },
  {
    type: 'article',
    title: 'SCI Research: Architecting the Future',
    excerpt: 'A multidisciplinary journey to build systems that honor the depth of consciousness.',
    link: '/mission'
  },
];

function VerticalSlider() {
  return (
    <div className="hidden md:flex flex-col items-center sticky top-24 h-[80vh] w-80 bg-black/80 rounded-2xl border border-gray-800 shadow-lg p-4 z-20 overflow-y-auto custom-scrollbar">
      <div className="flex flex-col gap-4 w-full">
        {sliderContent.map((item, i) => (
          <div
            key={i}
            className="w-full bg-black/90 rounded-xl border border-gray-700 shadow-md p-4 flex flex-col items-center group transition-transform duration-300 hover:scale-[1.03] animate-fadein"
            style={{ animationDelay: `${i * 0.08 + 0.1}s` }}
          >
            {item.type === 'image' && (
              <>
                <img src={item.src} alt={item.alt} className="w-full h-28 object-cover rounded mb-2 border border-gray-700 shadow" />
                <div className="text-xs text-gray-300 text-center">{item.caption}</div>
              </>
            )}
            {item.type === 'article' && (
              <div className="w-full flex flex-col items-center">
                <h3 className="text-base font-bold text-white mb-1 text-center">{item.title}</h3>
                <p className="text-gray-400 text-xs mb-2 text-center">{item.excerpt}</p>
                <a href={item.link} className="inline-block px-3 py-1 rounded bg-cyan-500 text-black font-semibold text-xs hover:bg-cyan-400 transition">Read More</a>
              </div>
            )}
            {item.type === 'svg' && (
              <div className="w-full flex flex-col items-center">
                {item.svg}
                <h3 className="text-base font-bold text-white mt-2 mb-1 text-center">{item.title}</h3>
                <p className="text-gray-400 text-xs text-center">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

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
      <div className="container mx-auto px-2 py-8 sm:px-6 sm:py-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content compressed on desktop */}
          <div className="flex-1 space-y-8 sm:space-y-24">
            {featureSections.map((section) => (
              <motion.div
                key={section.title}
                className={
                  section.center
                    ? 'feature-section text-center max-w-3xl mx-auto rounded-xl border border-gray-800 shadow-md bg-black/80 p-4 sm:p-10'
                    : 'feature-section grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-16 items-center rounded-xl border border-gray-800 shadow-md bg-black/80 p-4 sm:p-10'
                }
                initial={{ opacity: 0, y: 64 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                {section.center ? (
                  <>
                    <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl">{section.title}</h2>
                    <p className="mt-3 text-base leading-6 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">{section.content}</p>
                    {section.right && (
                      <div className="flex justify-center mt-4 sm:mt-8">
                        {React.cloneElement(section.right, { className: 'w-24 h-24 sm:w-32 sm:h-32 mx-auto' })}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="text-left">
                      <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl">{section.title}</h2>
                      <p className="mt-3 text-base leading-6 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">{section.content}</p>
                    </div>
                    <div className="w-full h-32 sm:h-64 flex items-center justify-center">
                      {section.right && React.cloneElement(section.right, { className: 'w-24 h-24 sm:w-32 sm:h-64' })}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
          {/* Vertical slider for desktop */}
          <VerticalSlider />
        </div>
      </div>
    </div>
  );
}

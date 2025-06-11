// Example config for getPhaseTheme()
// This file is for reference/documentation only.

export const PHASE_THEMES = {
  Convergence: {
    bgClass: 'bg-black',
    borderClass: 'border-gray-700/40',
    textClass: 'text-purple-400',
    glyph: '🜂',
    motionClass: 'hover:animate-shimmer-soft pulse-magnet', // custom or tailwind animate-pulse
    animationClass: 'animate-glow-pulse', // soft shimmer or glow pulse
  },
  Expansion: {
    bgClass: 'bg-black',
    borderClass: 'border-gray-700/40',
    textClass: 'text-red-400',
    glyph: '🜁',
    motionClass: 'animate-pulse animate-burst', // custom or tailwind animate-pulse
    animationClass: 'animate-burst', // breathing ring / radial burst
  },
  Alignment: {
    bgClass: 'bg-black',
    borderClass: 'border-gray-700/40',
    textClass: 'text-green-400',
    glyph: '🜃',
    motionClass: 'animate-snap-to-grid', // custom
    animationClass: 'animate-grid-shimmer', // slow grid-like shimmer
  },
  Inception: {
    bgClass: 'bg-black',
    borderClass: 'border-gray-700/40',
    textClass: 'text-blue-400',
    glyph: '🜄',
    motionClass: 'animate-foggy-fade animate-zoom-in', // custom
    animationClass: 'animate-fade-zoom', // faint zoom/fade loop
  },
  Recursion: {
    bgClass: 'bg-black',
    borderClass: 'border-gray-700/40',
    textClass: 'text-fuchsia-400',
    glyph: '🌀',
    motionClass: 'animate-spin-slow',
    animationClass: 'animate-iridescent-hue', // iridescent hue cycle
  },
  Neutral: {
    bgClass: 'bg-black',
    borderClass: 'border-gray-700/40',
    textClass: 'text-gray-200',
    glyph: '',
    motionClass: '',
    animationClass: '',
  },
}; 
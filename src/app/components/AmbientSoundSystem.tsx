import React, { useEffect, useRef, useState } from 'react';

// Single theta sound
const THETA_SOUND = '/sounds/theta.mp3';

export default function AmbientSoundSystem() {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3); // Lower default volume for theta
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio(THETA_SOUND);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    // Start playing when component mounts
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Audio playback failed:", error);
      });
    }

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  // Adjust volume
  const adjustVolume = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-black/50 p-2 rounded-lg backdrop-blur-sm">
      <button
        onClick={toggleMute}
        className="p-2 text-cyan-400 hover:text-cyan-200 transition-colors"
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => adjustVolume(parseFloat(e.target.value))}
        className="w-24 accent-cyan-400"
      />
    </div>
  );
} 
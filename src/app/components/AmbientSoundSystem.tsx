import React, { useEffect, useRef, useState } from 'react';

// Single theta sound
const THETA_SOUND = '/sounds/theta.mp3';

export default function AmbientSoundSystem() {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3); // Lower default volume for theta
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    console.log("Initializing audio...");
    audioRef.current = new Audio(THETA_SOUND);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    // Add event listeners for debugging
    audioRef.current.addEventListener('playing', () => {
      console.log("Audio started playing");
      setIsPlaying(true);
    });

    audioRef.current.addEventListener('error', (e) => {
      console.error("Audio error:", e);
    });

    return () => {
      console.log("Cleaning up audio...");
      audioRef.current?.pause();
    };
  }, []);

  // Start playing on first user interaction
  const startPlaying = async () => {
    if (!audioRef.current || isPlaying) return;
    
    try {
      console.log("Attempting to play audio...");
      await audioRef.current.play();
      console.log("Audio play promise resolved");
    } catch (error) {
      console.error("Failed to play audio:", error);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (!isPlaying) {
      startPlaying();
      return;
    }
    
    console.log("Toggling mute:", !isMuted);
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  // Adjust volume
  const adjustVolume = (newVolume: number) => {
    console.log("Adjusting volume:", newVolume);
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
        title={isMuted ? 'Unmute' : isPlaying ? 'Mute' : 'Play Sound'}
      >
        {isMuted ? '🔇' : isPlaying ? '🔊' : '▶️'}
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
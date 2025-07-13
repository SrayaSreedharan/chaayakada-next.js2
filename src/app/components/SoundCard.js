"use client"
import { useState, useEffect, useRef } from 'react';

export default function SoundCard({ title, icon,audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;
    return () => {
      audio.pause();
    };
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
 


    <div className="bg-black/90 rounded-xl p-6 text-white text-center w-full max-w-[280px]">
     <div className="flex justify-center items-center mb-4 text-white text-5xl">{icon}</div>
      <div className="text-xl font-bold mb-2">{title}</div>
      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="w-full mb-3"/>
      <button onClick={togglePlay} className="bg-white text-black px-4 py-1 rounded shadow">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
    </div>
  );
}

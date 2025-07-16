"use client"

import { useState, useEffect, useRef } from 'react';

export default function SoundCard({ title, icon,audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(audioSrc)
    audio.loop = true
    audioRef.current = audio
    return () => audio.pause()
  }, [audioSrc])

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
    <div className=" rounded-xl p-6 text-white text-center w-full max-w-[290px] h-60 hover:scale-105 hover:shadow-lg border border-black rounded bg-black/60">
     <div className="flex justify-center items-center mb-4 text-white text-5xl">{icon}</div>
      <div className="text-xl font-bold mb-2">{title}</div>
      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="w-full mb-3 "/>
      <button onClick={togglePlay} className=" text-white px-4 py-1 rounded shadow border border-white rounded hover:bg-white/20">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
    </div>
  );
}

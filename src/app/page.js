import Head from 'next/head';
import SoundCard from './components/SoundCard';
import { FaMusic, FaCloudRain, FaUsers, FaBolt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start text-white pt-18 px-6" style={{ backgroundImage: 'url(\"/teashop.png\")' }}>
      <Head>
        <title>Chaaya Kada</title>
      </Head>
      <h1 className="text-6xl font-bold mb-5 rounded">chaaya kada</h1>
      <div className="mt-30 flex flex-wrap gap-6 justify-center">
        <SoundCard title="Music" icon={<FaMusic />} audioSrc="/sounds/music.mp3" />
        <SoundCard title="Rain" icon={<FaCloudRain />} audioSrc="/sounds/rain.mp3" />
        <SoundCard title="Crowd" icon={<FaUsers />} audioSrc="/sounds/crowd.mp3" />
        <SoundCard title="Thunderstorm" icon={<FaBolt />} audioSrc="/sounds/thunderstorm.mp3" />
      </div>
      <button className="mt-10 px-4 py-2 bg-white/10 border border-white rounded hover:bg-white/20">
        Enable Realistic Mode
      </button>
    </div>
  );
}

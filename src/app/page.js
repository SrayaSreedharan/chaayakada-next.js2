import Head from 'next/head';
import SoundCard from './components/SoundCard';
import { FaMusic, FaCloudRain, FaUsers, FaBolt } from 'react-icons/fa';
import Footer from './components/Footer';

export default function Home() {
  return (
<div className="min-h-screen w-full flex flex-col items-center justify-start text-white pt-20 px-6 bg-cover bg-center bg-no-repeat bg-[url('/teashop.png')]">
      <Head>
        <title>Chaaya Kada</title>
      </Head>
      <h1 className="text-5xl md:text-6xl font-bold mb-5 mt-85 md:mt-0 text-center">
  chaaya kada
</h1>

<div className="mt-38 md:mt-32 flex flex-wrap gap-6 justify-center">
        <SoundCard title="Music" icon={<FaMusic />} audioSrc="/sounds/music.mp3" />
        <SoundCard title="Rain" icon={<FaCloudRain />} audioSrc="/sounds/rain.mp3" />
        <SoundCard title="Crowd" icon={<FaUsers />} audioSrc="/sounds/crowd.mp3" />
        <SoundCard title="Thunderstorm" icon={<FaBolt />} audioSrc="/sounds/thunderstorm.mp3" />
      </div>
      <button className="mt-10 px-4 py-2 bg-white/10 border border-white rounded hover:bg-white/20">
        Enable Realistic Mode
      </button>
      <Footer/>
    </div>
  );
}
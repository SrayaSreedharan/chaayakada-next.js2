import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full  text-white py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between mt-18">
      <p className="text-sm text-gray-400 text-center md:text-left">
        © 2025 Chaaya Kada
      </p>
      <div className="flex items-center gap-3 mt-4 md:mt-0 text-sm text-gray-400">
        <span>Powered by</span>
        <a href="https://nextjs.org" className="underline hover:text-white transition" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        <a href="https://github.com/SrayaSreedharan/chaayakada-project9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"aria-label="GitHub">
          <FaGithub size={18} />
        </a>
        <a href="https://www.linkedin.com/in/sraya-sreedharan-0653a1259/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
          <FaLinkedin size={18} />
        </a>
      </div>
    </footer>
  );
}

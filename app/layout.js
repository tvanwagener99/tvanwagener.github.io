"use client";
import "../styles/globals.css";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';

const NUM_DROPS = 50;

function getRandomDrop() {
  return {
    left: `${2.5 + Math.random() * 95}%`,
    width: `${0.5 + Math.random() * 5}px`,
    height: `${0.5 + Math.random() * 50}px`,
    duration: `${1 + Math.random() * 0.5}s`,
    delay: `${Math.random() * 2}s`,
    key: Math.random().toString(36).slice(2),
  };
}

function RainEffect() {
  const [drops, setDrops] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setDrops(Array.from({ length: NUM_DROPS }, getRandomDrop));
  }, []);

  const handleAnimationEnd = useCallback(
    (idx) => {
      setDrops((prev) => {
        const next = [...prev];
        next[idx] = getRandomDrop();
        return next;
      });
    },
    []
  );

  if (!isClient) {
    return null; // Don't render anything on the server
  }

  return (
    <div className="cloud" aria-hidden="true">
      {drops.map((drop, i) => (
        <div
          key={drop.key}
          className="drop"
          style={{
            left: drop.left,
            width: drop.width,
            height: drop.height,
            animationDuration: drop.duration,
            animationDelay: drop.delay,
          }}
          onAnimationEnd={() => handleAnimationEnd(i)}
        />
      ))}
    </div>
  );
}

export default function RootLayout({ children }) {
  const [volume, setVolume] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedVolume = localStorage.getItem('rainVolume');
      return savedVolume ? parseFloat(savedVolume) : 0.5;
    }
    return 0.5;
  });
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (volume > 0 && audioRef.current.paused) {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log('Autoplay prevented');
        });
      } else if (volume === 0) {
        audioRef.current.pause();
      }
    }
  }, [volume]);

  const handleVolumeChange = useCallback((e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    localStorage.setItem('rainVolume', newVolume.toString());
  }, []);

  return (
    <html lang="en">
      <body>
        <audio ref={audioRef} loop preload="auto">
          <source src="/rain.mp3" type="audio/mpeg" />
        </audio>
        <RainEffect />
        <nav className="navbar">
          <div className="navbar-content">
            <Link href="/" className="logo">
              <Image src="/logo.png" alt="TVW Logo" width={50} height={30}/>
            </Link>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Me</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/work">Work Experience</Link></li>
              <li><Link href="/education">Education</Link></li>
              <li><Link href="/certifications">Certifications</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li className="volume-control">
                <span className="volume-icon">🔊</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="volume-slider"
                  aria-label="Rain sound volume"
                />
              </li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
} 
"use client";
import React from "react";
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="home-section">
      <header className="home-header">
        <h1 className="home-title">Hi, I'm Tyler</h1>
        <p className="home-subtitle">
          Software Developer | Crafting efficient, scalable, and innovative solutions.
        </p>
      </header>
      <nav className="home-nav">
        <div className="home-grid">
          <Link href="/about" className="card home-card">
            <h2>About Me</h2>
            <p>Learn more about my background and skills.</p>
          </Link>
          <Link href="/projects" className="card home-card">
            <h2>Projects</h2>
            <p>See my featured web development work.</p>
          </Link>
          <Link href="/work" className="card home-card">
            <h2>Work Experience</h2>
            <p>Explore my professional journey.</p>
          </Link>
          <Link href="/education" className="card home-card">
            <h2>Education</h2>
            <p>View my academic background and achievements.</p>
          </Link>
          <Link href="/certifications" className="card home-card">
            <h2>Certifications</h2>
            <p>See my professional certifications and training.</p>
          </Link>
          <Link href="/contact" className="card home-card">
            <h2>Contact</h2>
            <p>Get in touch or download my resume.</p>
          </Link>
        </div>
      </nav>
    </section>
  );
} 
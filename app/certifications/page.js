"use client";
import React from 'react';

export default function Certifications() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Professional Development</h1>
      
      <div className="p-8 mb-6">
        <p className="text-lg mb-8">
          In today's rapidly evolving tech landscape, continuous learning is essential. I'm committed to expanding my expertise 
          through professional certifications and training programs, particularly in cybersecurity and system administration.
        </p>

        <div className="home-grid">
          <a href="#" className="card home-card">
            <h2 className="text-2xl font-semibold mb-2">Google Cybersecurity Professional Certificate</h2>
            <p className="text-gray-300 mb-4">Coursera</p>
            <div className="flex items-center gap-2 mb-4">
              <p className="px-3 py-1 rounded-full  text-sm text-gray-300">Completed Feb 2025</p>
            </div>
            <p className="text-lg">
              This comprehensive program has equipped me with essential cybersecurity skills, from threat detection to 
              security architecture. The hands-on approach provided practical experience in protecting systems and data 
              in real-world scenarios.
            </p>
          </a>

          <a href="#" className="card home-card">
            <h2 className="text-2xl font-semibold mb-2">CompTIA Security+</h2>
            <p className="text-gray-300 mb-4">CompTIA</p>
            <div className="flex items-center gap-2 mb-4">
              <p className="px-3 py-1 rounded-full text-sm text-gray-300">In Progress</p>
            </div>
            <p className="text-lg">
              Currently pursuing this industry-recognized certification to further strengthen my security expertise. 
              This certification will validate my skills in network security, compliance, and operational security.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
} 
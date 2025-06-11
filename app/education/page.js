"use client";
import React from 'react';

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Education Journey</h1>
      
      <div className="glass-panel p-8 mb-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Illinois Institute of Technology</h2>
            <p className="text-lg mb-4">
              My journey in computer science began at IIT, where I pursued my passion for technology and software development. 
              The rigorous curriculum provided me with a strong foundation in both theoretical concepts and practical applications, 
              preparing me for the challenges of modern software engineering.
            </p>
            <p className="text-lg mb-4">
              During my time at IIT, I immersed myself in various aspects of computer science, from fundamental programming 
              concepts to advanced software architecture. This comprehensive education has been instrumental in shaping my 
              approach to problem-solving and software development.
            </p>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Beyond the Classroom</h3>
            <p className="text-lg mb-4">
              While academics were a priority, I also found success in athletics as a member of the IIT Men's Swim Team. 
              This experience taught me valuable lessons in discipline, teamwork, and perseverance that I continue to apply 
              in my professional career.
            </p>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Notable Achievements</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Four-year member of IIT Men's Swim Team</li>
                <li>Conference Champions (February 2020)</li>
                <li>Record-breaking 4x100 Medley Relay Team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
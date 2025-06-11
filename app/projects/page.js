"use client";
import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Personal Projects</h1>
      
      <div className="p-8 mb-6">
        <p className="text-lg mb-8">
          Beyond my professional work, I enjoy building personal projects that combine my technical skills 
          with my interests. These projects showcase my ability to work with various technologies and 
          create engaging user experiences.
        </p>

        <div className="home-grid">
          <a href="#" className="card home-card">
            <h2 className="text-2xl font-semibold">Discord AI Fantasy Bot</h2>
            <p className="text-gray-300 mb-4">OpenAI & ElevenLabs Integration</p>
            <p className="text-lg mb-4">
              Created an innovative Discord bot that combines OpenAI's language model with ElevenLabs' 
              voice synthesis to deliver real-time fantasy storytelling experiences. This project 
              demonstrates my ability to integrate multiple AI services and create engaging interactive 
              experiences.
            </p>
          </a>

          <a href="#" className="card home-card">
            <h2 className="text-2xl font-semibold">Anime Reminder App</h2>
            <p className="text-gray-300 mb-4">Python GUI Application</p>
            <p className="text-lg mb-4">
              Developed a user-friendly GUI application in Python that helps anime enthusiasts track 
              their favorite shows and receive weekly release notifications. This project showcases 
              my ability to create practical desktop applications with a focus on user experience.
            </p>
          </a>

          <a href="#" className="card home-card">
            <h2 className="text-2xl font-semibold">Cosplay Photography Review Site</h2>
            <p className="text-gray-300 mb-4">.NET Core 9.0 Web Application</p>
            <p className="text-lg mb-4">
              Currently developing a web application for reviewing cosplay photographers, built with 
              .NET Core 9.0. This project demonstrates my expertise in modern web development and 
              my ability to create platforms that serve specific community needs.
            </p>

          </a>
        </div>
      </div>
    </div>
  );
} 
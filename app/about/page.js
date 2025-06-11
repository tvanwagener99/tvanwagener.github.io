"use client";
import React from 'react';
import 'devicon/devicon.min.css';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <style jsx>{`
        .tech-icon {
          position: relative;
        }
        .tech-icon[title] {
          position: relative;
        }
        .tech-icon[title]::after {
          content: attr(title);
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 14px;
          white-space: nowrap;
          z-index: 10;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease-in-out;
        }
        .tech-icon[title]:hover::after {
          opacity: 1;
        }
      `}</style>
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="glass-panel p-8 mb-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Professional Journey</h2>
            <p className="text-lg mb-4">
              With over 4 years of full-stack development experience and a decade of programming under my belt, 
              I've developed a deep passion for creating robust, scalable web applications. My journey in software 
              development began with academic projects and has evolved into a professional career focused on 
              enterprise-grade solutions.
            </p>
            <p className="text-lg mb-4">
              I specialize in C# and .NET development, with extensive experience in building and maintaining 
              complex web applications. My approach combines technical expertise with a strong focus on user 
              experience and system performance.
            </p>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
            <div className="bg-white/5 rounded-lg p-8">
              <div className="flex flex-wrap justify-center items-center" style={{ paddingBottom: '16px' }}>
                <i className="tech-icon devicon-csharp-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="C#"></i>
                <i className="tech-icon devicon-html5-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="HTML"></i>
                <i className="tech-icon devicon-css3-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="CSS"></i>
                <i className="tech-icon devicon-javascript-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="JavaScript"></i>
                <i className="tech-icon devicon-python-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="Python"></i>
                <i className="tech-icon devicon-mysql-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="SQL"></i>
                <i className="tech-icon devicon-java-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="Java"></i>
                <i className="tech-icon devicon-jquery-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="jQuery"></i>
                <i className="tech-icon devicon-nodejs-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="NodeJS"></i>
                <i className="tech-icon devicon-cplusplus-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="C++"></i>
                <i className="tech-icon devicon-c-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="C"></i>
                <i className="tech-icon devicon-dotnetcore-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="ASP.NET MVC"></i>
                <i className="tech-icon devicon-azure-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="Azure DevOps"></i>
                <i className="tech-icon devicon-github-original colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="GitHub"></i>
                <i className="tech-icon devicon-dynamics365-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="Microsoft Dynamics CRM"></i>
                <i className="tech-icon devicon-bootstrap-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="Bootstrap"></i>
                <i className="tech-icon devicon-jira-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="Jira"></i>
                <i className="tech-icon devicon-figma-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="Figma"></i>
                <i className="tech-icon devicon-microsoftsqlserver-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="SQL Server Management Studio"></i>
                <i className="tech-icon devicon-linux-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="Linux"></i>
                <i className="tech-icon devicon-unity-original colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="Unity"></i>
                <i className="tech-icon devicon-godot-plain colored" style={{ fontSize: '3rem', marginRight: '16px' }} title="Godot"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">What Drives Me</h3>
          <p className="text-lg">
            I thrive in high-pressure environments where quality and performance are paramount. My approach to 
            development combines technical excellence with efficient communication, ensuring that solutions not 
            only meet technical requirements but also deliver real business value. I'm particularly passionate 
            about building backend systems, debugging complex issues, and collaborating with teams to create 
            maintainable, efficient code.
          </p>
        </div>
      </div>
    </div>
  );
} 
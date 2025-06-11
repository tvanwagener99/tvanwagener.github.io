"use client";
import React from 'react';

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
      
      <div className="glass-panel p-8 mb-6">
        <div className="space-y-8">
          <div className="bg-white/5 rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold">Specialist, Web Development</h2>
                <p className="text-gray-300">CompTIA</p>
              </div>
              <div className="text-gray-400">July 2021 - January 2025</div>
            </div>

            <div className="space-y-4">
              <p className="text-lg">
                As a key member of the web development team, I led the development of enterprise-grade, 
                user-authenticated association websites. My role focused on creating scalable solutions 
                that enhanced user experience while maintaining robust security standards.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Technical Leadership</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Led full-stack .NET development using C#</li>
                    <li>Developed responsive web applications using ASP.NET WebForms, MVC, and Bootstrap</li>
                    <li>Implemented secure database-driven functionalities with SQL Server</li>
                    <li>Established Azure DevOps pipelines for CI/CD</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Business Impact</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Created CMS-driven modules enabling non-technical content management</li>
                    <li>Developed event registration and management systems</li>
                    <li>Built exhibitor management tools for premier events</li>
                    <li>Maintained legacy system functionalities during CMS transitions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Key Achievements</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Successfully gathered and translated requirements from internal stakeholders</li>
                  <li>Implemented industry-standard security protocols and coding practices</li>
                  <li>Optimized code performance and conducted routine security enhancements</li>
                  <li>Created iframe-based form applications for seamless system integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
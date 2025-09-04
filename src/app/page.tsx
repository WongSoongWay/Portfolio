import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import AwardsAndCertificates from './components/AwardsAndCertificates';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm Wong Soong Way 👋
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                A passionate software developer focused on creating beautiful and functional web applications
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Add your profile image here */}
              <div className="w-64 h-64 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Profile Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-20">
        <Education />
        <Experience />
        <TechnicalSkills />
        <Projects />
        <AwardsAndCertificates />
      </div>
    </main>
  );
}

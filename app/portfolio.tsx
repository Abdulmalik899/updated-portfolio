"use client";
import React, { useState, useEffect } from 'react';
import Navigation from './nav';
import HeroSection from './socialbutton';
import SkillsSection from './skills';
import ProjectsSection from './projects';
import EducationSection from './education';
import ContactSection from './contact';
import Footer from './footer';
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} isVisible={isVisible} />
      <HeroSection isVisible={isVisible} />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

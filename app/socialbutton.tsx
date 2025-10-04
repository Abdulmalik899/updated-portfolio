"use client";
import { Github, Linkedin, Mail } from "lucide-react";
const SocialButton: React.FC<{
  href: string;
  icon: React.ElementType;
  label: string;
  color: string;
}> = ({ href, icon: Icon, label, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-2 px-6 py-3 ${color} rounded-lg transition-all transform hover:scale-105 hover:shadow-lg`}
  >
    <Icon size={20} /> {label}
  </a>
);

// Hero Section Component
const HeroSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const socialLinks = [
    {
      href: "https://github.com/Abdulmalik899",
      icon: Github,
      label: "GitHub",
      color: "bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/50",
    },
    {
      href: "https://linkedin.com/in/abdulkareem-abdulmalik",
      icon: Linkedin,
      label: "LinkedIn",
      color: "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/50",
    },
    {
      href: "mailto:shinobicode77@gmail.com",
      icon: Mail,
      label: "Email",
      color: "bg-pink-600 hover:bg-pink-700 hover:shadow-pink-500/50",
    },
  ];

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Abdulkareem Abdulmalik
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-purple-300 mb-8 animate-fadeIn">
            Junior Front-End Developer
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Enthusiastic and detail-oriented Front-End Developer with hands-on
            experience building responsive and dynamic web applications using
            React, Next.js, and TypeScript. Possesses a strong foundation in
            modern web development practices, strengthened through formal
            training at Zulfah Academy and academic studies in Systems
            Engineering. Currently a 300-level student at the University of Lagos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, idx) => (
              <SocialButton key={idx} {...link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

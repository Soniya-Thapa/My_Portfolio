"use client";
import React, { useEffect, useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation links - removed testimonials and blog
  const navLinks = [
    { id: 1, label: 'Home', url: '#home' },
    { id: 2, label: 'Services', url: '#services' },
    { id: 3, label: 'Skills', url: '#skills' },
    { id: 4, label: 'Resume', url: '#resume' },
    { id: 5, label: 'Works', url: '#works' },
    { id: 6, label: 'Contact', url: '#contact' },
  ];

  // Handle navbar background on scroll
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.url.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle download CV
  const handleDownloadCV = () => {
    // This will download the CV from public folder
    const link = document.createElement('a');
    link.href = '/resume/Soniya-Thapa-Resume.pdf';
    link.download = 'Soniya-Thapa-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav 
      className={`transition-all ${navBg ? "bg-[#0f142ed9] shadow-md backdrop-blur-sm" : "bg-transparent"} duration-200 h-[12vh] z-[10000] fixed w-full top-0`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[85%] mx-auto">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-2 group cursor-pointer"
          aria-label="Scroll to home"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center flex-col shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaCode className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold group-hover:text-cyan-300 transition-colors duration-300">
            SONIYA
          </h1>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.url.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(sectionId)}
                className={`text-base font-medium transition-all duration-200 relative group ${
                  isActive ? 'text-cyan-300' : 'text-white hover:text-cyan-300'
                }`}
                aria-label={`Navigate to ${link.label}`}
              >
                <span>{link.label}</span>
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-300 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* Download CV Button */}
          <button 
            onClick={handleDownloadCV}
            className="px-6 py-3 text-sm cursor-pointer rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 text-white flex items-center space-x-2 font-semibold shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
            aria-label="Download CV"
          >
            <BiDownload className="w-5 h-5" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={openNav}
            className="w-10 h-10 cursor-pointer text-white lg:hidden flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-300"
            aria-label="Open mobile menu"
          >
            <HiBars3BottomRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
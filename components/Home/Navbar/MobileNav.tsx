import React from 'react'
import { CgClose } from 'react-icons/cg'
import { BiDownload } from 'react-icons/bi'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  // Navigation links - matching the desktop nav
  const navLinks = [
    { id: 1, label: 'Home', url: '#home' },
    { id: 2, label: 'Services', url: '#services' },
    { id: 3, label: 'Skills', url: '#skills' },
    { id: 4, label: 'Resume', url: '#resume' },
    { id: 5, label: 'Works', url: '#works' },
    { id: 6, label: 'Contact', url: '#contact' },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile nav after clicking
      closeNav();
    }
  };

  // Handle download CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume/Soniya-Thapa-Resume.pdf';
    link.download = 'Soniya-Thapa-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeNav();
  };

  return (
    <div>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[100002] bg-black/80 backdrop-blur-sm w-full h-screen`}
        onClick={closeNav}
        aria-hidden={!showNav}
      ></div>

      {/* Mobile Navigation Menu */}
      <nav 
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gradient-to-br from-[#0a0a2e] to-[#16213e] border-l-2 border-cyan-500 space-y-6 z-[100050] right-0 shadow-2xl`}
        aria-label="Mobile navigation"
      >
        {/* Close Button */}
        <button
          onClick={closeNav}
          className='absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-cyan-600/20 hover:bg-cyan-600/40 transition-colors duration-300'
          aria-label="Close mobile menu"
        >
          <CgClose className='w-6 h-6 text-white' />
        </button>

        {/* Logo/Brand */}
        <div className='px-8 mb-4'>
          <h2 className='text-2xl sm:text-3xl font-bold text-cyan-300'>
            Soniya Thapa
          </h2>
          <p className='text-gray-400 text-sm mt-1'>Backend Developer</p>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col space-y-4 px-8'>
          {navLinks.map((link, index) => {
            const sectionId = link.url.substring(1);
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(sectionId)}
                className='text-left group'
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className='flex items-center space-x-3'>
                  <span className='text-cyan-400 font-bold text-lg'>0{link.id}</span>
                  <div className='flex-1'>
                    <p className='text-white text-xl sm:text-2xl font-semibold group-hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-2 transform transition-transform'>
                      {link.label}
                    </p>
                    <div className='h-0.5 bg-cyan-500/30 group-hover:bg-cyan-500 transition-all duration-300 mt-1 w-0 group-hover:w-full'></div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Download CV Button */}
        <div className='px-8 mt-8'>
          <button 
            onClick={handleDownloadCV}
            className='w-full px-6 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold text-lg flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105'
            aria-label="Download CV"
          >
            <BiDownload className='w-6 h-6' />
            <span>Download CV</span>
          </button>
        </div>

        {/* Contact Info */}
        <div className='px-8 mt-auto mb-8'>
          <div className='border-t border-gray-700 pt-6 space-y-2'>
            <p className='text-gray-400 text-sm'>Get in touch:</p>
            <a 
              href="mailto:ayinos.apaht143@gmail.com"
              className='text-cyan-300 hover:text-cyan-200 text-sm block transition-colors'
            >
              ayinos.apaht143@gmail.com
            </a>
            <a 
              href="tel:+9779804836355"
              className='text-cyan-300 hover:text-cyan-200 text-sm block transition-colors'
            >
              +977 9804836355
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MobileNav
"use client"
import React, { useState } from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa'
import { BiEnvelope, BiPhone } from 'react-icons/bi'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+977 9804836355');
    setPhoneCopied(true);
    setShowPhoneMenu(false);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const phoneOptions = [
    {
      label: 'Call',
      icon: '📞',
      action: () => window.location.href = 'tel:+9779804836355'
    },
    {
      label: 'WhatsApp',
      icon: '💬',
      action: () => window.open('https://wa.me/9779804836355', '_blank')
    },
    {
      label: 'Viber',
      icon: '📱',
      action: () => window.open('viber://chat?number=+9779804836355', '_blank')
    },
    {
      label: 'Copy Number',
      icon: '📋',
      action: handleCopyPhone
    }
  ];

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
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'resume' },
    { label: 'Works', id: 'works' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className='w-5 h-5' />,
      url: 'https://github.com/Soniya-Thapa',
      label: 'GitHub',
      color: 'hover:bg-gray-700'
    },
    {
      icon: <FaLinkedin className='w-5 h-5' />,
      url: 'https://www.linkedin.com/in/soniya-thapa-42227b320/',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <FaFacebookF className='w-5 h-5' />,
      url: 'https://www.facebook.com/soniya.thapa.77736310',
      label: 'Facebook',
      color: 'hover:bg-blue-700'
    },
    {
      icon: <FaInstagram className='w-5 h-5' />,
      url: 'https://www.instagram.com/apaht_ayinos/',
      label: 'Instagram',
      color: 'hover:bg-pink-600'
    }
  ];

  return (
    <footer className='bg-[#0a0a2e] border-t border-cyan-500/20'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* About Section */}
          <div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Soniya Thapa
            </h3>
            <p className='text-gray-400 text-sm leading-relaxed mb-4'>
              Backend Developer specializing in Node.js and Express. Currently expanding into full-stack development with React and Next.js.
            </p>
            <div className='space-y-2'>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ayinos.apaht143@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center text-gray-400 hover:text-cyan-300 transition-colors text-sm group'
              >
                <BiEnvelope className='w-5 h-5 mr-2 text-cyan-400' />
                <span className='group-hover:translate-x-1 transition-transform'>
                  ayinos.apaht143@gmail.com
                </span>
              </a>
              <div 
                onClick={() => setShowPhoneMenu(!showPhoneMenu)}
                className='flex items-center text-gray-400 hover:text-cyan-300 transition-colors text-sm group cursor-pointer relative'
              >
                <BiPhone className='w-5 h-5 mr-2 text-cyan-400' />
                <span className='group-hover:translate-x-1 transition-transform'>
                  +977 9804836355
                  {phoneCopied && <span className='text-green-400 text-xs ml-2'>✓ Copied!</span>}
                </span>

                {/* Phone Options Menu */}
                {showPhoneMenu && (
                  <div className='absolute left-0 bottom-full mb-2 bg-[#1a1a3e] border border-cyan-500/30 rounded-lg shadow-xl z-10 min-w-[200px] overflow-hidden'>
                    {phoneOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          option.action();
                          if (option.label !== 'Copy Number') setShowPhoneMenu(false);
                        }}
                        className='w-full px-4 py-3 text-left hover:bg-cyan-500/20 transition-colors flex items-center space-x-3 text-gray-300 hover:text-cyan-300'
                      >
                        <span className='text-xl'>{option.icon}</span>
                        <span className='font-medium'>{option.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold text-white mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className='text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform transition-transform inline-block'
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className='text-xl font-bold text-white mb-4'>
              Connect With Me
            </h3>
            <p className='text-gray-400 text-sm mb-4'>
              Follow me on social media for updates and tech content
            </p>
            <div className='flex space-x-3'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 border border-gray-700 hover:border-cyan-500`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 pt-6 mt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm text-center md:text-left'>
              © {currentYear} Soniya Thapa. All rights reserved.
            </p>
            <p className='text-gray-400 text-sm flex items-center'>
              Made with <FaHeart className='text-red-500 mx-1 w-4 h-4' /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
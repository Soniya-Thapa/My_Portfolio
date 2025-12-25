"use client"
import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticalBackground'

const Hero = () => {
  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0'>
      <ParticlesHero />
      
      <div className='relative z-10 w-full px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16'>
            
            {/* Image Container - Shows first on mobile */}
            <div className='flex justify-center items-center lg:order-2 lg:flex-1'>
              <div className='relative w-48 h-48 sm:w-64 sm:h-64 lg:w-125 lg:h-125 flex-shrink-0 group cursor-pointer'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 animate-pulse group-hover:animate-none'></div>
                <Image 
                  src="/images/soniya1.png"
                  alt="Soniya Thapa - Web Developer"
                  fill
                  className='rounded-full object-cover shadow-2xl border-4 border-cyan-300 group-hover:border-cyan-400 transition-all duration-500 group-hover:scale-105 relative z-10'
                  priority
                />
              </div>
            </div>
            
            {/* Text Content - Shows second on mobile */}
            <div className='text-center lg:text-left space-y-6 lg:order-1 lg:flex-1'>
              <h1 className='text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight'>
                <span className='bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent'>
                  Creating web solutions,
                </span>
                <br />
                <span className='text-white'>
                  building robust backends.
                </span>
              </h1>
              
              <div className='text-base sm:text-lg lg:text-xl text-gray-300'>
                Hi! I'm Soniya Thapa - A Passionate{' '}
                <span className='text-cyan-300 font-semibold inline-block'>
                  <Typewriter 
                    options={{
                      strings: ['Web Developer', 'Backend Developer', 'Full-Stack Developer'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              
              <p className='text-xs sm:text-sm lg:text-base text-gray-400 max-w-xl mx-auto lg:mx-0'>
                Specialized in Node.js, Express, and PostgreSQL. Currently expanding skills in React and Next.js to build full-stack applications.
              </p>
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4'>
                <button 
                  onClick={() => scrollToSection('works')}
                  className='px-6 py-3 lg:px-8 lg:py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-sm sm:text-base lg:text-lg font-medium flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105'
                  aria-label="View my work"
                >
                  See My Work <BsArrowRight className='ml-2' />
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className='px-6 py-3 lg:px-8 lg:py-4 bg-transparent border-2 border-cyan-200 hover:bg-cyan-200 hover:text-gray-900 transition-all duration-300 cursor-pointer rounded-full text-sm sm:text-base lg:text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105'
                  aria-label="Contact me"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
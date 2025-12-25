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
    <section 
      id="home" 
      className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'
      aria-label="Hero section"
    >
      <ParticlesHero />
      <div className='relative z-10 flex flex-col items-center max-w-5xl mx-auto px-4'>
        <Image 
          src="/images/soniya1.png" 
          alt="Soniya Thapa - Backend Developer Portfolio" 
          width={275} 
          height={275} 
          className='rounded-full border-8 border-[#0c0c48aa] shadow-2xl' 
          data-aos="fade-up"
          priority
        />
        <h1 
          data-aos="fade-up" 
          data-aos-delay="200" 
          className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide leading-tight'
        >
          Creating web solutions, <br /> 
          <span className='text-cyan-200'>building robust backends.</span>
        </h1>
        <h2 
          data-aos="fade-up" 
          data-aos-delay="400" 
          className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex flex-wrap items-center justify-center'
        >
          Hi! I'm Soniya Thapa - A Passionate&nbsp;
          <span className='text-cyan-200 font-bold flex items-center'>
            <Typewriter 
              options={{
                strings: [
                  'Backend Developer',
                  'Full Stack Developer',
                  'Web Developer',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: 'pl-1'
              }} 
            />
          </span>
        </h2>
        <p 
          data-aos="fade-up" 
          data-aos-delay="500"
          className='mt-4 text-gray-300 text-center max-w-2xl text-sm sm:text-base'
        >
          Specialized in Node.js, Express, and PostgreSQL. Currently expanding skills in React and Next.js to build full-stack applications.
        </p>
        <div 
          data-aos="fade-up" 
          data-aos-delay="600" 
          className='mt-8 flex flex-col sm:flex-row gap-4'
        >
          <button 
            onClick={() => scrollToSection('works')}
            className='px-8 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-base sm:text-lg font-medium flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105'
            aria-label="View my work"
          >
            <span>See My Work</span>
            <BsArrowRight className='w-5 h-5 ml-2' />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className='px-8 py-4 bg-transparent border-2 border-cyan-200 hover:bg-cyan-200 hover:text-gray-900 transition-all duration-300 cursor-pointer rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105'
            aria-label="Contact me"
          >
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
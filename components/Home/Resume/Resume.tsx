import React from 'react'
import ResumeCard from './ResumeCard'
import { FaServer, FaCode, FaDatabase } from 'react-icons/fa'
import { BsBook, BsAward, BsLaptop } from 'react-icons/bs'
import { SiNodedotjs } from 'react-icons/si'
import { MdWorkOutline } from 'react-icons/md'

const Resume = () => {
  return (
    <section 
      id="resume" 
      className='pt-20 pb-16 bg-gradient-to-b from-[#0a1024] to-[#16213e]' 
      aria-labelledby="resume-heading"
    >
      <div className='max-w-7xl mx-auto px-4'>
        <h2 
          id="resume-heading"
          className='text-center text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-16'
        >
          My <span className='text-cyan-200'>Journey</span>
        </h2>

        <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16'>
          {/* Work Experience */}
          <div>
            <h3 className='text-2xl sm:text-3xl font-bold text-white mb-2'>
              Work <span className='text-cyan-200'>Experience</span>
            </h3>
            <p className='text-gray-400 mb-8'>Professional journey and projects</p>
            
            <div className='space-y-6' data-aos="fade-right" data-aos-anchor-placement="top-center">
              <ResumeCard 
                Icon={MdWorkOutline}
                role="Backend Development Intern"
                institution="E-Prabidhi Pvt. Ltd."
                date="Aug 2025 - Nov 2025"
                description="Gained hands-on experience in backend development, working on real-world projects and learning industry best practices in API development and database management."
                skills={['Node.js', 'Express', 'API Development', 'Team Collaboration']}
              />
              <ResumeCard 
                Icon={FaDatabase}
                role="Note Management System (MIS)"
                institution="Personal Project"
                date="2025"
                description="Developing a comprehensive note management system with backend API, authentication using JWT, database integration with PostgreSQL, and proper error handling. Currently 60% complete with full backend functionality."
                skills={['Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API']}
              />
              <ResumeCard 
                Icon={SiNodedotjs}
                role="Backend Development Skills"
                date="2024 - Present"
                description="Building RESTful APIs with Node.js and Express, implementing secure authentication, managing databases (PostgreSQL, MySQL), and testing endpoints thoroughly with Postman."
                skills={['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'Postman']}
              />
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className='text-2xl sm:text-3xl font-bold text-white mb-2'>
              My <span className='text-cyan-200'>Education</span>
            </h3>
            <p className='text-gray-400 mb-8'>Academic background and training</p>
            
            <div className='space-y-6' data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
              <ResumeCard 
                Icon={BsBook}
                role="Bachelor in Computer Science and Information Technology (BSc.CSIT)"
                institution="Padma Kanya Multiple Campus, Tribhuvan University"
                date="2023 - 2026"
                description="Pursuing a comprehensive 4-year undergraduate degree in computer science, covering software engineering, database systems, web technologies, data structures, algorithms, and modern development practices."
              />
              <ResumeCard 
                Icon={BsAward}
                role="Full Stack Development Training"
                institution="Online Course"
                date="May 2025 - Jul 2025"
                description="Completed intensive 3-month online training program covering full stack web development, including Node.js, Express, React, Next.js, database management, and modern development workflows."
                skills={['Node.js', 'Express', 'React', 'Next.js', 'PostgreSQL', 'MySQL']}
              />
              <ResumeCard 
                Icon={BsLaptop}
                role="Self-Learning & Development"
                date="2024 - Present"
                description="Continuously expanding technical skills through online resources, documentation, and practical project development. Currently learning React, Next.js, and Tailwind CSS to complement backend expertise."
                skills={['JavaScript', 'TypeScript', 'Git', 'Tailwind CSS']}
              />
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className='mt-16 flex justify-center' data-aos="fade-up">
          <a 
            href="/resume/Soniya-Thapa-Resume.pdf" 
            download="Soniya-Thapa-Resume.pdf"
            className='px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 flex items-center gap-2'
            aria-label="Download Soniya Thapa's resume"
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
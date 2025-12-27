 import Image from 'next/image'
import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiNodedotjs, SiExpress, SiPostgresql, SiReact } from 'react-icons/si'

const Projects = () => {
  const projects = [
      {
        title: "Note Management System (MIS)",
        description: "A comprehensive backend system for managing notes with user authentication, CRUD operations, and secure data storage. Features JWT-based authentication, RESTful API endpoints, and MySQL database integration.",
        category: "Backend Development",
        status: "In Progress (60% Complete)",
        technologies: ["Node.js", "Express", "MySQL", "JWT", "REST API" ,"Postman"],
        image: "/images/MIS.png",
        github: "https://github.com/Soniya-Thapa/MIS_Backend.git", // Add your GitHub link here
        demo: null, // No demo yet since backend only
        highlights: [
          "JWT Authentication & Authorization",
          "RESTful API with proper error handling",
          "MySql database with optimized queries",
          "Tested with Postman"
        ]
      },
      {
        title: "Training Platform as a SaaS",
        description: "Currently building full-stack applications to combine backend expertise with modern frontend technologies. Working on React and Next.js applications integrated with Node.js backends.",
        category: "Full Stack Development",
        status: "In Development",
        technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "MySQL"],
        image: "/images/trainingimage.png",
        github: "https://github.com/Soniya-Thapa/Training_Platform_as_a_SaaS.git",
        demo: null,
        highlights: [
          "React component development",
          "Next.js routing and SSR",
          "Tailwind CSS styling",
          "Frontend-backend integration"
        ]
      },
      {
        title: "Portfolio Website",
        description: "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and showcases backend development skills and projects.",
        category: "Web Development",
        status: "Completed",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
        image: "/images/Portfolioimage.png",
        github: "https://github.com/Soniya-Thapa/My_Portfolio.git",
        demo: "#",
        highlights: [
          "Responsive design",
          "Smooth scroll navigation",
          "SEO optimized",
          "Modern UI/UX"
        ]
      }
    ];

  return (
    <section 
      id="works" 
      className='pt-20 pb-16 bg-gradient-to-b from-[#16213e] to-[#0a1024]'
      aria-labelledby="projects-heading"
    >
      <div className='max-w-7xl mx-auto px-4'>
        <h2 
          id="projects-heading"
          className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-4'
        >
          My Recent <span className='text-cyan-300'>Projects</span>
        </h2>
        <p className='text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16'>
          Backend-focused projects and full-stack applications I'm working on
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10'>
          {projects.map((project, index) => (
            <article 
              key={project.title}
              data-aos="fade-up" 
              data-aos-anchor-placement="top-center" 
              data-aos-delay={index * 100}
              className='bg-[#1a1a3e] rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/20'
            >
              {/* Project Image */}
              <div className='relative h-48 overflow-hidden bg-gray-900'>
                <Image 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  width={800} 
                  height={650} 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4'>
                  <span className='px-3 py-1 bg-cyan-500/90 text-white text-xs font-semibold rounded-full'>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className='p-5'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-cyan-400 text-xs font-medium'>
                    {project.category}
                  </span>
                </div>

                <h3 className='text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors'>
                  {project.title}
                </h3>

                <p className='text-gray-400 text-xs sm:text-sm mb-3 leading-relaxed line-clamp-3'>
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <ul className='mb-3 space-y-1'>
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className='text-gray-400 text-xs flex items-start'>
                        <span className='text-cyan-400 mr-2'>•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                <div className='flex flex-wrap gap-1.5 mb-3'>
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className='px-2 py-0.5 bg-blue-900/40 text-blue-300 rounded-full text-xs font-medium border border-blue-700/50'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className='flex gap-4 pt-3 border-t border-gray-700'>
                  {project.github && (
                    <a 
                      href={project.github}
                      className='flex items-center gap-1.5 text-gray-300 hover:text-cyan-400 transition-colors text-xs font-medium'
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub className='w-3.5 h-3.5' />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      className='flex items-center gap-1.5 text-gray-300 hover:text-cyan-400 transition-colors text-xs font-medium'
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt className='w-3.5 h-3.5' />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center' data-aos="fade-up">
          <p className='text-gray-400 mb-6'>
            More projects coming soon as I continue learning and building!
          </p>
          <a 
            href="https://github.com/Soniya-Thapa" 
            target="_blank"
            rel="noopener noreferrer"
            className='inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium transition-all duration-300 border border-gray-700 hover:border-cyan-500'
            aria-label="View all projects on GitHub"
          >
            <FaGithub className='w-5 h-5' />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
"use client"
import React from 'react'
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiExpress, SiPostgresql, SiMysql, SiGit, SiPostman } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    percentage: 80,
    level: "Proficient"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    percentage: 65,
    level: "Intermediate"
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    percentage: 85,
    level: "Proficient"
  },
  {
    name: "Express",
    icon: <SiExpress />,
    percentage: 85,
    level: "Proficient"
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    percentage: 75,
    level: "Proficient"
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    percentage: 75,
    level: "Proficient"
  },
  {
    name: "React.js",
    icon: <SiReact />,
    percentage: 45,
    level: "Learning"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    percentage: 40,
    level: "Learning"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    percentage: 40,
    level: "Learning"
  },
  {
    name: "Git",
    icon: <SiGit />,
    percentage: 65,
    level: "Intermediate"
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    percentage: 80,
    level: "Proficient"
  },
]

const Skills = () => {
  // Group skills by category
  const backendSkills = skills.filter(s => 
    ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'Postman'].includes(s.name)
  );
  const frontendSkills = skills.filter(s => 
    ['React.js', 'Next.js', 'Tailwind CSS'].includes(s.name)
  );
  const coreSkills = skills.filter(s => 
    ['JavaScript', 'TypeScript', 'Git'].includes(s.name)
  );

  const SkillCard = ({ skill, index }: { skill: typeof skills[0], index: number }) => (
    <Tilt key={skill.name} scale={1.08} transitionSpeed={400}>
      <div 
        className='bg-gradient-to-br from-[#1a1a3e] to-[#252550] text-center w-36 h-44 rounded-2xl flex flex-col items-center justify-center shadow-lg border border-gray-800 hover:border-cyan-500 transition-all duration-300 group relative overflow-hidden'
      >
        {/* Background gradient effect on hover */}
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300' />
        
        <div className='relative z-10'>
          <div className='text-5xl mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:scale-110 transform transition-transform'>
            {skill.icon}
          </div>
          
          <p className='text-2xl font-bold text-white mb-1'>
            {skill.percentage}%
          </p>
          
          <p className='text-cyan-300 font-semibold text-sm mb-1'>
            {skill.name}
          </p>
          
          <span className='text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full'>
            {skill.level}
          </span>
        </div>
      </div>
    </Tilt>
  );

  return (
    <section 
      id="skills" 
      className='text-white pt-20 pb-16 bg-gradient-to-b from-[#16213e] to-[#0a1024]'
      aria-labelledby="skills-heading"
    >
      <div className='max-w-7xl mx-auto px-4'>
        <h2 
          id="skills-heading"
          className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-4'
        >
          My <span className='text-cyan-300'>Skills</span>
        </h2>
        <p className='text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16'>
          Technologies and tools I work with, from backend development to full-stack solutions
        </p>

        {/* Core Programming Skills */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-white mb-8 text-center md:text-left'>
            <span className='text-cyan-400'>Core</span> Programming
          </h3>
          <div className='flex flex-wrap justify-center md:justify-start gap-6'>
            {coreSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-white mb-8 text-center md:text-left'>
            <span className='text-cyan-400'>Backend</span> Development
          </h3>
          <div className='flex flex-wrap justify-center md:justify-start gap-6'>
            {backendSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Frontend Skills */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-white mb-8 text-center md:text-left'>
            <span className='text-cyan-400'>Frontend</span> Development <span className='text-sm text-gray-400 font-normal'>(Currently Learning)</span>
          </h3>
          <div className='flex flex-wrap justify-center md:justify-start gap-6'>
            {frontendSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className='text-center bg-[#1a1a3e] rounded-xl p-8 border border-gray-800'>
          <p className='text-gray-300 text-lg mb-4'>
            <span className='text-cyan-400 font-semibold'>Continuous Learning:</span> Actively expanding my skillset by learning React, Next.js, and Tailwind CSS to become a full-stack developer.
          </p>
          <div className='flex flex-wrap justify-center gap-3 mt-6'>
            <span className='px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30'>
              ✓ Proficient in Backend
            </span>
            <span className='px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30'>
              📚 Learning Frontend
            </span>
            <span className='px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30'>
              🎯 Future Goal: Exploring Cloud Fundamentals
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
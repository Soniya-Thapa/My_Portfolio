import React from 'react'
import { IconType } from 'react-icons';

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  description?: string;
  institution?: string;
  skills?: string[];
}

const ResumeCard = ({ Icon, role, date, description, institution, skills }: Props) => {
  return (
    <article className='mb-6 group'>
      <div className='flex items-start space-x-4 sm:space-x-6 bg-[#1a1a3e]/40 hover:bg-[#1a1a3e]/70 border border-gray-800 hover:border-cyan-500 transition-all duration-300 p-4 sm:p-6 rounded-xl'>
        <div className='sm:w-14 sm:h-14 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
          <Icon className='sm:w-7 sm:h-7 w-6 h-6 text-white' />
        </div>
        
        <div className='flex-1 min-w-0'>
          {date && (
            <span className='inline-block mb-3 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs sm:text-sm font-semibold'>
              {date}
            </span>
          )}
          
          <h3 className='text-gray-100 text-lg sm:text-xl font-bold mb-1 group-hover:text-cyan-200 transition-colors duration-300'>
            {role}
          </h3>
          
          {institution && (
            <p className='text-cyan-400 text-sm sm:text-base font-medium mb-2'>
              {institution}
            </p>
          )}
          
          {description && (
            <p className='text-gray-400 text-sm sm:text-base leading-relaxed mt-3'>
              {description}
            </p>
          )}

          {skills && skills.length > 0 && (
            <div className='flex flex-wrap gap-2 mt-4'>
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className='px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-xs font-medium border border-blue-700/50'
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default ResumeCard
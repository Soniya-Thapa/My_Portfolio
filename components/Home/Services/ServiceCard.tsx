import Image from 'next/image';
import React from 'react'

type Props = {
  icon: string;
  name: string;
  description: string;
}

const ServiceCard = ({ description, icon, name }: Props) => {
  return (
    <article className='bg-[#1a1a3e] p-6 rounded-xl hover:bg-[#252550] transition-all duration-300 cursor-pointer border border-gray-800 hover:border-cyan-500 h-full flex flex-col group hover:shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-2'>
      <div className='bg-[#0c0c48] w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-cyan-600 transition-all duration-300'>
        <Image 
          src={icon} 
          alt={`${name} service icon`}
          width={40} 
          height={40}
          className='object-contain'
        />
      </div>
      
      <h3 className='mt-6 text-xl md:text-2xl font-bold text-gray-200 group-hover:text-cyan-200 transition-colors duration-300'>
        {name}
      </h3>
      
      <p className='mt-4 text-gray-400 text-sm md:text-base leading-relaxed flex-grow'>
        {description}
      </p>
      
      <div className='mt-6 pt-4 border-t border-gray-700 group-hover:border-cyan-500 transition-colors duration-300'>
        <span className='text-cyan-400 text-sm font-medium inline-flex items-center'>
          Learn more 
          <svg 
            className='w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300' 
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24'
          >
            <path 
              strokeLinecap='round' 
              strokeLinejoin='round' 
              strokeWidth={2} 
              d='M13 7l5 5m0 0l-5 5m5-5H6' 
            />
          </svg>
        </span>
      </div>
    </article>
  )
}

export default ServiceCard
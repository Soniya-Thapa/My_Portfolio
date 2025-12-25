import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const services = [
    {
      icon: "/images/s1.png",
      name: "Backend Development",
      description: "Building robust server-side applications with Node.js and Express, implementing RESTful APIs with proper authentication and error handling."
    },
    {
      icon: "/images/s2.png",
      name: "Database Design",
      description: "Designing and managing efficient database structures using PostgreSQL and MySQL for optimal data storage and retrieval."
    },
    {
      icon: "/images/s3.png",
      name: "API Development",
      description: "Creating secure and scalable APIs with JWT authentication, comprehensive route handling, and thorough Postman testing."
    },
    {
      icon: "/images/s4.png",
      name: "Full Stack Solutions",
      description: "Developing complete web applications combining backend expertise with modern frontend technologies like React and Next.js."
    }
  ];

  return (
    <section 
      id="services" 
      className='pt-20 pb-16 bg-gradient-to-b from-[#090d1d] to-[#16213e]'
      aria-labelledby="services-heading"
    >
      <div className='max-w-7xl mx-auto px-4'>
        <h2 
          id="services-heading"
          className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-4'
        >
          Services I Offer
        </h2>
        <p className='text-center text-gray-300 text-lg max-w-3xl mx-auto mb-16'>
          Specializing in backend development and expanding into full-stack solutions to deliver complete web applications
        </p>
        
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 items-stretch'>
          {services.map((service, index) => (
            <div 
              key={service.name}
              data-aos="fade-up" 
              data-aos-anchor-placement="top-center"
              data-aos-delay={index * 100}
              className='h-full'
            >
              <ServiceCard 
                icon={service.icon}
                name={service.name}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
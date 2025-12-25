"use client"
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, [])

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Soniya Thapa",
    "url": "https://soniyathapa.com.np", // Replace with your actual domain
    "image": "https://soniyathapa.com.np/images/soniya1.png",
    "jobTitle": "Backend Developer",
    "description": "Backend Developer specializing in Node.js, Express, PostgreSQL, and MySQL",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhaktapur",
      "addressRegion": "Bagmati",
      "addressCountry": "Nepal"
    },
    "email": "ayinos.apaht143@gmail.com",
    "telephone": "+977-9804836355",
    "sameAs": [
      "https://github.com/yourprofile", // Add your actual links
      "https://linkedin.com/in/yourprofile",
      "https://facebook.com/yourprofile",
      "https://instagram.com/yourprofile"
    ],
    "knowsAbout": [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Backend Development",
      "API Development",
      "Database Design"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Padma Kanya Multiple Campus",
      "url": "https://www.pkmcampus.edu.np"
    }
  };

  return (
    <>
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="overflow-hidden">
        <Hero />
        <Services />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
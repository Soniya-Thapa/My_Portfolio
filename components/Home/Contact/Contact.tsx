"use client"
import React, { useState } from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setSubmitStatus('idle');

    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    // Create Gmail compose link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=ayinos.apaht143@gmail.com&su=${subject}&body=${body}`,
      '_blank'
    );
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const socialLinks = [
    {
      icon: <FaFacebookF className='text-white w-6 h-6' />,
      url: 'https://www.facebook.com/soniya.thapa.77736310',
      label: 'Facebook',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: <FaLinkedin className='text-white w-6 h-6' />,
      url: 'https://www.linkedin.com/in/soniya-thapa-42227b320/',
      label: 'LinkedIn',
      hoverColor: 'hover:bg-sky-700'
    },
    {
      icon: <FaGithub className='text-white w-6 h-6' />,
      url: 'https://github.com/Soniya-Thapa',
      label: 'GitHub',
      hoverColor: 'hover:bg-gray-800'
    },
    {
      icon: <FaInstagram className='text-white w-6 h-6' />,
      url: 'https://www.instagram.com/apaht_ayinos/',
      label: 'Instagram',
      hoverColor: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500'
    }
  ];

  return (
    <section 
      id="contact" 
      className='pt-20 pb-16 bg-gradient-to-b from-[#0a1024] to-[#16213e]'
      aria-labelledby="contact-heading"
    >
      <div className='max-w-7xl mx-auto px-4'>
        <h2 
          id="contact-heading"
          className='text-center text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-16'
        >
          Get In <span className='text-cyan-300'>Touch</span>
        </h2>

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mb-4'>
              Let's work together on your next project
            </h3>
            <p className='text-gray-400 mt-4 text-base sm:text-lg leading-relaxed'>
              I'm currently available for work and open to discussing new opportunities. Feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className='mt-10 space-y-6'>
              <div 
                onClick={() => setShowPhoneMenu(!showPhoneMenu)}
                className='flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300 cursor-pointer relative'
              >
                <div className='w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors'>
                  <BiPhone className='w-6 h-6 text-cyan-300' />
                </div>
                <div>
                  <p className='text-sm text-gray-500 font-medium'>
                    Phone {phoneCopied && <span className='text-green-400 text-xs ml-1'>✓ Copied!</span>}
                  </p>
                  <p className='text-lg font-semibold text-gray-300 group-hover:text-cyan-300 transition-colors'>
                    +977 9804836355
                  </p>
                </div>

                {/* Phone Options Menu */}
                {showPhoneMenu && (
                  <div className='absolute left-0 top-16 bg-[#1a1a3e] border border-cyan-500/30 rounded-lg shadow-xl z-10 min-w-[200px] overflow-hidden'>
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

              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ayinos.apaht143@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300'
              >
                <div className='w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors'>
                  <BiEnvelope className='w-6 h-6 text-cyan-300' />
                </div>
                <div>
                  <p className='text-sm text-gray-500 font-medium'>Email</p>
                  <p className='text-lg font-semibold text-gray-300 group-hover:text-cyan-300 transition-colors break-all'>
                    ayinos.apaht143@gmail.com
                  </p>
                </div>
              </a>

              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center'>
                  <BiMap className='w-6 h-6 text-cyan-300' />
                </div>
                <div>
                  <p className='text-sm text-gray-500 font-medium'>Location</p>
                  <p className='text-lg font-semibold text-gray-300'>
                    Kaushaltar, Bhaktapur, Nepal
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className='mt-10'>
              <p className='text-gray-400 mb-4 font-medium'>Connect with me:</p>
              <div className='flex items-center space-x-4'>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border border-gray-700 hover:border-cyan-500 ${social.hoverColor} hover:scale-110 hover:shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            data-aos="fade-left" 
            data-aos-anchor-placement="top-center"
            className='md:p-10 p-6 bg-[#1a1a3e] rounded-2xl border border-gray-800 shadow-xl'
          >
            <h3 className='text-2xl font-bold text-white mb-6'>Send me a message</h3>
            
            <div className='space-y-5'>
              <div>
                <label htmlFor="name" className='text-sm text-gray-400 mb-2 block'>
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='John Doe'
                  className='px-4 py-3.5 bg-[#252550] text-white outline-none rounded-lg w-full placeholder:text-gray-500 border border-gray-700 focus:border-cyan-500 transition-colors'
                />
              </div>

              <div>
                <label htmlFor="email" className='text-sm text-gray-400 mb-2 block'>
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='john@example.com'
                  className='px-4 py-3.5 bg-[#252550] text-white outline-none rounded-lg w-full placeholder:text-gray-500 border border-gray-700 focus:border-cyan-500 transition-colors'
                />
              </div>

              <div>
                <label htmlFor="phone" className='text-sm text-gray-400 mb-2 block'>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='+977 9800000000'
                  className='px-4 py-3.5 bg-[#252550] text-white outline-none rounded-lg w-full placeholder:text-gray-500 border border-gray-700 focus:border-cyan-500 transition-colors'
                />
              </div>

              <div>
                <label htmlFor="message" className='text-sm text-gray-400 mb-2 block'>
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell me about your project...'
                  rows={5}
                  className='px-4 py-3.5 bg-[#252550] text-white outline-none rounded-lg w-full placeholder:text-gray-500 border border-gray-700 focus:border-cyan-500 transition-colors resize-none'
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className='bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg text-sm'>
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className='bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm'>
                  ⚠ Please fill in all required fields.
                </div>
              )}

              <button
                onClick={handleSubmit}
                className='w-full mt-6 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 cursor-pointer text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transform hover:scale-[1.02]'
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
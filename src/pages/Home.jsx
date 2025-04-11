import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hero from '../assets/hero.png';
import { GiCheckMark } from "react-icons/gi";
import './home.css';
import HomeAbout from '../components/HomeAbout';
import Whychoose from '../components/Whychoose';
import Homeservices from '../components/Homeservices';
import HomeIndustry from '../components/HomeIndustry';
import LastAbout from '../components/LastAbout';
import Blog from '../components/Blog';

const slides = [
  {
    title: "HR Compliance for UKVI Sponsorship",
    subtitle: "Empower Your Workforce: Professional HR & Payroll Solutions for Every Stage of the Employee Lifecycle",
    points: [
      'UnayHR is more than just another HR and Payroll software provider. We are your trusted partner, dedicated to supporting your businesses at every stage.',
      'Our wide range of services is designed to simplify and streamline.',
      'Handling Your Legal Requirements in Compliance with UK Regulatory Framework'
    ]
  },
  {
    title: "Efficient Onboarding and Payroll",
    subtitle: "Streamline Your HR Process with Automated Payroll, Compliance, and Onboarding Tools",
    points: [
      'Onboard employees quickly with a paperless system.',
      'Automate salary calculations and payslips.',
      'Ensure full compliance with UK labor laws.'
    ]
  },
  {
    title: "Dedicated Support & Insights",
    subtitle: "Make Data-Driven HR Decisions with Real-Time Reports and Expert Support",
    points: [
      'Access insights on workforce trends and compliance.',
      'Work with our dedicated HR experts to solve challenges.',
      'Stay ahead with predictive analytics and HR forecasting.'
    ]
  }
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div>
      <section className='font-lora py-20 bg-gray-800 text-white'>
        <div className='relative overflow-hidden mx-5 lg:mx-20'>
          <AnimatePresence mode='wait'>
            <motion.div 
              key={index}
              className='flex flex-col lg:flex-row justify-center items-center gap-5'
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={containerVariants}
            >
              <motion.div 
                className='flex flex-col lg:w-1/2 justify-start items-start gap-5 order-2 lg:order-1'
                variants={itemVariants}
              >
                <h1 className='text-lg lg:text-2xl font-semibold'>
                  {slides[index].title}
                </h1>

                <h1 className='text-lg lg:text-xl font-medium'>
                  {slides[index].subtitle}
                </h1>

                <ul className='flex flex-col gap-4'>
                  {slides[index].points.map((text, i) => (
                    <motion.div key={i} className='flex items-center gap-2' variants={itemVariants}>
                      <span className='text-[#2f92d3]'><GiCheckMark /></span>
                      <li>{text}</li>
                    </motion.div>
                  ))}
                </ul>

                <motion.button 
                  className='bg-[#244874] text-white px-6 py-2 rounded-xl'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Contact
                </motion.button>
              </motion.div>

              <motion.div className='order-1 lg:order-2' variants={itemVariants}>
                <img src={hero} alt="Hero" />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-[#244874]' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <HomeAbout />
      <Whychoose />
      <Homeservices />
      <LastAbout />
      <HomeIndustry />
      <Blog />
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import hero from '../assets/hero.png';
import { GiCheckMark } from "react-icons/gi";
import './home.css';
import HomeAbout from '../components/HomeAbout';
import Whychoose from '../components/Whychoose';
import Homeservices from '../components/Homeservices';

export default function Home() {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <section className='font-lora py-20 bg-gradient-to-tr from-[#4b98cb] to-white text'>
        <motion.div 
          className='flex flex-col lg:flex-row justify-center items-center mx-5 lg:mx-20 gap-5'
          initial='hidden' 
          animate='visible' 
          variants={containerVariants}
        >
          <motion.div 
            className='flex flex-col lg:w-1/2 justify-start items-start gap-5 order-2 lg:order-1'
            variants={itemVariants}
          >
            <h1 className='text-lg lg:text-2xl font-semibold'>
              HR Compliance for <span className='text-[#2f92d3]'>UKVI Sponsorship</span>
            </h1>

            <h1 className='text-lg lg:text-xl font-medium'>
              Empower Your Workforce: Professional HR & Payroll Solutions for Every Stage of the Employee Lifecycle
            </h1>

            <ul className='flex flex-col gap-4'>
              {[
                'UnayHR is more than just another HR and Payroll software provider. We are your trusted partner, dedicated to supporting your businesses at every stage.',
                'Our wide range of services is designed to simplify and streamline.',
                'Handling Your Legal Requirements in Compliance with UK Regulatory Framework'
              ].map((text, index) => (
                <motion.div 
                  key={index} 
                  className='flex items-center gap-2' 
                  variants={itemVariants}
                >
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
      </section>
      <HomeAbout/>
<Whychoose/>
<Homeservices/>
    </div>
  );
}

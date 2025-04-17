import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeAbout from '../components/HomeAbout';
import Whychoose from '../components/Whychoose';
import Homeservices from '../components/Homeservices';
import HomeIndustry from '../components/HomeIndustry';
import LastAbout from '../components/LastAbout';
import Blog from '../components/Blog';
import left from '../assets/home/left.png'
import lbottom from '../assets/home/lbottom.png'
import center from '../assets/home/center.png'
import right from '../assets/home/right.png'
import rbottom from '../assets/home/rbottom.png'
import { useNavigate } from 'react-router-dom';
import Leave from '../components/Leave';

// const slides = [
//   {
//     title: "HR Compliance for UKVI Sponsorship",
//     subtitle: "Empower Your Workforce: Professional HR & Payroll Solutions for Every Stage of the Employee Lifecycle",
//     points: [
//       'UnayHR is more than just another HR and Payroll software provider. We are your trusted partner, dedicated to supporting your businesses at every stage.',
//       'Our wide range of services is designed to simplify and streamline.',
//       'Handling Your Legal Requirements in Compliance with UK Regulatory Framework'
//     ]
//   },
//   {
//     title: "Efficient Onboarding and Payroll",
//     subtitle: "Streamline Your HR Process with Automated Payroll, Compliance, and Onboarding Tools",
//     points: [
//       'Onboard employees quickly with a paperless system.',
//       'Automate salary calculations and payslips.',
//       'Ensure full compliance with UK labor laws.'
//     ]
//   },
//   {
//     title: "Dedicated Support & Insights",
//     subtitle: "Make Data-Driven HR Decisions with Real-Time Reports and Expert Support",
//     points: [
//       'Access insights on workforce trends and compliance.',
//       'Work with our dedicated HR experts to solve challenges.',
//       'Stay ahead with predictive analytics and HR forecasting.'
//     ]
//   }
// ];


export default function Home() {

const navigate = useNavigate();

  return (
    <div>
      <section className='font-lora py-20 bg-[#101941] text-white'>

        <div className='flex flex-col gap-8 justify-center mx-5 lg:mx-0 text-center md:text-left items-center'>
          <h1 style={{letterSpacing:"5px"}} className='text-4xl font-semibold'>Payroll simplified, efficient, and compliant</h1>
          <p className='text-lg leading-loose'>Streamline your payroll operations and empower your workforce with UnayHR's modern payroll solutions—designed for
             growing businesses.</p>
            <div className='flex flex-col gap-5 w-full md:flex-row md:w-fit lg:gap-10'>
              <button
              onClick={()=>navigate("/pricing")}
              style={{letterSpacing:"5px"}} className='bg-white rounded-md text-[#101941] px-6 py-3 text-sm lg:text-lg'>Our Pricing</button>
              <button 
              onClick={()=>navigate("/contact")}
              style={{letterSpacing:"5px"}} className='bg-transparent rounded-md border px-6 py-3 text-sm lg:text-lg'>Contact us</button>
            </div>
        </div>

        {/* Image section */}
        <div className='flex gap-10 lg:mx-20 mx-3 py-10'>
  {/* Left Side */}
  <motion.div
    className='lg:w-1/5 hidden lg:flex flex-col gap-5 mt-20'
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img className='rounded-2xl' src={left} alt="" />
    <div className="relative">
      <div className="absolute w-full h-full z-10 bg-white/55 backdrop-blur-3xl shadow-md rounded-2xl border border-black/30"></div>
      <img className="relative z-50 rounded-2xl" src={lbottom} alt="" />
    </div>
  </motion.div>

  {/* Center Image */}
  <motion.div
    className='lg:w-3/5'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <img className='rounded-2xl' src={center} alt="" />
  </motion.div>

  {/* Right Side */}
  <motion.div
    className='hidden lg:flex flex-col gap-5 lg:w-1/5 mt-20'
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    <img className='rounded-2xl border-white/30 border' src={right} alt="" />
    <img className='rounded-2xl' src={rbottom} alt="" />
  </motion.div>
</div>

      </section>

      <HomeAbout />
      <Leave/>
      <Homeservices />
      <Whychoose />
      <LastAbout />
      <HomeIndustry />
      <Blog />
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import hr from '../assets/hr.webp';

export default function LastAbout() {
  return (
    <section className='font-lora lg:mx-20 mx-5 py-10'>
      <div className='flex flex-col lg:flex-row gap-10 items-center'>
        <motion.div 
          className='lg:w-1/2 w-full' 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
            <img className='rounded-xl shadow-lg' src={hr} alt='HR image' />
        </motion.div>
        <motion.div 
          className='lg:w-1/2 w-full space-y-6' 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
            <h1 className='text-xl lg:text-2xl font-bold text-gray-800'>End-to-End HR & Payroll Solutions: Compliance, Efficiency, and Growth</h1>
            <div className='space-y-4'>
                {[
                    { title: "Comprehensive HR and Payroll Solutions", text: "Tailored for every stage of the employee lifecycle." },
                    { title: "UKVI Sponsorship Compliance", text: "Expert support to handle your legal requirements within the UK regulatory framework." },
                    { title: "Streamlined Processes", text: "Designed to simplify and enhance your HR management." },
                    { title: "Dedicated Partnership", text: "More than just software; we are your trusted HR partner." },
                    { title: "Expert Team", text: "Ensuring your business meets all regulatory requirements." },
                    { title: "Focus on Growth", text: "Allowing you to concentrate on growing your business while we manage HR complexities." }
                ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                        <h2 className='text-lg font-semibold text-gray-700'>{item.title}</h2>
                        <p className='text-gray-600 text-sm'>{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}

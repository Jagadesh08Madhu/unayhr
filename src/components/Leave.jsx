import React from 'react';
import { motion } from 'framer-motion';
import leave from '../assets/leave.png';

export default function Leave() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section 
      className='bg-[#000B2A] text-white z-50 font-lora py-10'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className='flex flex-col justify-center items-center gap-5 lg:mx-20 mx-5'>
        <motion.h1 className='text-lg' variants={itemVariants}>
          Leave and Attendance
        </motion.h1>

        <motion.p className='text-4xl font-semibold text-center' variants={itemVariants}>
          Manage leave and attendance, built-in.
        </motion.p>

        <motion.p className='lg:w-1/2 text-center' variants={itemVariants}>
          Design your own leave policies, let employees apply with ease, approve or decline requests,
          and track attendance – all seamlessly integrated within UnayHR Payroll.
        </motion.p>

        <motion.img 
          className='lg:w-2/3 mt-4' 
          src={leave} 
          alt="Leave" 
          variants={itemVariants}
        />
      </div>
    </motion.section>
  );
}

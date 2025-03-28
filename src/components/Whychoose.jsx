import React from 'react';
import { motion } from 'framer-motion';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import whychoose from '../assets/whychoose.jpg';

export default function Whychoose() {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='font-lora lg:mx-10 mx-5'>
      <motion.div 
        className='flex flex-col lg:flex-row items-center gap-5'
        initial='hidden' 
        whileInView='visible' 
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Image Section */}
        <motion.div className='lg:w-1/2 lg:order-2' variants={itemVariants}>
          <img className='shadow-xl rounded-xl lg:p-10' src={whychoose} alt="Why choose UnayHR" />
        </motion.div>

        {/* Content Section */}
        <motion.div className='lg:w-1/2 flex flex-col gap-3 lg:order-1' variants={itemVariants}>
          <h1 style={{ letterSpacing: "3px" }} className='lg:text-4xl text-2xl font-semibold'>
            WHY CHOOSE UnayHR?
          </h1>

          <p className='text-lg leading-relaxed'>
            We are dedicated to using our expertise and excellence to redefine payroll and HR management. <span className='font-bold'>We provide revolutionary software 
            solutions that simplify complex processes while guaranteeing accuracy and efficiency on every task.</span> By choosing UnayHR, you’re 
            not just adopting new technology; you’re committing to a time when payroll and HR will operate together seamlessly to support 
            your team and grow your business. <span className='font-bold'>Discover how UnayHR may transform your workplace</span> and pave the way for a more motivated and 
            productive staff.
          </p>

          <ul className='flex flex-col gap-3'>
            {[
              "As your trusted advisor, I recommend UnayHR for its excellent UKVI visa compliance and thorough adherence to the UK's complex HR laws.",
              "It simplifies payroll and ensures legal compliance, giving you the best peace-of-mind experience.",
              "UnayHR ensures that your business practices meet strict regulatory standards and are ready for future law changes.",
              "Take on HR compliance with confidence and security with UnayHR."
            ].map((text, index) => (
              <motion.li key={index} className='flex items-center gap-2' variants={itemVariants}>
                <span className='text-[#2f92d3] text-xl'><IoMdCheckmarkCircleOutline /></span>
                {text}
              </motion.li>
            ))}
          </ul>

        </motion.div>
      </motion.div>
    </section>
  );
}

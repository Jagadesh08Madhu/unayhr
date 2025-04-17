import React from 'react';
import { motion } from 'framer-motion';
import about from '../assets/about.png';
import { VscActivateBreakpoints } from "react-icons/vsc";

export default function HomeAbout() {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='py-20 font-lora mx-5 lg:mx-10'>
      <motion.div 
        className='flex flex-col lg:flex-row gap-5 '
        initial='hidden' 
        whileInView='visible' 
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Image section */}
        <motion.div className='lg:w-1/2 sticky top-0 self-start' variants={itemVariants}>
          <img src={about} alt="about unayhr" />
        </motion.div>

        {/* Content section */}
        <motion.div className='lg:w-1/2 flex flex-col gap-5' variants={itemVariants}>
          <h1 className='text-2xl lg:text-4xl'>
            Empower your workflow with <span className='text-[#273ea3]'>UnayHR Payroll</span>
          </h1>

          <ul className='flex flex-col gap-3'>
            {[
              'UnayHR Payroll manages employees salaries, wages, bonuses',
              'Auto-run payslips based on attendance',
              'Option for manual payslip generation for flexibility',
              'Time & Attendance Management',
              'Rota & Holiday Management',
              'Employee Task Tracking',
              'Dedicated staff panel for payslip privacy',
              'Customized Payslip Design',
              'Print Payslip in Multilanguage (16 Languages)',
              'Unlimited Dedicated Training and Support'
            ].map((text, index) => (
              <motion.li key={index} className='flex items-center gap-2' variants={itemVariants}>
                <span className='text-[#2f92d3] text-xl'><VscActivateBreakpoints /></span>
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
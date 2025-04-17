import React from 'react';
import { motion } from 'framer-motion';
import payroll from '../assets/payroll.png';
import time from '../assets/time.png';
import customized from '../assets/customized.png';
import automated from '../assets/automated.png';
import traning from '../assets/traning.png';
import staff from '../assets/private.png';

export default function Homeservices() {
  const Services = [
    {
      img: payroll,
      heading: 'UnayHR Payroll',
      content: 'Manages staff compensation efficiently by generating Unlimited Payslips that comprise attendance management, salaries, wages, and bonuses.'
    },
    {
      img: time,
      heading: 'Time Management',
      content: 'Improve efficiency and productivity by using time management tracking tools, which guarantee exact recording and analysis of work hours, including holiday management.'
    },
    {
      img: customized,
      heading: 'Customized Payslip Design',
      content: 'Payslips can be printed and customized with ease. Users can request specific designs.'
    },
    {
      img: automated,
      heading: 'Automated Payslip',
      content: 'With automated payslip generation, you can enjoy streamlined payroll procedures that save time and reduce errors.'
    },
    {
      img: traning,
      heading: 'Training and Support',
      content: 'Complete Dedicated Training and Support Services guarantee seamless installations and continuous efficiency with our software solutions.'
    },
    {
      img: staff,
      heading: 'Staff Private Panel',
      content: 'A Dedicated Staff Private Panel for Payslip privacy can help you protect the privacy of your team by enabling confidential communication, document sharing, and customized updates.'
    },
  ];

  return (
    <section className='font-lora lg:mx-10 mx-5 py-20'>
      <h1 className='text-xl lg:text-3xl text-center py-5'>Our Professional Services</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {Services.map((service, index) => (
          <motion.div
            key={index}
            className='flex flex-col gap-3 items-center cursor-pointer border p-5 rounded-xl border-black'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 0.92, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' ,background: "#000B2A" , color:"white"}}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img className='w-20' src={service.img} alt={service.heading} />
            <h1 className='font-semibold lg:text-lg  text-base'>{service.heading}</h1>
            <p className='text-sm'>{service.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 
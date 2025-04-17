import React from 'react';
import { motion } from 'framer-motion';
import industry1 from '../assets/industry/industry1.webp';
import industry2 from '../assets/industry/industry2.webp';
import industry3 from '../assets/industry/industry3.webp';
import industry4 from '../assets/industry/industry4.webp';
import industry5 from '../assets/industry/industry5.webp';
import industry6 from '../assets/industry/industry6.webp';

export default function HomeIndustry() {
    const industries = [
        { pic: industry1, heading: "Payroll Software for Care Homes", content: "Payroll software for care homes automates staff wages, manages complex shift patterns, and ensures compliance with healthcare regulations. It reduces administrative tasks and ensures accurate, on-time payments, allowing care homes to focus on quality patient care." },
        { pic: industry2, heading: "Payroll Software for Retail", content: "Retail payroll software automates wage calculations, handles part-time and seasonal staff, and ensures compliance with labour laws. It reduces manual errors and provides accurate, efficient payroll management for diverse retail workforces." },
        { pic: industry3, heading: "Payroll Software for Restaurants", content: "Payroll software for restaurants manages wages, tips, and varying work hours while ensuring labor law compliance. It streamlines payroll processes, reduces administrative work, and guarantees accurate and timely employee payments." },
        { pic: industry4, heading: "Payroll Software for Construction", content: "Construction payroll software manages job site payments, contract workers, and varying pay scales. It automates labor cost tracking, ensures accurate payments, and simplifies compliance with industry regulations." },
        { pic: industry5, heading: "Payroll Software for Software and IT Industry", content: "Payroll software for the software and IT industry handles salaries, bonuses, and remote worker payments. It automates tax compliance, manages stock options, and ensures accurate, secure payroll processing for tech companies." },
        { pic: industry6, heading: "Payroll Software for Security Services", content: "Security service payroll software handles rotating shifts, job site payments, and overtime calculations. It ensures compliance, provides real-time reporting, and guarantees accurate payroll management for security firms." }
    ];

    return (
        <section className='mx-5 lg:mx-20 font-lora py-10'>
            <motion.h1 
            style={{letterSpacing:"5px"}}
                className='text-center text-2xl lg:text-4xl  mb-10' 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                SOFTWARE FOR EVERY INDUSTRY
            </motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {industries.map((industry, index) => (
                    <motion.div 
                        className='flex flex-col gap-4 p-6 lg:p-10 border rounded-2xl shadow-lg items-center bg-white hover:shadow-2xl transition-all duration-300'
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <motion.img 
                            className='w-96 rounded-lg' 
                            src={industry.pic} 
                            alt={industry.heading} 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <h2 className='text-base lg:text-lg font-semibold text-center text-[#2c55c4]'>{industry.heading}</h2>
                        <p className='text-center text-sm text-gray-600'>{industry.content}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

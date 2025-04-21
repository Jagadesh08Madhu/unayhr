import React from 'react'
import { motion } from 'framer-motion'
import image1 from '../assets/compliance/image1.png'
import image2 from '../assets/compliance/image2.png'
import image3 from '../assets/compliance/image3.png'
import image4 from '../assets/compliance/image4.png'
import image5 from '../assets/compliance/image5.png'
import image6 from '../assets/compliance/image6.png'

export default function ComplianceContent() {

    const Details = [
        {
            logo: image1,
            heading: "Comprehensive Compliance Display",
            content: `Payslips clearly showcase all compliance details for transparency and accuracy.
            Ensure legal alignment by embedding statutory components directly on the slip.`
        },
        {
            logo: image2,
            heading: "Custom Payslip Configuration",
            content: `Easily adapt to client-specific payslip item requirements and formats.
            Tailor wage components for each client’s unique payroll structure.`
        },
        {
            logo: image3,
            heading: "Flexible Payroll Management",
            content: `Manage salaries, standard wage items, and additional pay effortlessly.
            Accommodates bonuses, incentives, and other variable pay elements.`
        },
        {
            logo: image4,
            heading: "Automated Deductions Handling",
            content: `Efficiently process statutory deductions and custom complementary cuts.
            Ensure accurate compliance with government norms and company policies.`
        },
        {
            logo: image5,
            heading: "Smart Leave & Absence Tracking",
            content: `Track holidays, LOPs, and sick leaves with automated adjustments.
            Streamlined leave records improve HR operations and employee clarity.`
        },
        {
            logo: image6,
            heading: "Secure Employee Privacy Panel",
            content: `A dedicated panel ensures private access to view, print, or transmit payslips.
            Built-in compliance ensures privacy protection across every step.`
        },
    ]

    return (
        <section className='mx-5 lg:mx-20 py-10 font-lora'>
            <h1 className='text-center text-3xl py-5'>Discover the Power of Our Payroll</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {Details.map((item, index) => (
                    <motion.div
                        key={index}
                        className='flex flex-col items-center cursor-pointer gap-3 shadow-lg rounded-lg border p-5'
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true , amount:0.5 }}
                        whileHover={{scale:0.95}}
                    >
                        <img className='w-14 border rounded-full p-2 border-[#2c55c4]' src={item.logo} alt={item.heading} />
                        <h1 className='text-base text-[#2c55c4]'>{item.heading}</h1>
                        <p className='text-sm text-center'>{item.content}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

import React from 'react'
import { motion } from 'framer-motion'
import whychoose from '../assets/whychoose.png'

export default function Whychoose() {
  return (
    <section className='bg-[#000B2A] py-20 font-lora text-white'>
      <div className='flex flex-col lg:mx-20 mx-5'>
        <motion.div 
          className='flex flex-col lg:flex-row items-center justify-between'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className='flex flex-col order-2 lg:order-1 gap-5'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className='text-2xl lg:text-3xl font-bold'>Why Choose UnayHR?</h1>
            <p className='text-3xl font-semibold'>Compliance Covered, Peace of Mind Delivered</p>
            <div>
              <p className='text-lg'>
                We manage complex, region-specific HR and payroll regulations across every state in India, so you don’t have to.
              </p>
              <p className='text-lg'>
                Stay fully compliant and stress-free, no matter where your team operates.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className='order-1 lg:order-2'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img className='w-96' src={whychoose} alt="Why Choose UnayHR" />
          </motion.div>
        </motion.div>

        <div className='lg:-mt-10 mt-5 bg-[#000B2A]'>
          <motion.div 
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            viewport={{ once: true , amount:0.5 }}
          >
            {[
              "As your trusted advisor, I recommend UnayHR for its excellent UKVI visa compliance and thorough compliance with the UK’s complex HR laws.",
              "It simplifies payroll and ensures legal compliance, giving you the best peace of mind experience.",
              "UnayHR ensures that your business practices meet strict regulatory standards and are ready for future law changes.",
              "Take on HR compliance with confidence and security with UnayHR."
            ].map((item, index) => (
              <motion.div
                key={index}
                className='border px-5 py-8 '
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 , delay : index *0.4 }}
                viewport={{ once: true , amount: 0.5 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

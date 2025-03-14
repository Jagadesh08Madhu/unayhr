import React from 'react'
import hero from '../assets/hero.png'

export default function Home() {
  return (
    <section className='font-lora bg--800'>
      <div className='flex justify-center items-center lg:mx-20 gap-5'>
        <div className='flex flex-col justify-start items-start gap-5'>
            <h1 className='text-2xl font-semibold'>HR Compliance for UKVI Sponsorship</h1>
            <h1 className='text-xl font-medium'>Empower Your Workforce: Professional HR & Payroll Solutions for Every Stage of the Employee Lifecycle</h1>
            <ul className='flex flex-col gap-4'>
              <li>UnayHR is more than just another HR and Payroll software provider. We are your trusted partner, dedicated to supporting your 
                businesses at every stages.</li>
              <li>Our wide range of services is designed to simplify and streamline.</li>
              <li>Handling Your Legal Requirements in Compliance with UK Regulatory Framework</li>
            </ul>

            <button className='bg-[#244874] text-white px-4 py-1'>Contact</button>
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  )
}

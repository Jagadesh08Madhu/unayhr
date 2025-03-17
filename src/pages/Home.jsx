import React from 'react';
import hero from '../assets/hero.png';

export default function Home() {
  return (
    <section className='font-lora py-20 bg-[radial-gradient(circle_at_top_left,_rgba(47,146,211,0.3)_110%,_rgba(36,72,116,0.9)_0%)]'>
      <div className='flex flex-col lg:flex-row justify-center items-center mx-5 lg:mx-20 gap-5'>
        <div className='flex flex-col lg:w-1/2 justify-start items-start gap-5'>
          <h1 className='text-2xl font-semibold'>
            HR Compliance for <span className='text-[#2f92d3]'> UKVI Sponsorship</span>
          </h1>
          <h1 className='text-xl font-medium'>
            Empower Your Workforce: Professional HR & Payroll Solutions for Every Stage of the Employee Lifecycle
          </h1>
          <ul className='flex flex-col gap-4'>
            <li>
              UnayHR is more than just another HR and Payroll software provider. We are your trusted partner, dedicated to
              supporting your businesses at every stage.
            </li>
            <li>Our wide range of services is designed to simplify and streamline.</li>
            <li>Handling Your Legal Requirements in Compliance with UK Regulatory Framework</li>
          </ul>

          <button className='bg-[#244874] text-white px-6 py-2 rounded-xl'>Contact</button>
        </div>
        <div className=''>
          <img className='' src={hero} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

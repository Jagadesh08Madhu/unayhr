import React from 'react';
import hero from '../assets/hero.png';
import { GiCheckMark } from "react-icons/gi";
import './home.css'
import HomeAbout from '../components/HomeAbout';
import Whychoose from '../components/Whychoose';

export default function Home() {
  return (
    <div>
      <section className='font-lora py-20  bg-gradient-to-tr from-[#4b98cb] to-white text'>
      <div className='flex flex-col lg:flex-row justify-center items-center mx-5 lg:mx-20 gap-5'>
        <div className='flex flex-col lg:w-1/2 justify-start items-start gap-5 order-2 lg:order-1'>
          <h1 className='text-lg lg:text-2xl font-semibold'>
            HR Compliance for <span className='text-[#2f92d3]'> UKVI Sponsorship</span>
          </h1>
          <h1 className='text-lg lg:text-xl font-medium'>
            Empower Your Workforce: Professional HR & Payroll Solutions for Every Stage of the Employee Lifecycle
          </h1>
          <ul className='flex flex-col gap-4'>
           <div className='flex items-center gap-2'>
            <span className='text-[#2f92d3]'><GiCheckMark/></span>
           <li>
              UnayHR is more than just another HR and Payroll software provider. We are your trusted partner, dedicated to
              supporting your businesses at every stage.
            </li>
           </div>
           <div className='flex items-center gap-2'>
            <span className='text-[#2f92d3]'><GiCheckMark/></span>
           <li>Our wide range of services is designed to simplify and streamline.</li>
           </div>


           <div className='flex items-center gap-2'>
            <span className='text-[#2f92d3]'><GiCheckMark/></span>
           <li>Handling Your Legal Requirements in Compliance with UK Regulatory Framework</li>
           </div>
          </ul>

          <button className='bg-[#244874] text-white px-6 py-2 rounded-xl'>Contact</button>
        </div>
        <div className='order-1 lg:order-2'>
          <img className='' src={hero} alt="Hero" />
        </div>
      </div>
    </section>
    <HomeAbout/>
    <Whychoose/>
    </div>
  );
}

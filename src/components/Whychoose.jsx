import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import whychoose from '../assets/whychoose.jpg'

export default function Whychoose() {
  return (
    <section className='font-lora lg:mx-10 mx-5'>
      <div className='flex flex-col lg:flex-row items-center gap-5'>
        <div className='lg:w-1/2 lg:order-2'>
            <img src={whychoose} alt="" />
        </div>
        <div className='lg:w-1/2 flex flex-col gap-3 lg:order-1'>
            <h1 style={{letterSpacing:"3px"}} className='lg:text-4xl text-2xl font-semibold'>WHY CHOOSE UnayHR?</h1>
            <p className='text-lg'>We are dedicated to using our expertise and excellence to redefine payroll and HR management. We provide revolutionary software 
                solutions that simplify complex processes while guaranteeing accuracy and efficiency on every task. By choosing UnayHR, you’re 
                not just adopting new technology; you’re committing to a time when payroll and HR will operate together seamlessly to support 
                your team and grow your business. Discover how UnayHR may transform your workplace and create the way for a more motivated and 
                productive staff.</p>

            <ul className='flex flex-col gap-3'>
                <li className='flex items-center gap-2'> <span className='text-[#2f92d3] text-xl'><IoMdCheckmarkCircleOutline/></span> As your trusted advisor, I recommend UnayHR for it’s excellent UKVI visa compliance and through compliance with the UK’s 
                    complex HR laws.</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><IoMdCheckmarkCircleOutline/></span>It simpifies payroll and ensures legal compainecs giving you best peace of mind experience.</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><IoMdCheckmarkCircleOutline/></span>UnayHR ensues that your businesess practices meet strict regulotry standards and are ready for future law changes.</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><IoMdCheckmarkCircleOutline/></span>Take on HR complaince with confidence and security with UnayHR.</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

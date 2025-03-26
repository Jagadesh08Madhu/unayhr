import React from 'react'
import about from '../assets/about.png'
import { VscActivateBreakpoints } from "react-icons/vsc";

export default function HomeAbout() {
  return (
    <section className='py-20 font-lora mx-5 lg:mx-10'>
      <div className='flex flex-col lg:flex-row gap-5 items-center'>
        {/* Image section */}
        <div className='lg:w-1/2'>
            <img src={about} alt="about unayhr" />
        </div>
        {/* Content section */}
        <div className='lg:w-1/2 flex flex-col gap-5'>
            <h1 className='text-2xl lg:text-4xl'>Empower your workflow with <span className='text-[#2f92d3]'>UnayHR Payroll</span></h1>

            <ul className='flex flex-col gap-3'>
                    
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><VscActivateBreakpoints /></span>UnayHR Payroll manage employees salaries, wages, bonuses</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><VscActivateBreakpoints /></span> Runs Unlimited Payslips effectively</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><VscActivateBreakpoints /></span>Manages employee Time management</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><VscActivateBreakpoints /></span>Manages employee Holiday management</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><VscActivateBreakpoints /></span>Manage Employee Task</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><VscActivateBreakpoints /></span>Attendance Management</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><VscActivateBreakpoints /></span>Dedicated Staff Private Panel for Payslip Privacy</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><VscActivateBreakpoints /></span>Customized Payslip Design</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><VscActivateBreakpoints /></span>Print Payslip Multilanguage (16 Language)</li>
                <li className='flex items-center gap-2'><span className='text-[#2f92d3] text-xl'><VscActivateBreakpoints /></span>Unlimited Dedicated Training and support</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
import payslip from '../assets/payslip.png'
import ComplianceContent from '../components/ComplianceContent'

export default function Compliance() {

    const navigate = useNavigate()
  return (
    <div>
      <section className='py-10 font-lora bg-[#00051F]'>
      <div className='flex flex-col text-white gap-5 mx-5 lg:px-20 justify-center items-center'>
        <h1 className='bg-[#1f295b] w-fit px-5 py-1 rounded-full text-white'>Payroll Compliance</h1>
        <h1 className='text-4xl text-center'>Make payroll stress-free</h1>
        <p className='max-w-4xl text-center'>Staying compliant with ever-changing tax laws and regulations can be overwhelming. With our intelligent payroll compliance software,
             you can automate deductions, stay audit-ready, and ensure error-free salary disbursements — all while saving time and avoiding 
             penalties.</p>

             <div className='flex flex-col gap-5 w-full md:flex-row md:w-fit lg:gap-10'>
              <button
              onClick={()=>navigate("/pricing")}
              style={{letterSpacing:"3px"}} className='bg-white rounded-md text-[#101941] px-6 py-2 text-sm lg:text-lg'>Our Pricing</button>
              <button 
              onClick={()=>navigate("/contact")}
              style={{letterSpacing:"3px"}} className='bg-transparent rounded-md border px-6 py-2 text-sm lg:text-lg'>Contact us</button>
            </div>

            <img className='md:w-2/3 rounded-xl' src={payslip} alt="" />
      </div>
    </section>
    <ComplianceContent/>
    </div>
  )
}

import React from 'react'
import GeneralConditions from '../components/GeneralConditions'

export default function General() {
  return (
    <div>
    <section className='py-10 font-lora mx-5 lg:mx-20'>
        <h1 className='text-center font-semibold py-5 text-2xl text-[#2c55c4]'>Purchase and User Conditions for UnayHR Payroll HR</h1>
        <div className='flex flex-col gap-3'>
          <h1 className='text-[#2c55c4] text-xl font-semibold'>Introduction</h1>
          <p>UnayHR is a UK-based company headquartered in London, providing comprehensive HR solutions tailored to businesses of all sizes. Our
             services ensure effective management of HR tasks while maintaining compliance with UKVI Visa regulations. Our product offerings 
             include:</p>

             <ul className='lg:mx-20 flex flex-col gap-3 list-disc'>
                <li>UnayHR Core: Core HR management software</li>
                <li>UnayHR Payroll: Payroll management solution</li>
                <li>UnayHR Compliance: UKVI Visa compliance management</li>
                <li>UnayHR Training: Employee training and development</li>
                <li>UnayHR Support: Dedicated customer support</li>
             </ul>
             <p>Developed and maintained by our in-house team, with offices in the UK, we ensure quality and consistency by not outsourcing
             any technology development.</p>
             <p>Headquarter: 115 Stevens Road, Dagenham, RM8 2PU, London, United Kingdom. </p>
        </div>

        <div className='mt-5'>
          <h1 className='text-[#2c55c4] font-semibold text-2xl'>UnayHR Products</h1>

          <div className='flex flex-col lg:flex-row w-fit mt-3'>
            <p className='border px-5 py-2 border-black'>UnayHR Core</p>
            <p className='border px-5 py-2 border-black'>UnayHR Payroll</p>
            <p className='border px-5 py-2 border-black'>UnayHR Compliance	</p>
            <p className='border px-5 py-2 border-black'>UnayHR Training</p>
            <p className='border px-5 py-2 border-black'>UnayHR Support</p>
          </div>
        </div>
        <p className='mt-3'>Our software is designed to be user-friendly and can be installed on various devices, networks, and servers to ensure comprehensive HR
        management and compliance.</p>
    </section>
    <GeneralConditions/>
    </div>
  )
}

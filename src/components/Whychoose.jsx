import React from 'react'
import whychoose from '../assets/whychoose.png'

export default function Whychoose() {
  return (
    <section className='bg-[#000B2A] py-20 font-lora text-white'>
      <div className='flex flex-col lg:mx-20 mx-5 '>
        <div className='flex flex-col lg:flex-row items-center  justify-between'>
          <div className='flex flex-col order-2 lg:order-1 gap-5'>
          <h1>Why Choose UnayHR?</h1>
          <p className='text-3xl font-semibold'>Compliance Covered, Peace of Mind Delivered</p>
         <div>
         <p className='text-lg '>We manage complex, region-specific HR and payroll regulations across every state in India, so you don’t have to.
          </p>
          <p className='text-lg'>Stay fully compliant and stress-free, no matter where your team operates.</p>
         </div>
          </div>
          <div className='order-1 lg:order-2'>
            <img className='w-96' src={whychoose} alt="" />
          </div>
        </div>
        <div className='lg:-mt-10 mt-5 bg-[#000B2A]'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {["As your trusted advisor, I recommend UnayHR for it’s excellent UKVI visa compliance and through compliance with the UK’s complex HR laws.",
              "It simpifies payroll and ensures legal compainecs giving you best peace of mind experience.",
              "UnayHR ensues that your businesess practices meet strict regulotry standards and are ready for future law changes.",
              "Take on HR complaince with confidence and security with UnayHR."
            ].map(item=>(
              <div className='border px-5 py-8'>
                <h1>{item}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

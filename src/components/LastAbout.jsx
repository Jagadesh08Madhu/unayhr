// import React from 'react';
import hr from '../assets/hr.webp';

// export default function LastAbout() {
//   return (
//     <section className='font-lora lg:mx-20 mx-5 py-10'>
//       <div className='flex flex-col lg:flex-row gap-10 items-center'>
//         <motion.div 
//           className='lg:w-1/2 w-full' 
//           initial={{ opacity: 0, x: -50 }} 
//           whileInView={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//             <img className='rounded-xl shadow-lg' src={hr} alt='HR image' />
//         </motion.div>
//         <motion.div 
//           className='lg:w-1/2 w-full space-y-6' 
//           initial={{ opacity: 0, x: 50 }} 
//           whileInView={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//             <h1 className='text-xl lg:text-2xl font-bold text-gray-800'>End-to-End HR & Payroll Solutions: Compliance, Efficiency, and Growth</h1>
//             <div className='space-y-4'>
//                 {[
//                     { title: "Comprehensive HR and Payroll Solutions", text: "Tailored for every stage of the employee lifecycle." },
//                     { title: "UKVI Sponsorship Compliance", text: "Expert support to handle your legal requirements within the UK regulatory framework." },
//                     { title: "Streamlined Processes", text: "Designed to simplify and enhance your HR management." },
//                     { title: "Dedicated Partnership", text: "More than just software; we are your trusted HR partner." },
//                     { title: "Expert Team", text: "Ensuring your business meets all regulatory requirements." },
//                     { title: "Focus on Growth", text: "Allowing you to concentrate on growing your business while we manage HR complexities." }
//                 ].map((item, index) => (
//                     <motion.div 
//                       key={index} 
//                       initial={{ opacity: 0, y: 20 }} 
//                       whileInView={{ opacity: 1, y: 0 }} 
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                         <h2 className='text-lg font-semibold text-gray-700'>{item.title}</h2>
//                         <p className='text-gray-600 text-sm'>{item.text}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import React from 'react'
import lastabout from '../assets/lastabout.jpeg'
import { motion } from 'framer-motion';

export default function LastAbout() {
  return (
    <section className='lg:mx-20 mx-5 font-lora lg:py-20 '>
      <div className='flex flex-col lg:flex-row gap-10'>
        <div className='lg:w-1/2 lg:sticky top-10 self-start flex flex-col gap-3'>
          <h1 className='text-[#2c55c4] text-lg lg:text-xl'>Advanced Features</h1>
          <p className='text-xl lg:text-3xl'>Powerfully engineered to back your unique processes</p>
          <img className='h-96 object-cover rounded-lg' src={hr} alt="" />
        </div>

        
        <div className='space-y-4 lg:w-1/2'>
                           {[
                    { title: "Comprehensive HR and Payroll Solutions",
                      text: `UnayHR Payroll is designed to support every phase of the employee journey — from onboarding to offboarding.
                            Manage hiring, attendance, payroll, and more with tools tailored for each stage of employment.` },
                    { title: "UKVI Sponsorship Compliance", text: `Get expert assistance to navigate your legal obligations confidently.
                              We ensure full compliance with UK regulations, so you stay focused on your business.` },
                    { title: "Streamlined Processes", text:`Built to streamline daily HR tasks and improve efficiency across your organization.
                              UnayHR simplifies complex processes, making HR management effortless and effective.` },
                    { title: "Dedicated Partnership", text: `UnayHR goes beyond software – we provide guidance, support, and solutions tailored to your HR needs.
                              Think of us as your dedicated partner in building a better workplace.` },
                    { title: "Expert Team", text: `Ensuring your business meets all regulatory requirements involves staying up-to-date with 
                      relevant laws, industry standards, and compliance guidelines. ` },
                    { title: "Focus on Growth", text: `By outsourcing HR responsibilities, you can focus on scaling your business without worrying 
                      about administrative burdens. ` }
                ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className='py-3'
                    >
                        <h2 className='text-lg font-semibold text-[#2c55c4]'>{item.title}</h2>
                        <p className='mt-2 text-sm'>{item.text}</p>
                        <div className='mt-5 h-[1px] w-full bg-gray-500'></div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

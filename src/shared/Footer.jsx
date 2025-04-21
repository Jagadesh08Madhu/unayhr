import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CiLocationArrow1 } from "react-icons/ci";
import { MdLocalPhone ,MdOutlineAttachEmail ,MdOutlineMailLock  } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";



export default function Footer() {

  const navigate = useNavigate()

  const Items =[
    {
      name :"Home",
      link:"/"
    },
    {
      name :"Pricing",
      link:"/pricing"
    },
    {
      name :"Contact",
      link:"/contact"
    },
    {
      name :"Compliance",
      link:"/compliance"
    },
    {
      name :"Cookie policy",
      link:"/cookie-policy"
    },
    {
      name :"Privacy policy",
      link:"/privacy-policy"
    },
    {
      name :"General Conditions",
      link:"/general-conditions"
    },
  ]
  return (
    <section className=" pb-5 px-5 lg:px-20 font-lora bg-[#101941] text-white">
      <div className='flex flex-col gap-5  items-center py-10  pt-20'>
        <motion.h1 
        initial={{opacity:0 , y :40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.5}}
        viewport={{once:true , amount:0.3}}
        className='text-4xl lg:w-1/2 text-center'>UnayHR payroll system for growing businesses</motion.h1>
        <motion.button
        initial={{opacity:0 , y :40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.5}}
        viewport={{once:true , amount:0.6}}
        onClick={()=>navigate("/contact")}
        className='border px-6 rounded-lg py-3'>Contact Us</motion.button>
        <div className='bg-white h-[1px] mt-10 lg:mt-28 w-full'></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 , delay:0.4}}
        viewport={{once:true , amount:0.5}}
        >
          <h1 onClick={()=>navigate("/")} style={{letterSpacing:"5px"}} className="text-2xl cursor-pointer font-bold mb-4">UnayHR PAYROLL</h1>
          <p className="italic text-lg mb-3">
            "Empowering your workforce, simplifying your payroll. Let us handle the numbers while you focus on what matters most." 💼
          </p>
          <p className='text-sm'>
            At UnayHR Payroll, we believe that payroll isn't just about numbers—it's about people. From accurate salary processing to compliance
            management, we offer seamless solutions tailored for your business needs. 
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{once :true , amount:0.3}}
          className='flex flex-col lg:items-center'
        >
          <h1 className="text-2xl font-bold ">Quick Links</h1>
          <ul className="space-y-2 mt-2">
            {Items.map((item, index) => (
              <motion.li
              initial={{opacity:0 , x:20}}
              whileInView={{opacity:1 , x:0}}
              transition={{duration:index*0.1 , delay:index *0.2}}
              viewport={{once:true , amount:0.5}}
              onClick={()=>navigate(item.link)}
              key={index} className="cursor-pointer hover:text-gray-300  duration-300 text-sm transition-colors">
                {item.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{once :true , amount:0.3}}
        >
          <h1 className="text-2xl font-bold mb-4">Registered Address</h1>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-3'>
                <span className='text-2xl'><CiLocationArrow1/></span>
                <a target='_blank' href="https://www.google.com/maps/dir//115+Stevens+Rd+Dagenham+RM8+2PU+UK/@51.5592352,0.0364216,16495m/data=!3m2!1e3!4b1!4m9!4m8!1m0!1m5!1m1!1s0x47d8a44a8c351c35:0x4d5203225163b7a7!2m2!1d0.1188223!2d51.5591573!3e9?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoASAFQAw%3D%3D">115 Stevens Road, Dagenham
                  RM8 2PU, London,
                  United Kingdom.</a>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-2xl'><MdLocalPhone/></span>
                <a target='_blank'  href="tel:+422032901158">Phone: +422032901158</a>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-2xl'><MdOutlineAttachEmail /></span>
                <a 
                  href="mailto:unayhr-support@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  Email: unayhr-support@gmail.com
                </a>

              </div>

              <div className='flex items-center mt-2 gap-5'>
                <span className='text-xl border rounded-full hover:-translate-y-2 transition-all ease-in-out p-2'><a href="tel:+422032901158" target="_blank" rel="noopener noreferrer">
                  <MdOutlineWifiCalling3 />
                </a></span>

                <span className='text-xl border hover:-translate-y-2 transition-all ease-in-out rounded-full p-2'><a target='_blank' href="https://www.google.com/maps/dir//115+Stevens+Rd+Dagenham+RM8+2PU+UK/@51.5592352,0.0364216,16495m/data=!3m2!1e3!4b1!4m9!4m8!1m0!1m5!1m1!1s0x47d8a44a8c351c35:0x4d5203225163b7a7!2m2!1d0.1188223!2d51.5591573!3e9?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer">
                  <IoLocationOutline />
                </a></span>
                
                <span className='text-xl border hover:-translate-y-2 transition-all ease-in-out rounded-full p-2'><a href="mailto:unayhr-support@gmail.com" target="_blank" rel="noopener noreferrer">
                  <MdOutlineMailLock  />
                </a></span>
              </div>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{once :true , amount:0.3}}
        >
          <h1 className="text-2xl font-bold mb-4">Business Hours 🕒</h1>
          <p className="mb-3 text-lg ">
            Monday - Sunday: 9:00 AM – 5:00 PM
          </p>

          <p className='text-base'>For assistance or inquiries regarding payroll, feel free to call or message us anytime! 💼📞✨</p>
        </motion.div>
      </div>

      <div className='flex justify-center items-center border-t-2 pt-5 mt-5'>
        <p>© 2025 UnayHr Payroll. All rights reserved.</p>
      </div>
    </section>
  );
}

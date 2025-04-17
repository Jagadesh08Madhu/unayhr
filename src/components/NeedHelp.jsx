import React from 'react';
import { MdOutlineRingVolume, MdOutlineWifiCalling3 } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function NeedHelp() {
  return (
    <section className='py-20 font-lora px-5 bg-[#00051F] text-white lg:px-20'>
      <h1 className='text-center py-5 text-3xl font-semibold tracking-wide'>Need help deciding?</h1>

      <div className='flex flex-col md:flex-row justify-center gap-10 items-center mt-10'>

        {/* Call Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{once:true , amount:0.5}}
          className='flex flex-col max-w-sm w-full bg-white rounded-xl shadow-xl text-black overflow-hidden'
        >
          <div className='flex items-center p-5 bg-gray-200 gap-3'>
            <MdOutlineRingVolume className='text-3xl' />
            <h2 className='text-lg font-semibold'>Give us a Ring</h2>
          </div>
          <div className='p-5 flex flex-col gap-6'>
            <p>Talk to trusted specialists who have helped thousands choose the right plan efficiently and confidently.</p>
            <a href='tel:+422032901158' className='flex items-center gap-3 text-[#00051F] hover:underline'>
              <MdOutlineWifiCalling3 className='text-2xl' />
              <p>+422032901158</p>
            </a>
          </div>
        </motion.div>

        {/* Email Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{once:true , amount:0.5}}
          className='flex flex-col max-w-sm w-full bg-white rounded-xl shadow-xl text-black overflow-hidden'
        >
          <div className='flex items-center p-5 bg-gray-200 gap-3'>
            <IoMailOpenOutline className='text-3xl' />
            <h2 className='text-lg font-semibold'>Write an Email</h2>
          </div>
          <div className='p-5 flex flex-col gap-6'>
            <p>We're just an email away to answer your questions and offer tailored recommendations.</p>
            <a href='mailto:unayhr-support@gmail.com' className='flex items-center gap-3 text-[#00051F] hover:underline'>
              <p>Write to us</p>
              <FaAngleRight className='text-xl' />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

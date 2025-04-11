import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
    <section className="py-20 px-5 lg:px-20 font-lora bg-[#1F2937] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 onClick={()=>navigate("/")} style={{letterSpacing:"5px"}} className="text-3xl lg:text-4xl cursor-pointer font-bold mb-4">UnayHR PAYROLL</h1>
          <p className="italic text-lg mb-3">
            "Empowering your workforce, simplifying your payroll. Let us handle the numbers while you focus on what matters most." 💼
          </p>
          <p className='text-base'>
            At UnayHR Payroll, we believe that payroll isn't just about numbers—it's about people. From accurate salary processing to compliance
            management, we offer seamless solutions tailored for your business needs. With precision, transparency, and a human touch, we help you
            build trust, streamline operations, and grow with confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h1 className="text-2xl font-bold mb-4">Quick Links</h1>
          <ul className="space-y-2">
            {Items.map((item, index) => (
              <li
              onClick={()=>navigate(item.link)}
              key={index} className="cursor-pointer hover:text-gray-300  duration-300 text-base transition-colors">
                {item.name}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold mb-4">Registered Address</h1>
          <p className="mb-3 text-lg">
            115 Stevens Road, Dagenham<br />
            RM8 2PU, London,<br />
            United Kingdom.
          </p>
          <p className="mb-1 text-lg">Phone: +44 203 290 1158</p>
          <p className='text-lg'>Email: <a href="mailto:unayhr-support@gmail.com" className="underline hover:text-blue-800">unayhr-support@gmail.com</a></p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold mb-4">Business Hours 🕒</h1>
          <p className="mb-3 text-lg ">
            Monday - Sunday: 9:00 AM – 5:00 PM
          </p>

          <p className='text-base'>For assistance or inquiries regarding payroll, feel free to call or message us anytime! 💼📞✨</p>
        </motion.div>
      </div>
    </section>
  );
}

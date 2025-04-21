import React, { useEffect, useState } from 'react';
import { IoCheckmarkDone } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import NeedHelp from '../components/NeedHelp';
import PricingFaq from '../components/PricingFaq';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/Plans.json")
      .then(response => response.json())
      .then(data => setPlans(data.plans));
  }, []);

  const navigate = useNavigate();

  const checkout = (plan) => {
    navigate("/checkout", { state: { plan } });
  };

  return (
    <div>
    <section className="bg-gray-100 font-lora">
        <div className="py-10 bg-[#00051F] text-white flex justify-center items-center">
          <h1 className="lg:w-1/2 text-3xl font-bold text-center mb-8">
            Affordable & Unbeatable pricing to Compliance with UKVI Sponsorship regulation!!
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5 lg:mx-20 py-10 gap-6">
          {plans.map((plan, index) => (
            <motion.div 
              initial ={{opacity:0 , y:40}}
              animate ={{opacity:1 , y:0}}
              transition={{duration:0.8, delay :index * 0.3}}
              key={index} 
              className="border rounded-2xl shadow-lg bg-white flex flex-col"
            >
              <div className='bg-[#00051F] rounded-t-2xl py-3 text-center text-white w-full'>
                <h2 style={{ letterSpacing: "3px" }} className="text-xl font-semibold">
                  {plan.name}
                </h2>
              </div>
              <div className='p-4 flex flex-col flex-grow'>
                <h3 className="text-gray-700 text-center">{plan.employees}</h3>
                <div className="mt-4 text-center">
                  <span className="text-lg font-semibold text-gray-900">
                    {plan.price_per_month}/Per Month
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, ind) => (
                    <li key={ind} className="flex items-center gap-2 text-gray-700">
                      <IoCheckmarkDone className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-center mt-4">{plan.price_per_year}</p>
                <div className="mt-2 text-center">
                  <span className="text-gray-500 line-through">
                    {plan.original_price}
                  </span>
                  <span className="text-green-600 font-bold ml-2">
                    {plan.current_price}
                  </span>
                </div>
                {/* Push the button to the bottom */}
                <div className="mt-auto pt-4">
                  <button
                    onClick={() => checkout(plan)}
                    className="w-full px-6 bg-[#00051F] text-white py-2 rounded-lg"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
    <NeedHelp/>
    <PricingFaq/> 
  </div>
  );
}

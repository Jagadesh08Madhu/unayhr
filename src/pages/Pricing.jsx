import React, { useEffect, useState } from 'react';
import { IoCheckmarkDone } from "react-icons/io5";

export default function Pricing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/Plans.json")
      .then(response => response.json())
      .then(data => setPlans(data.plans));
  }, []);

  return (
    <section className="p-6 bg-gray-100 font-lora">
      <div className="mx-5 lg:mx-20">
        <h1 className="text-3xl font-bold text-center mb-8">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="border  rounded-2xl shadow-lg bg-white">
                <div className='bg-gradient-to-r from-gray-900 via-gray-600 to to-gray-900 rounded-t-2xl py-3 text-center text-white w-full'>
                  <h2 style={{letterSpacing:"3px"}} className="text-xl  font-semibold">{plan.name}</h2>
                </div>
                <div className='p-4'>
                     <h3 className="text-gray-600 text-center">{plan.employees}</h3>

                    <div className="mt-4 text-center">
                      <span className="text-lg font-semibold text-gray-900">{plan.price_per_month}/Per month</span>
                    </div>



                      <ul className="mt-4 space-y-2">
                        {plan.features.map((feature, ind) => (
                          <li key={ind} className="flex items-center gap-2 text-gray-700">
                            <IoCheckmarkDone className="text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                    <p className="text-gray-500 text-center">{plan.price_per_year}</p>
                    <div className="mt-2 text-center">
                    <span className="text-gray-500 line-through">{plan.original_price}</span>
                    <span className="text-green-600 font-bold ml-2">{plan.current_price}</span>
                    </div>

                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Add to Cart
                    </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

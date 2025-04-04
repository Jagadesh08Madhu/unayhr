import React, { useEffect, useState } from 'react';
import { IoCheckmarkDone } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/Plans.json")
      .then(response => response.json())
      .then(data => setPlans(data.plans));
  }, []);

  const navigate = useNavigate()

  const checkout = (plan)=>{
    navigate("/checkout" ,{state:{plan}})
  }

  return (
    <section className="p-6 bg-gray-100 font-lora">
      <div className="mx-5 lg:mx-20">
        <h1 className="text-3xl font-bold text-center mb-8">Our UnayHR Payroll Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-2xl shadow-lg bg-white">
                <div className='bg-gradient-to-r from-gray-900 via-gray-700 to to-gray-900 rounded-t-2xl py-4 text-center text-white w-full'>
                  <h2 style={{letterSpacing:"3px"}} className="text-xl  font-semibold">{plan.name}</h2>
                </div>
                <div className='p-4'>
                     <h3 className="text-gray-700 text-center">{plan.employees}</h3>

                    <div className="mt-4 text-center">
                      <span className="text-lg font-semibold text-gray-900">{plan.price_per_month}/Per Month</span>
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

                    <button
                    onClick={()=>checkout(plan)}
                    className="mt-4 w-full bg-gradient-to-r from-gray-900 via-gray-700 to to-gray-900 text-white py-2 rounded-lg">
                    Order Now
                    </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

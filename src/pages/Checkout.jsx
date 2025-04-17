import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoCheckmarkDone } from "react-icons/io5";


export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsButtonDisabled(!validateForm());
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Navigate to payment or perform further actions
    navigate('/payment', { state: { formData, host, selectedVariant } });
  };

  return (
    <section className='py-10 lg:mx-20 mx-5 font-alice'>
      <div className='flex gap-10 flex-col lg:flex-row'>
        {/* Checkout Form */}
        <div className='lg:w-1/2 shadow-lg p-5 border-t-4 order-2 lg:order-1 rounded-md border-gray-800'>
          <h1 className='text-xl text-gray-800 lg:text-3xl mb-5'>Personal Information</h1>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            {['fullName', 'email', 'password', 'confirmPassword'].map((field) => (
              <div key={field} className='flex flex-col gap-2'>
                <label htmlFor={field} className='capitalize'>{field.replace('Name', ' Name')}</label>
                <input
                  id={field}
                  name={field}
                  type={field === 'password' || field === 'confirmPassword' ? 'password' : 'text'}
                  placeholder={`Enter your ${field.replace('Name', ' name')}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`border transition-all ease-in-out duration-200 focus:border-gray-800 outline-none px-5 rounded-xl py-2 ${errors[field] ? 'border-red-500' : ''}`}
                />
                {errors[field] && <p className='text-red-500 text-sm'>{errors[field]}</p>}
              </div>
            ))}

            <button
              type='submit'
              disabled={isButtonDisabled}
              className='bg-[#00051F] rounded-xl py-2 text-white disabled:bg-gray-400'
            >
              Proceed to Pay
            </button>
          </form>
        </div>

        {/* Order Details */}
        <div className='lg:w-1/2 shadow-lg px-5 lg:px-10 py-5 border-t-4 rounded-md border-gray-800 order-1 lg:order-2'>
          <h1 className='text-xl text-gray-800 lg:text-3xl mb-5'>Order Details</h1>
          <div className='flex flex-col gap-4'>
            <h1>{plan.name}</h1>
            <h1>{plan.price_per_month}/per month</h1>

            <ul className="mt-4 space-y-2">
                {plan.features.map((feature, ind) => (
                  <li key={ind} className="flex items-center gap-2 text-gray-700">
                    <IoCheckmarkDone className="text-green-500" />
                    {feature}
                  </li>
                ))}
            </ul>
            <p className="text-gray-500">{plan.price_per_year}</p>
                    <div className="mt-2">
                    <span className="text-gray-500 line-through">{plan.original_price}</span>
                    <span className="text-green-600 font-bold ml-2">{plan.current_price}</span>
                    </div>
          </div>
        </div>
      </div>
    </section>
  );
}

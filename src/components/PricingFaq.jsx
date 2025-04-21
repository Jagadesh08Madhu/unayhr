import React, { useState } from 'react';
import { motion } from 'framer-motion';

const accordionData = [
  {
    title: 'What is HR software and why do I need it?',
    content: `HR software helps manage payroll, employee data, and compliance efficiently. It reduces errors and allows self-service for employees.`,
  },
  {
    title: 'Why do you need our Software as an Employer?',
    content: `Our HR system helps UK employers meet immigration requirements and manage sponsorship duties while reducing compliance risks.`,
  },
  {
    title: 'How to manage sponsorship license using UnayHR?',
    content: `UnayHR simplifies tasks like right-to-work checks, ID verification, leave tracking, and compliance reporting — all via web or mobile.`,
  },
  {
    title: 'Is our software compliant with tax regulations?',
    content: `Yes, it auto-calculates taxes and deductions based on the latest rules to ensure compliance and avoid penalties.`,
  },
  {
    title: 'Why choose our UnayHR Compliance Software?',
    content: `It’s user-friendly, mobile-accessible, and built to meet UKVI rules, helping employers sponsor workers without legal hassle.`,
  },
  {
    title: 'Can I access UnayHR on my phone?',
    content: `Yes, UnayHR is fully accessible through any web browser and mobile device for on-the-go HR management.`,
  },
  {
    title: 'Is UnayHR suitable for small businesses?',
    content: `Absolutely. It’s scalable and easy to use, making it ideal for both small and large businesses.`,
  },
  {
    title: 'Does UnayHR provide support?',
    content: `Yes, our expert support team is available to guide you through setup and help you maximize the software’s benefits.`,
  },
];

const PricingFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-10 font-lora mx-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-black text-4xl mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="w-full max-w-3xl">
        {accordionData.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <motion.div
              key={index}
              className="border px-4 shadow-md my-2 rounded-lg border-slate-200 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left py-5 text-black"
              >
                <span>{item.title}</span>
                <span
                  className={`text-black transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                >
                  {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>
                  )}
                </span>
              </button>
              <motion.div
                className={`text-sm text-black px-2 ${
                  isOpen ? 'pb-5' : ''
                }`}
                animate={{
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                initial={false}
                transition={{ duration: 0.3 }}
              >
                {isOpen && <div>{item.content}</div>}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PricingFaq;

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "Compliance", path: "/compliance" },

  ];

  // About submenu items
  const aboutSubMenu = ["Cookie policy", "Privacy policy", "General conditions"];

  return (
    <section>
      <nav className="flex font-lora items-center justify-around py-2 px-6 shadow-lg bg-white relative">
        {/* Logo */}
        <div>
          <img className="w-[150px]" src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <ul style={{ letterSpacing: "3px" }} className="flex items-center text-xs font-semibold gap-10 relative">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-600 px-4 py-1 ${isActive(item.path) ? "bg-[#E1E9EC] scale-105 text-[#045cb4]" : ""}`}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </li>
            ))}

            {/* About Dropdown */}
            <li
              className="relative cursor-pointer hover:text-blue-600 flex items-center gap-1"
              onClick={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              About <FaChevronDown size={12} />
              {isAboutOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-5  bg-white shadow-md rounded-lg p-2"
                >
                  {aboutSubMenu.map((submenu, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {submenu}
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          </ul>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <FiX size={30} className="cursor-pointer" onClick={() => setIsMenuOpen(false)} />
            </motion.div>
          ) : (
            <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
              <FiMenu size={30} className="cursor-pointer" onClick={() => setIsMenuOpen(true)} />
            </motion.div>
          )}
        </div>

        {/* Mobile Menu with Animation */}
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 left-0 w-full bg-white shadow-md md:hidden"
          >
            <ul className="flex flex-col items-center gap-5 py-5">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(item.path);
                  }}
                >
                  {item.name}
                </li>
              ))}

              {/* Mobile About Dropdown */}
              <li
                className="relative cursor-pointer hover:text-blue-600 flex flex-col items-center gap-1"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                <div className="flex items-center gap-1">
                  About <FaChevronDown size={12} className={`${isAboutOpen ? "rotate-180" : ""} transition-transform`} />
                </div>
                {isAboutOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 w-40 bg-white shadow-md rounded-lg p-2"
                  >
                    {aboutSubMenu.map((submenu, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        {submenu}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </section>
  );
}

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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "Compliance", path: "/compliance" },
  ];

  const aboutSubMenu = [
    { name: "Cookie policy", path: "/cookie-policy" },
    { name: "Privacy policy", path: "/privacy-policy" },
    { name: "General conditions", path: "/general-conditions" },
  ];

  return (
    <section>
      <nav
        style={{ zIndex: "1000" }}
        className="bg-gradient-to-r sticky py-6 z-50 top-0 left-0 w-full from-[#00051F] via-[#00051F] to-[#00051F] font-lora flex justify-around items-center text-white shadow-md shadow-[#2e3453]"
      >
        {/* Logo */}
        <div>
          <h1
            style={{ letterSpacing: "7px" }}
            onClick={() => navigate("/")}
            className="text-base select-none cursor-pointer"
          >
            UNAYHR PAYROLL
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <ul
            style={{ letterSpacing: "3px" }}
            className="flex items-center text-xs font-semibold gap-10 relative"
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer transition-all duration-300 ease-in-out px-4 py-1 ${
                  isActive(item.path)
                    ? "bg-[#E1E9EC] rounded-md scale-105 text-black"
                    : ""
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </li>
            ))}

            {/* About Dropdown */}
            <li
              className="relative cursor-pointer hover:text-blue-600 flex items-center gap-1"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              About <FaChevronDown size={12} />
              {isAboutOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-5 bg-white shadow-md rounded-lg p-2 text-black"
                >
                  {aboutSubMenu.map((submenu, index) => (
                    <li
                      key={index}
                      onClick={() => navigate(submenu.path)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {submenu.name}
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
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <FiX
                size={30}
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiMenu
                size={30}
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />
            </motion.div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-[77.5px] left-0 w-full bg-[#00051F] shadow-md md:hidden"
          >
            <ul className="flex flex-col items-center gap-5 py-5">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(item.path);
                  }}
                >
                  {item.name}
                </li>
              ))}

              {/* Mobile About Dropdown */}
              <li className="relative cursor-pointer flex flex-col items-center gap-1">
                <div
                  className="flex items-center gap-1"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                  About{" "}
                  <FaChevronDown
                    size={12}
                    className={`${
                      isAboutOpen ? "rotate-180" : ""
                    } transition-transform`}
                  />
                </div>
                {isAboutOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 w-40 bg-white shadow-md rounded-lg p-2 text-black"
                  >
                    {aboutSubMenu.map((submenu, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          navigate(submenu.path);
                          setIsMenuOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {submenu.name}
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

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileSidebar from "../components/MobileSidebar";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const activeLinkClass =
    "font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-xl shadow-md transition-all duration-300";
  const defaultLinkClass =
    "font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-300";

  return (
    <header
      className={`w-full sticky top-0 left-0 z-50 backdrop-blur-lg transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 shadow-md py-2"
          : "bg-gradient-to-r from-gray-100 to-gray-200 py-4"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Mobile Menu Button */}
        <button onClick={toggleSidebar} className="md:hidden text-2xl text-gray-700">
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <div className={`font-extrabold tracking-wide text-gray-800 ${isScrolled ? "text-lg" : "text-xl"}`}>
          <Link to="/">TI<span className="text-indigo-600">CE</span></Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-4 ">
          <li>
            <NavLink to="/" 
            className={({ isActive }) =>
                  `px-3 py-2 rounded-md ${
                    isActive ? activeLinkClass : defaultLinkClass
                  }`}
            >Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? activeLinkClass : defaultLinkClass
              }`}
            >About</NavLink>
          </li>
          <li>
            <NavLink to="/courses"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? activeLinkClass : defaultLinkClass
              }`}
            >Courses</NavLink>
          </li>
          <li>
            <NavLink to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? activeLinkClass : defaultLinkClass
              }`}
            >Contact</NavLink>
          </li>
          <li>
            <Link className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-medium shadow-md hover:bg-[##009961] transition-all duration-300" to={"/courses-online"}>
              Get Started
            </Link>
          </li>
        </ul>


        {/* Mobile Get Started Button */}
        <button className="md:hidden px-4 py-2 rounded-full bg-green-500 text-white text-sm font-medium shadow-md hover:bg-[##009961] transition-all duration-300">
          Get Started
        </button>

        {/* Contact Info */}
        <div className="hidden md:flex flex-col items-end gap-2">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-400 text-white shadow-md">
              <FaPhoneAlt className="text-xs"/>
            </div>
            <span className="text-gray-800 font-medium text-xs">9876543210</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-md">
              <FaEnvelope className="text-xs"/>
            </div>
            <span className="text-gray-800 font-medium text-xs">9876543210@gmail.com</span>
          </div>
        </div>
      </nav>

    {/* Mobile Sidebar Component */}
    {isSidebarOpen && <MobileSidebar onClose={() => setIsSidebarOpen(false)} />}



    </header>
  );
};

export default Header;

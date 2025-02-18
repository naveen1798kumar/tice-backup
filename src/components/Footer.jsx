import React from "react";
import { Link } from "react-router-dom";
import { 
  FaTwitter, 
  FaYoutube, 
  FaFacebook, 
  FaRegCopyright,
  FaMobileAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About & Get Started */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-wide text-center">
              <Link to="/">
                TI<span className="text-indigo-500">CE</span>
              </Link>
            </h2>
            <p className="text-sm text-gray-400 mt-4 text-center">
              Empowering businesses and individuals through cutting-edge digital solutions. Explore our courses and services tailored to your needs.
            </p>
            <div className="mt-6 text-end">
              <h6 className="text-lg font-semibold mb-3">Get Started</h6>
              <Link
                to="/courses-online"
                className="inline-block px-6 py-2 rounded-full bg-green-500 text-white text-sm font-medium shadow-md hover:bg-green-600 transition duration-300"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:text-right">
            <h6 className="text-lg font-semibold mb-3">Quick Links</h6>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-gray-200">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-200">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-200">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:text-right">
            <h6 className="text-lg font-semibold mb-3">Resources</h6>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-gray-200">FAQ</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-200">Careers</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-200">Support</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-200">Partnerships</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="">
            <h6 className="text-lg text-center font-semibold mb-3">Contact Us</h6>
            <div className="space-y-3 pl-4">
              <div className="flex items-center space-x-2 hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                <FaMobileAlt className="text-blue-500" />
                <span>+91 93842 93632</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                <FaEnvelope className="text-blue-500" />
                <span>sdspalani@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>Red Cross Road, Palani</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-around">
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <FaRegCopyright className="text-lg text-gray-500" />
            {currentYear} Made by <span className="text-white font-semibold">SDS</span>. All rights reserved.
          </span>
          <div className="flex space-x-4 mt-4 md:mt-0">
          <div className="group relative z-10 size-[2rem] text-indigo-400 hover:text-white flex justify-center items-center">
          <div className="absolute inset-0 size-[2rem] bg-white rounded-md group-hover:bg-cyan-500 text-gray-400 group-hover:text-black  group-hover:rotate-[45deg] transition-all duration-300 -z-10"></div>
          <a href=""><FaTwitter size={20} className=""/></a>
          </div>
          <div className="group relative z-10 size-[2rem] text-indigo-400 hover:text-white flex justify-center items-center">
          <div className="absolute inset-0 size-[2rem] bg-white rounded-md group-hover:bg-red-500 text-gray-400 group-hover:text-black  group-hover:rotate-[45deg] transition-all duration-300 -z-10"></div>
          <a href=""><FaYoutube size={20} className=""/></a>
          </div>
          <div className="group relative z-10 size-[2rem] text-indigo-400 hover:text-white flex justify-center items-center">
          <div className="absolute inset-0 size-[2rem] bg-white rounded-md group-hover:bg-indigo-500 text-gray-400 group-hover:text-black  group-hover:rotate-[45deg] transition-all duration-300 -z-10"></div>
          <a href=""><FaFacebook size={20} className=""/></a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

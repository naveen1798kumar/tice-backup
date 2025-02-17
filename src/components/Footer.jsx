import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide text-white">
            <Link to="/">TI<span className="text-indigo-500">CE</span></Link>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Empowering businesses and individuals through cutting-edge digital
            solutions. Explore our courses and services tailored to your needs.
          </p>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-3">Company</h6>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-gray-200">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gray-200">Services</Link></li>
            <li><Link to="" className="hover:text-gray-200">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-3">Resources</h6>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/faq" className="hover:text-gray-200">FAQ</Link></li>
            <li><Link to="/careers" className="hover:text-gray-200">Careers</Link></li>
            <li><Link to="/support" className="hover:text-gray-200">Support</Link></li>
            <li><Link to="/partnerships" className="hover:text-gray-200">Partnerships</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-3">Get Started</h6>
          <Link
            className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-medium shadow-md hover:bg-green-600 transition-all duration-300"
            to="/courses-online"
          >
            Explore Courses
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between container mx-auto px-4">
        <span className="text-sm text-gray-400">&copy; {currentYear} Made by SDS. All rights reserved.</span>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

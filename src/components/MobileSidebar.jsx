import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function MobileSidebar({ isSidebarOpen, onClose }) {
  const activeLinkClass =
    "font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300";
  const defaultLinkClass =
    "font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-300";

  return (
    <>
      {/* Sidebar Background Overlay (Click to close) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button onClick={onClose} className="text-xl text-gray-700">
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col p-4 space-y-4">
          {["Home", "About", "Courses", "Contact"].map((item, index) => (
            <li key={index}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                onClick={onClose}
                className={({ isActive }) =>
                  isActive ? activeLinkClass : defaultLinkClass
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
          <li>
            <button className="w-full py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium shadow-md hover:opacity-90 transition-all duration-300">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileSidebar;

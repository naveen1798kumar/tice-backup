import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Banner from "../components/Banner"

import ContactBanner from "../assets/Banners/Contact-Banner.jpg"

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className=" bg-gray-100">

<Banner backgroundImage={ContactBanner} 
title="Get in touch "
description="Get your career to the next level."
  breadcrumbs={[ "Conatct"]}
  bgColor="bg-gradient-to-r from-red-600 to-red-500"
  data-aos="fade-up" />

          {/* Contact Section */}
        <section className="py-16 bg-gray-100">
          {/* Description Section */}
<div className="container mx-auto p-8 my-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg">
  <h2 className="text-4xl font-extrabold text-center mb-4 tracking-wide">Get in Touch with Us</h2>
  <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto font-light">
    <span className="font-semibold">TICE IT Training and Solution Center</span> is a leading institute dedicated to empowering individuals with cutting-edge IT skills.  
    Our industry-focused courses in **Web Development, App Development, Digital Marketing, and Software Solutions** provide hands-on experience with the latest technologies like **ReactJS, Tailwind CSS, and API integration**.  
    Learn from expert faculty, work on **real-world projects**, and earn **globally recognized certifications** to build a successful career in the tech industry.  
    **Join us today and transform your future with top-notch IT education!**
  </p>
</div>


        <div className="container mx-auto px-4 md:flex md:space-x-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-8 shadow-xl rounded-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            {/* {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>} */}
            {/* {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>} */}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 flex flex-col justify-between mt-12 md:mt-0">
            <div className="bg-white p-8 shadow-xl rounded-xl mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Details</h2>
              <p className="text-gray-600 mb-6">
                Reach out to us through any of the following ways:
              </p>
              <div className="space-y-6">
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-3 text-blue-500 text-xl" />
                  <span>TICE Educational Center, Palani, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaPhoneAlt className="mr-3 text-blue-500 text-xl" />
                  <span>+91 93842 93632</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaEnvelope className="mr-3 text-blue-500 text-xl" />
                  <span>sdspalani@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Location</h2>
              <div className="w-full h-64 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.631993977541!2d77.51622437451344!3d10.450748865117585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9de6360313ee1%3A0x420bd092b0aab17f!2sAnnai%20Educational%20Trust!5e0!3m2!1sen!2sin!4v1732617140667!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;

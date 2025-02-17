import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We specialize in web development, app development, digital marketing, and graphic design. Our services cater to businesses and individuals looking for a strong online presence.",
  },
  {
    question: "How long does a project take?",
    answer: "The duration depends on the project's complexity. A simple website may take 2 weeks, while a full-fledged application could take 2-3 months.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes! We provide maintenance and support services to ensure your website or application runs smoothly after launch.",
  },
  {
    question: "What technologies do you use?",
    answer: "We primarily use MERN stack (MongoDB, Express, React, Node.js) for web applications and React Native for mobile development.",
  },
  {
    question: "How do I get a quote?",
    answer: "Simply reach out to us via our contact form, and we'll provide a customized quote based on your requirements.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mb-10">Find answers to common queries about our services, process, and support.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white shadow-md rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-gray-800 hover:bg-gray-200 transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp className="text-indigo-600" /> : <FaChevronDown className="text-indigo-600" />}
            </button>

            {openIndex === index && (
              <div className="p-5 text-gray-700 text-md leading-relaxed border-t border-gray-200 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

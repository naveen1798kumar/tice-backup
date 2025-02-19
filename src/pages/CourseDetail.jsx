import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courses from '../data/courses';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CourseDetail = () => {
  const { category, title } = useParams();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const courseCategory = courses.find(
    (cat) => cat.category.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') === category
  );
  const course = courseCategory?.courses.find(
    (course) => course.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') === title
  );

  

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!course) {
    navigate('/courses');
    return null;
  }

  return (
    <section className="min-h-[100vh] py-16 bg-gray-900 text-white">
              {/* <button
          onClick={() => navigate('/courses')}
          className="flex items-center gap-2 text-lg text-white hover:text-blue-400 transition duration-300"
        >
          <span className="text-2xl">←</span> Back to Courses
        </button> */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          {/* Title */}
          <h1 className="text-5xl font-bold text-blue-400">{course.title}</h1>
          
          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed">{course.description}</p>
          
          {/* Course Details */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400">Course Details</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">{course.detailedDescription}</p>
          </div>

{/* Topics by Level */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {Object.entries(course.topics).map(([level, data]) => (
    <div key={level} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-blue-400">{level} Level - {data.duration}</h3>
      <ul className="mt-4 space-y-2 text-gray-300">
        {data.topics.map((topic, index) => (
          <li key={index} className="transition duration-300 hover:text-white hover:translate-x-2">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>


<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-400">Frequently Asked Questions</h2>
      <ul className="mt-4 space-y-4">
        {course.faq.map((faq, index) => (
          <li key={index} className="border-b border-gray-600 pb-4">
            <button 
              className="w-full flex justify-between items-center text-left text-xl font-semibold text-white"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp className="text-yellow-400" /> : <FaChevronDown className="text-yellow-400" />}
            </button>

            {/* Answer Section with Smooth Dropdown Animation */}
            <div 
              className={`mt-2 text-gray-300 text-md transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>

          {/* Enroll Button */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg transition duration-300">
            Enroll Now 🚀
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/3 flex-shrink-0">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-96 object-cover rounded-lg transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;

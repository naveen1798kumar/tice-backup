import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courses from '../data/courses';

const CourseDetail = () => {
  const { category, title } = useParams();
  const navigate = useNavigate();

  const courseCategory = courses.find(
    (cat) => cat.category.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') === category
  );
  const course = courseCategory?.courses.find(
    (course) => course.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') === title
  );

  if (!course) {
    navigate('/courses');
    return null;
  }

  return (
    <section className="min-h-screen py-16 bg-gray-900 text-white">
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
          {Object.entries(course.topics).map(([level, data]) => (
            <div key={level} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-400">{level} Level - {data.duration}</h3>
              <ul className="mt-4 space-y-2 text-gray-300">
                {data.topics.map((topic, index) => (
                  <li key={index} className="transition duration-300 hover:text-white hover:scale-105">{topic}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* FAQs */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400">Frequently Asked Questions</h2>
            <ul className="mt-4 space-y-4">
              {course.faq.map((faq, index) => (
                <li key={index} className="border-b border-gray-600 pb-4">
                  <h4 className="text-xl font-semibold text-white">{faq.question}</h4>
                  <p className="text-gray-300 mt-2">{faq.answer}</p>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaPaintBrush, FaDatabase, FaChartLine } from 'react-icons/fa';
import courses from '../data/courses.js';
import Banner from "../components/Banner";
import Images from "../assets/IMG_20241210_172713_386.jpg";
import CoursesBanner from "../assets/Banners/Courses-Banner.jpg";
import SectionHeading from '../components/elememtcomponents/SectionHeading.jsx';


const iconMapping = {
  "Web Development": <FaLaptopCode className="text-blue-400 text-4xl" />,
  "Graphic Design": <FaPaintBrush className="text-red-400 text-4xl" />,
  "Database Management": <FaDatabase className="text-green-400 text-4xl" />,
  "Digital Marketing": <FaChartLine className="text-purple-400 text-4xl" />,
};

const generatePath = (title) => title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');

const Courses = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-4 bg-no-repeat bg-fixed" >
      <Banner backgroundImage={CoursesBanner} title="Learn Something New" description="Upgrade your skills with expert-led courses and take your career to the next level."
  breadcrumbs={[ "Courses"]}
  bgColor="bg-gradient-to-r from-indigo-600 to-blue-500"
  data-aos="fade-up" />
      
      <div className="container mx-auto py-16 px-4">
        <SectionHeading title="Our Courses"
        span="Best courses in Coimbatore"
        description="to get placed in IT"/>

        {courses.map((categoryData, index) => (
          <div key={index} className="my-16 bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-2xl p-8 transition-all hover:shadow-2xl">
            <h3 className="text-3xl font-bold flex items-center gap-4 text-blue-300 border-green-600 pl-4 border-l-4">
              {iconMapping[categoryData.category]} {categoryData.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              {categoryData.courses.map((course) => (
                <div key={course.id} className="bg-white bg-opacity-10 rounded-xl p-6 shadow-md transition-all hover:shadow-xl hover:scale-105">
                  <div className="  rounded-lg">
                    <img
                      src={course.image || Background}
                      alt={course.title}
                      className="w-full h-48 object-contain rounded-lg transition duration-500"
                    />
                  </div>
                  <h4 className="text-2xl font-semibold mt-4 text-blue-300">{course.title}</h4>
                  <p className="text-gray-300 mt-2">{course.description.slice(0, 80)}...</p>
                  <Link
                    to={`/courses/${generatePath(categoryData.category)}/${generatePath(course.title)}`}
                    className="text-blue-500 hover:text-blue-400 mt-4 inline-block font-semibold transition duration-300"
                    onClick={handleClick}
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;

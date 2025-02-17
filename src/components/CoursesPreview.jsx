import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './elememtcomponents/SectionHeading';
import HoverButton from './elememtcomponents/HoverButton';

import Mern from "../assets/place4.jpg";
import Testing from "../assets/place5.jpg";
import App from "../assets/place6.jpg";

const featuredCourses = [
  {
    id: 1,
    title: "MERN Stack Development",
    description: "Master the MERN (MongoDB, Express.js, React.js, Node.js) stack and build dynamic, scalable, and high-performance full-stack applications. Learn database management with MongoDB, backend development with Express.js and Node.js, and frontend development using React.js. Gain hands-on experience with REST APIs, authentication, state management, and deployment techniques.",
    image: Mern,
    link: "/courses/mern",
  },
  {
    id: 2,
    title: "Manual & Automation Testing",
    description: "Understand software testing fundamentals, methodologies, and best practices. Learn manual testing techniques for identifying bugs and defects, followed by automation testing using Selenium, JUnit, TestNG, and Postman for API testing. Explore test case creation, automation frameworks, debugging, and CI/CD integration to ensure software quality and efficiency.",
    image: Testing,
    link: "/courses/testing",
  },
  {
    id: 3,
    title: "Android App Development",
    description: "Develop modern Android applications using Java and Kotlin. Learn the fundamentals of Android Studio, UI/UX design principles, Activity and Fragment lifecycle, API integration, Firebase database, push notifications, and advanced topics like MVVM architecture, Jetpack Compose, and performance optimization. Create real-world projects to solidify your learning.",
    image: App,
    link: "/courses/android",
  },
];

const CoursesPreview = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        
        <SectionHeading 
          title="Our Featured Courses" 
          span="Explore our courses designed" 
          description="to equip you with in-demand skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12 py-12">
          {featuredCourses.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white hover:bg-gray-400 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-[0_10px_50px_rgba(8,_112,_1,_0.7)] min-h-[400px]"
            >
              {/* Image Section */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Text Content */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center px-6 text-center  translate-y-[50%] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 transition duration-300 group-hover:text-white">
              {project.title}
              </h3>
                <p className="text-gray-300">{project.description}</p>
                {/* Learn More Button */}
                <Link
                  to={project.link}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 mt-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center'>
          <HoverButton link="/courses" text="Explore Courses" color="green"/>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Contact from './pages/Contact'
import OnlineCourses from './pages/OnlineCourses';

// 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:category/:title" element={<CourseDetail />} />
 {/* Updated route with category */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses-online" element={<OnlineCourses />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

import { FaLaptopCode, FaPaintBrush, FaDatabase, FaChartLine } from 'react-icons/fa';
import FullStack from "./assets.js";

const courses = [
  {
    category: 'Full Stack Development Courses',
    courses: [
      {
        id: 1,
        title: 'MERN Stack Developer Course',
        description: 'Master MongoDB, Express.js, React.js, and Node.js to become a full-stack developer.',
        details: 'This comprehensive course covers full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js). You will start with the fundamentals of web development, gradually progress to building interactive frontends and scalable backends, and finally, learn advanced concepts like authentication, deployment, and performance optimization.',
        icon: '🖥️',
        topics: {
          Beginner: {
            duration: "4 Weeks",
            topics: [
              "Introduction to Web Development",
              "HTML, CSS, and JavaScript Basics",
              "Introduction to Git & GitHub",
              "Getting Started with React.js",
              "Components, Props, and State in React",
              "Basic Routing with React Router",
            ]
          },
          Intermediate: {
            duration: "6 Weeks",
            topics: [
              "Advanced React (Hooks, Context API, Redux)",
              "Building Dynamic Frontend UIs",
              "Introduction to Node.js & Express.js",
              "Building REST APIs with Express",
              "Database Management with MongoDB",
              "User Authentication (JWT, OAuth)",
              "Handling File Uploads & Middleware",
            ]
          },
          Advanced: {
            duration: "6 Weeks",
            topics: [
              "Full-Stack Project Development",
              "Advanced Authentication (Role-based Access Control)",
              "Optimizing Performance & Security Best Practices",
              "Deploying Applications (Vercel, Netlify, AWS, Heroku)",
              "Server-Side Rendering (SSR) & Next.js Basics",
              "Unit Testing & Debugging in Full-Stack Applications",
              "Real-time Applications with WebSockets",
            ]
          }
        },
        image: FullStack.MernStack,
        detailedDescription: "The MERN Stack Developer Course is designed to take you from a complete beginner to an advanced developer. You'll learn how to build modern, responsive, and scalable web applications from scratch. Starting with frontend development using React, you'll progress to backend development with Node.js and Express.js, and finally integrate MongoDB for data storage. By the end of this course, you will be able to develop and deploy a fully functional full-stack application with authentication, database connectivity, and optimized performance.",
        faq: [
          {
            question: "Why should I learn MERN Stack?",
            answer: "MERN Stack is one of the most in-demand full-stack development technologies. It allows developers to build both frontend and backend using JavaScript, making development faster and more efficient. It is widely used by companies for scalable web applications."
          },
          {
            question: "Is this course suitable for beginners?",
            answer: "Yes! The course starts from the basics of web development and gradually builds up to advanced concepts. Whether you are a complete beginner or have some prior knowledge, this course will help you become a full-stack developer."
          },
          {
            question: "What projects will I build?",
            answer: "You'll build several real-world projects, including a portfolio website, a blog platform, an eCommerce site with authentication, and a real-time chat application."
          },
          {
            question: "How long does it take to complete the course?",
            answer: "The course is designed to be completed in approximately 16 weeks if followed consistently. However, the pace can be adjusted based on your availability."
          },
          {
            question: "What are the career opportunities after completing this course?",
            answer: "After completing this course, you can apply for roles such as Frontend Developer, Backend Developer, Full-Stack Developer, or Software Engineer in various startups and tech companies."
          }
        ]
      },
      {
        id: 2,
        title: 'Java Full-Stack Developer Course',
        description: 'Master Java, Spring Boot, Hibernate, and frontend technologies to become a full-stack Java developer.',
        details: 'This comprehensive course covers full-stack development using Java. You will start with core Java fundamentals, progress to backend development with Spring Boot, and frontend development with modern technologies. Finally, you will learn advanced concepts like authentication, deployment, and performance optimization.',
        icon: '☕',
        topics: {
          Beginner: {
            duration: "4 Weeks",
            topics: [
              "Introduction to Java & OOP Principles",
              "Basic Syntax, Data Types, and Loops",
              "Exception Handling and File Handling",
              "Introduction to JDBC & Database Connectivity",
              "Version Control with Git & GitHub",
              "Building Basic Java Applications",
            ]
          },
          Intermediate: {
            duration: "6 Weeks",
            topics: [
              "Advanced Java (Collections, Streams, Lambda Expressions)",
              "Introduction to Spring Framework & Spring Boot",
              "Building REST APIs with Spring Boot",
              "Database Management with Hibernate & JPA",
              "Authentication & Authorization (JWT, OAuth)",
              "Microservices Architecture & API Gateway",
            ]
          },
          Advanced: {
            duration: "6 Weeks",
            topics: [
              "Full-Stack Project Development",
              "Spring Security & Role-Based Access Control",
              "Optimizing Performance & Security Best Practices",
              "Deploying Applications (AWS, Docker, Kubernetes)",
              "Frontend Development with React & Angular",
              "Unit Testing & Debugging in Java Applications",
              "Real-time Applications with WebSockets",
            ]
          }
        },
        image: FullStack.JavaStack,
        detailedDescription: "The Java Full-Stack Developer Course is designed to take you from a beginner to an advanced developer. You'll learn how to build modern, scalable web applications from scratch. Starting with core Java, you'll move on to backend development with Spring Boot, integrate databases using Hibernate, and develop frontend applications using React or Angular. By the end of this course, you will be able to develop and deploy a fully functional full-stack application with authentication, database connectivity, and optimized performance.",
        faq: [
          {
            question: "Why should I learn Java Full-Stack?",
            answer: "Java is one of the most widely used programming languages in the world. Learning full-stack Java development opens up opportunities in enterprise software development, web applications, and microservices architecture."
          },
          {
            question: "Is this course suitable for beginners?",
            answer: "Yes! The course starts from the basics of Java and gradually builds up to advanced concepts. Whether you are a complete beginner or have some prior knowledge, this course will help you become a full-stack Java developer."
          },
          {
            question: "What projects will I build?",
            answer: "You'll build several real-world projects, including a portfolio website, an employee management system, an eCommerce platform with authentication, and a real-time chat application."
          },
          {
            question: "How long does it take to complete the course?",
            answer: "The course is designed to be completed in approximately 16 weeks if followed consistently. However, the pace can be adjusted based on your availability."
          },
          {
            question: "What are the career opportunities after completing this course?",
            answer: "After completing this course, you can apply for roles such as Java Developer, Backend Developer, Full-Stack Developer, or Software Engineer in various companies."
          }
        ]
      },
      {
        id: 3,
        title: 'Python Full Stack Developer Course',
        description: 'Become proficient in Python, Django, React, and PostgreSQL for full-stack development.',
        details: 'This comprehensive course covers full-stack development using Python. You will start with core Python fundamentals, progress to backend development with Django, and frontend development with React. Finally, you will learn advanced concepts like authentication, deployment, and performance optimization.',
        icon: '🐍',
        topics: {
          Beginner: {
            duration: "4 Weeks",
            topics: [
              "Introduction to Python & Programming Basics",
              "Data Structures, Loops, and Functions",
              "Object-Oriented Programming in Python",
              "Introduction to Django & Setting Up Projects",
              "Version Control with Git & GitHub",
              "Building Basic Web Applications with Django",
            ]
          },
          Intermediate: {
            duration: "6 Weeks",
            topics: [
              "Advanced Django (Models, Views, Templates)",
              "Building REST APIs with Django REST Framework",
              "Database Management with PostgreSQL",
              "User Authentication & Authorization (JWT, OAuth)",
              "Frontend Development with React.js",
              "State Management with Redux & Context API",
            ]
          },
          Advanced: {
            duration: "6 Weeks",
            topics: [
              "Full-Stack Project Development",
              "Optimizing Performance & Security Best Practices",
              "Deploying Applications (AWS, Heroku, Docker)",
              "Unit Testing & Debugging in Python Applications",
              "Building Real-time Applications with WebSockets",
              "Microservices Architecture with Django & FastAPI",
            ]
          }
        },
        image: FullStack.PythonStack,
        detailedDescription: "The Python Full-Stack Developer Course is designed to take you from a beginner to an advanced developer. You'll learn how to build modern, scalable web applications from scratch. Starting with core Python, you'll move on to backend development with Django, integrate databases using PostgreSQL, and develop frontend applications using React. By the end of this course, you will be able to develop and deploy a fully functional full-stack application with authentication, database connectivity, and optimized performance.",
        faq: [
          {
            question: "Why should I learn Python Full-Stack?",
            answer: "Python is one of the most versatile and widely used programming languages. Learning full-stack Python development enables you to build scalable web applications, automate tasks, and work with data science and machine learning."
          },
          {
            question: "Is this course suitable for beginners?",
            answer: "Yes! The course starts from the basics of Python and gradually builds up to advanced concepts. Whether you are a complete beginner or have some prior knowledge, this course will help you become a full-stack Python developer."
          },
          {
            question: "What projects will I build?",
            answer: "You'll build several real-world projects, including a portfolio website, a blogging platform, an eCommerce site with authentication, and a real-time chat application."
          },
          {
            question: "How long does it take to complete the course?",
            answer: "The course is designed to be completed in approximately 16 weeks if followed consistently. However, the pace can be adjusted based on your availability."
          },
          {
            question: "What are the career opportunities after completing this course?",
            answer: "After completing this course, you can apply for roles such as Python Developer, Backend Developer, Full-Stack Developer, or Software Engineer in various companies."
          }
        ]
      }
    ]
  },

  {
    category: 'Frontend Development Courses',
    courses: [
      {
        id: 4,
        title: 'React JS Developer Course',
        description: 'Learn React.js to build dynamic and scalable frontend applications.',
        details: 'This course covers JSX, components, state management, hooks, and working with APIs in React. You will also learn Redux and Context API for efficient state management.',
        icon: '⚛️',
        topics: [], // Topics not required here
        image: FullStack.ReactStack
      },
      {
        id: 5,
        title: 'Fundamentals in HTML/CSS & JavaScript',
        description: 'Introduction to web development basics for students and beginners.',
        details: 'This course teaches the core building blocks of the web: HTML for structure, CSS for styling, and JavaScript for interactivity. Perfect for beginners looking to start web development.',
        icon: '🌐',
        topics: [], // Topics not required here
        image: FullStack.HTML
      }
    ]
  },

  {
    category: 'Backend Development & Database Courses',
    courses: [
      {
        id: 6,
        title: 'Node.js Developer Course',
        description: 'Develop scalable server-side applications using Node.js and Express.',
        details: 'This course covers backend development with Node.js, Express.js, handling databases with MongoDB and MySQL, authentication, and building REST APIs.',
        icon: '🌍',
        topics: [], // Topics not required here
        image: FullStack.NodeJS
      },
      {
        id: 7,
        title: 'MySQL Course',
        description: 'Learn MySQL for efficient database management and SQL queries.',
        details: 'Understand relational databases, write complex SQL queries, optimize databases, and integrate MySQL with backend technologies.',
        icon: '💾',
        topics: [], // Topics not required here
        image: FullStack.MySQL
      },
      {
        id: 8,
        title: 'Linux Administration Course',
        description: 'Master Linux commands, server management, and cloud deployments.',
        details: 'Learn Linux system administration, shell scripting, server setup, and cloud deployment with AWS and Docker.',
        icon: '🐧',
        topics: [], // Topics not required here
        image: FullStack.Linux
      }
    ]
  },

  {
    category: 'Software Development & Testing',
    courses: [
      {
        id: 9,
        title: 'Java Developer Course',
        description: 'Comprehensive training in Java programming, OOP concepts, and Spring Boot framework.',
        details: 'Learn Java programming, object-oriented concepts, multithreading, data structures, and backend development with Spring Boot.',
        icon: '☕',
        topics: [], // Topics not required here
        image: FullStack.JavaDev
      },
      {
        id: 10,
        title: 'Python Developer Course',
        description: 'Learn Python programming, Flask/Django, and automation techniques.',
        details: 'Master Python syntax, data structures, automation, web development with Django and Flask, and machine learning basics.',
        icon: '🐍',
        topics: [], // Topics not required here
        image: FullStack.Python
      },
      {
        id: 11,
        title: 'Software Testing Course',
        description: 'Master manual and automation testing with Selenium and JUnit.',
        details: 'Learn software testing fundamentals, manual testing techniques, Selenium WebDriver, JUnit, TestNG, and performance testing.',
        icon: '🛠️',
        topics: [], // Topics not required here
        image: FullStack.Selenium
      }
    ]
  },

  {
    category: 'Mobile App Development',
    courses: [
      {
        id: 12,
        title: 'Android Developer Course',
        description: 'Learn to build Android applications using Java and Kotlin.',
        details: 'Master Android Studio, UI design, API integration, and database management to create powerful Android apps.',
        icon: '📱',
        topics: [], // Topics not required here
        image: '/images/courses/android.jpg'
      }
    ]
  },  
];

const diplomaCourse = [
  {
    category: 'Computer & Office Application Courses',
    courses: [
      {
        id: 1,
        title: 'Office Application Course',
        description: 'Learn Microsoft Office tools including Word, Excel, and PowerPoint.',
        details: 'Get hands-on training in Microsoft Word, Excel formulas, PowerPoint presentations, and advanced Excel functions.',
        icon: '📄',
        topics: [],
        image: '/images/courses/office.jpg'
      },
      {
        id: 2,
        title: 'Computer Accounting Course',
        description: 'Master Tally, QuickBooks, and accounting software for finance management.',
        details: 'Understand business accounting principles, GST calculations, and financial management using Tally and QuickBooks.',
        icon: '💰',
        topics: [],
        image: '/images/courses/accounting.jpg'
      },
      {
        id: 3,
        title: 'Certificate in Office Applications',
        description: 'Earn a certificate by mastering essential office software tools.',
        details: 'This course covers in-depth training in Microsoft Office suite, including advanced features in Word, Excel, and PowerPoint to prepare you for professional environments.',
        icon: '🎓',
        topics: [],
        image: '/images/courses/certificate-office.jpg'
      },
      {
        id: 4,
        title: 'Desktop Publishing',
        description: 'Learn the art of desktop publishing and graphic design.',
        details: 'Gain proficiency in desktop publishing software like Adobe InDesign and QuarkXPress, learn layout design, typography, and prepress processes for professional publishing.',
        icon: '🖨️',
        topics: [],
        image: '/images/courses/desktop-publishing.jpg'
      },
      {
        id: 5,
        title: 'Certificate in Computer Accounts',
        description: 'Acquire essential skills in computer-based accounting.',
        details: 'This course covers the fundamentals of computerized accounting, including the use of popular accounting software, financial reporting, and bookkeeping techniques.',
        icon: '📊',
        topics: [],
        image: '/images/courses/certificate-computer-accounts.jpg'
      },
      {
        id: 6,
        title: 'Diploma in Computer Application',
        description: 'A comprehensive diploma covering various computer applications.',
        details: 'Learn about a range of computer applications including office productivity tools, database management, and basic programming to boost your computer literacy.',
        icon: '💻',
        topics: [],
        image: '/images/courses/diploma-computer-application.jpg'
      },
      {
        id: 7,
        title: 'Diploma in Multimedia Operation',
        description: 'Master multimedia tools for creative production.',
        details: 'This diploma course teaches you video editing, audio production, graphic design, and animation using industry-standard software to prepare you for a career in multimedia production.',
        icon: '🎬',
        topics: [],
        image: '/images/courses/diploma-multimedia.jpg'
      },
      {
        id: 8,
        title: 'Diploma in Computer Programming',
        description: 'Develop foundational programming skills with a comprehensive diploma.',
        details: 'Covering programming fundamentals, algorithm design, and problem-solving techniques, this diploma equips you with essential coding skills using languages such as Python, Java, or C++.',
        icon: '👨‍💻',
        topics: [],
        image: '/images/courses/diploma-programming.jpg'
      },
      {
        id: 9,
        title: 'Diploma in Hardware Technology',
        description: 'Learn the fundamentals of computer hardware and technology.',
        details: 'This course covers computer hardware components, system assembly, troubleshooting, and maintenance techniques to prepare you for roles in IT support and hardware technology.',
        icon: '🖥️',
        topics: [],
        image: '/images/courses/diploma-hardware.jpg'
      }
    ]
  }
]

export {courses, diplomaCourse};
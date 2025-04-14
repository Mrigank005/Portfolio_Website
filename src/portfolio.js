import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Mail, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const projectsData = [
    {
      title: "UPESBuddy",
      description: "An intelligent AI chatbot developed as part of a group project. As a team member of this innovative project, I contribute to creating a comprehensive assistant for UPES students. The chatbot provides instant information about university facilities, campus navigation, faculty details, and more.",
      demoLink: "https://t.me/UpesBot",
      sourceLink: null
    },
    {
      title: "Bubble Hunt Game",
      description: "A fun and interactive bubble hunt game developed using Unity. The game involves popping bubbles to score points, with increasing difficulty levels.",
      demoLink: "#",
      sourceLink: null
    },
    {
      title: "Disaster Response Training Tool",
      description: "The Disaster Response Training Tool is an interactive web-based platform designed to enhance disaster preparedness and response training. It provides users with realistic simulations, decision-making scenarios, and educational resources to improve their ability to handle emergency situations effectively.",
      demoLink: "https://disaster-response-traning-tool.vercel.app/",
      sourceLink: null
    },
    {
      title: "Optical Character Recognition",
      description: "Optical Character Recognition (OCR) using Python and Tesseract. OCR technology enables the conversion of various types of documents, such as scanned paper documents, PDFs, or images captured by a digital camera, into editable and searchable data. By leveraging Python's simplicity and Tesseract's powerful OCR capabilities, this project aims extract text from images.",
      demoLink: "#",
      sourceLink: null
    },
    {
      title: "Full-Stack AI Trip Planner",
      description: "A smart, full-stack trip planner using cutting-edge technologies like React, Gemini AI, Firebase, and TailwindCSS. Whether you're planning a weekend getaway or a world tour, this app helps users generate customized itineraries, discover destinations, and organize trips — all with the help of AI.",
      demoLink: "#",
      sourceLink: null
    },
  ];

  const ProjectCard = ({ title, description, demoLink, sourceLink }) => {
    return (
      <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-700/40 transition-all group">
        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-gray-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-6 tracking-wide">
          {description}
        </p>
        <div className="flex flex-wrap gap-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-600 px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors tracking-wide"
            >
              <ExternalLink size={20} />
              <span>Try Demo</span>
            </a>
          )}
          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-900/60 transition-colors tracking-wide"
            >
              <Github size={20} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const sections = ['home', 'projects', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        if (current) {
          setActiveSection(current);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsScrolling(false), 1000);
      setActiveSection(sectionId);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700' : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300'} ${darkMode ? 'text-white' : 'text-gray-900'} font-mono`}>
      <nav className="p-4 bg-gray-900/30 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-5xl font-black transform -skew-x-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300 mb-4 md:mb-0">
            MS
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 tracking-wider">
            {['Home', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-3 py-2 hover:text-gray-300 transition-colors font-mono relative ${activeSection === item.toLowerCase() ? 'text-gray-300' : ''}`}
                aria-label={`Scroll to ${item}`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-300" />
                )}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="px-3 py-2 hover:text-gray-300 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="max-w-6xl mx-auto pt-48 px-4">
        <div className="flex flex-wrap items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">
              Hello! I Am <span className="text-gray-300">Mrigank Singh</span>
            </h1>
            <p className="text-xl mb-6 tracking-wide">A CS Student who</p>
            <h2 className="text-5xl font-bold mb-4 tracking-tight">
              Loves New Technologies and Coding...
            </h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} tracking-wide`}>
              And Loves to connect with people who share same passion.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold mb-12 tracking-tight">Featured Projects</h2>
        <div className="space-y-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold mb-8 tracking-tight">Contact</h2>
        <p className="text-xl mb-8 tracking-wide">
          Looking to join a cross-functional team that values improving people's lives through accessible design.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Mrigank005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/mrigank-singh-1899bb31b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:mriganksingh005@gmail.com"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Email"
          >
            <Mail size={32} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

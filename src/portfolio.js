import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Mail, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Use a base URL constant
  const BASE_URL = '/Portfolio_Website';

  const techStack = [
    { name: "C", icon: `${BASE_URL}/c.png`, alt: "C Logo", description: "General-purpose language for system programming." },
    { name: "C++", icon: `${BASE_URL}/cpp.png`, alt: "C++ Logo", description: "Object-oriented extension of C for game and system development." },
    { name: "C#", icon: `${BASE_URL}/csharp.png`, alt: "C# Logo", description: "Modern OOP language for Windows apps and Unity games." },
    { name: "Python", icon: `${BASE_URL}/python.png`, alt: "Python Logo", description: "High-level language for web dev, data science, and more." },
    { name: "HTML5", icon: `${BASE_URL}/html5.png`, alt: "HTML5 Logo", description: "Latest version of HTML for web content." },
    { name: "CSS3", icon: `${BASE_URL}/css3.png`, alt: "CSS3 Logo", description: "Latest version of CSS for web styling." },
    { name: "JavaScript", icon: `${BASE_URL}/javascript.png`, alt: "JavaScript Logo", description: "Scripting language for interactive web pages." },
    { name: "Node.js", icon: `${BASE_URL}/nodejs.png`, alt: "Node.js Logo", description: "Runtime for server-side JavaScript applications." },
    { name: "NumPy", icon: `${BASE_URL}/numpy.png`, alt: "NumPy Logo", description: "Python library for numerical computations." },
    { name: "Pandas", icon: `${BASE_URL}/pandas.png`, alt: "Pandas Logo", description: "Python library for data manipulation and analysis." },
    { name: "Matplotlib", icon: `${BASE_URL}/matplotlib.png`, alt: "Matplotlib Logo", description: "Python library for plotting and visualization." },
    { name: "React", icon: `${BASE_URL}/react.png`, alt: "React Logo", description: "JavaScript library for building user interfaces." },
    { name: "Unity", icon: `${BASE_URL}/unity.png`, alt: "Unity Logo", description: "3D development engine for games and simulations." },
    { name: "Gemini API", icon: `${BASE_URL}/gemini.png`, alt: "Gemini API Logo", description: "Google AI's language processing API." },
    { name: "GitHub", icon: `${BASE_URL}/github.png`, alt: "GitHub Logo", description: "Web-based hosting for version control." },
    { name: "VS Code", icon: `${BASE_URL}/vscode.png`, alt: "VS Code Logo", description: "Source-code editor by Microsoft." }
  ];

  const projectsData = [
    {
      title: "UPESBuddy",
      description: "An intelligent AI chatbot developed as part of the AI/ML department at UPES. As a team member of this innovative project, I contribute to creating a comprehensive assistant for UPES students. The chatbot provides instant information about university facilities, campus navigation, faculty details, and more.",
      demoLink: "https://t.me/UpesBot",
      sourceLink: null
    },
    {
      title: "Bubble Hunt Game",
      description: "A fun and interactive bubble hunt game developed using Unity. The game involves popping bubbles to score points, with increasing difficulty levels.",
      demoLink: "https://example.com/bubble-hunt",
      sourceLink: null
    },
    {
      title: "Disaster Response Training Tool",
      description: "A simulation tool designed to train emergency responders in disaster scenarios. The tool provides realistic simulations and feedback to improve response times and decision-making.",
      demoLink: "https://example.com/disaster-response",
      sourceLink: null
    }
  ];

  // Add error handling for images
  const handleImageError = (e) => {
    console.warn(`Failed to load image: ${e.target.src}`);
    e.target.src = `${BASE_URL}/placeholder.png`; // Fallback to placeholder
    // Or alternatively, handle the error by adjusting the parent container's style
    e.target.style.display = 'none';
    e.target.parentElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  };

  const TechStack = ({ stack, darkMode }) => {
    return (
      <div>
        <h2 className={`text-4xl font-bold mb-8 tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stack.map((tech) => (
            <div
              key={tech.name}
              className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group relative"
              role="listitem"
              aria-label={`${tech.name} technology`}
            >
              <div className="bg-white/5 p-3 rounded-lg mb-3">
                <img
                  src={tech.icon}
                  alt={tech.alt}
                  className="w-16 h-16 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
              <p className={`text-center text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-black'} group-hover:text-white transition-colors whitespace-normal`}>
                {tech.name}
              </p>
              <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className={`text-center text-sm ${darkMode ? 'text-white' : 'text-black'} whitespace-normal`}>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ProjectCard = ({ title, description, demoLink, sourceLink }) => {
    return (
      <div className="bg-teal-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-teal-800/40 transition-all group">
        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-teal-300 transition-colors">
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
              className="flex items-center gap-2 bg-teal-600 px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors tracking-wide"
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
              className="flex items-center gap-2 border border-teal-600 px-6 py-2 rounded-lg hover:bg-teal-900/60 transition-colors tracking-wide"
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
        const sections = ['home', 'techstack', 'projects', 'contact'];
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
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800' : 'bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300'} ${darkMode ? 'text-white' : 'text-gray-900'} font-mono`}>
      <nav className="p-4 bg-teal-950/30 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-5xl font-black transform -skew-x-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300 mb-4 md:mb-0">
            MS
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 tracking-wider">
            {['Home', 'TechStack', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-3 py-2 hover:text-teal-300 transition-colors font-mono relative ${activeSection === item.toLowerCase() ? 'text-teal-300' : ''}`}
                aria-label={`Scroll to ${item}`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-300" />
                )}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="px-3 py-2 hover:text-teal-300 transition-colors"
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
              Hello! I Am <span className="text-teal-400">Mrigank Singh</span>
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

      <section id="techstack" className="max-w-6xl mx-auto py-20 px-4">
        <TechStack stack={techStack} darkMode={darkMode} />
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
            className="text-white hover:text-teal-300 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/mrigank-singh-1899bb31b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:mriganksingh005@gmail.com"
            className="text-white hover:text-teal-300 transition-colors"
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
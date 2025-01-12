import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const TechStack = ({ stack }) => {
  const groupedTech = stack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 tracking-tight">Tech Stack</h2>
      {Object.entries(groupedTech).map(([category, techs]) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-teal-300">{category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techs.map((tech) => (
              <div 
                key={tech.name} 
                className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                role="listitem"
                aria-label={`${tech.name} technology`}
              >
                <div className="bg-white/5 p-3 rounded-lg mb-3">
                  <img
                    src={tech.icon}
                    alt={tech.alt}
                    className="w-16 h-16 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
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

const ExperienceCard = ({ title, description, logo, alt }) => {
  return (
    <div className="bg-teal-900/30 backdrop-blur-sm p-8 rounded-lg hover:bg-teal-800/40 transition-all group">
      <div className="mb-4 flex justify-center bg-white p-4 rounded-lg">
        <img src={logo} alt={alt} className="h-12 w-auto object-contain" />
      </div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-teal-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 tracking-wide">{description}</p>
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  const techStack = [
    {
      name: "Python",
      icon: "/python-logo.png",
      alt: "Python Programming Language Logo",
      category: "Programming Languages"
    },
    {
      name: "C++",
      icon: "/cpp-logo.png",
      alt: "C++ Programming Language Logo",
      category: "Programming Languages"
    },
    {
      name: "C",
      icon: "/c-logo.png",
      alt: "C Programming Language Logo",
      category: "Programming Languages"
    },
    {
      name: "JavaScript",
      icon: "/javascript-logo.png",
      alt: "JavaScript Programming Language Logo",
      category: "Web Technologies"
    },
    {
      name: "HTML5",
      icon: "/html5-logo.png",
      alt: "HTML5 Logo",
      category: "Web Technologies"
    },
    {
      name: "CSS3",
      icon: "/css3-logo.png",
      alt: "CSS3 Logo",
      category: "Web Technologies"
    },
    {
      name: "React",
      icon: "/react-logo.png",
      alt: "React JavaScript Library Logo",
      category: "Frameworks"
    },
    {
      name: "NumPy",
      icon: "/numpy-logo.png",
      alt: "NumPy Library Logo",
      category: "Data Science"
    },
    {
      name: "Pandas",
      icon: "/pandas-logo.png",
      alt: "Pandas Library Logo",
      category: "Data Science"
    },
    {
      name: "Git",
      icon: "/git-logo.png",
      alt: "Git Version Control Logo",
      category: "Tools"
    },
    {
      name: "GitHub",
      icon: "/github-logo.png",
      alt: "GitHub Logo",
      category: "Tools"
    },
    {
      name: "VS Code",
      icon: "/vscode-logo.png",
      alt: "Visual Studio Code Logo",
      category: "Tools"
    }
  ];

  const experienceData = [
    {
      title: "Courses",
      description: "Completing courses in Generative AI and AI/ML.",
      logo: "/udemy-logo.png",
      alt: "Udemy Logo"
    },
    {
      title: "School",
      description: "Education includes top grades in computer science with strong problem-solving skills.",
      logo: "/upes-logo.png",
      alt: "UPES Logo"
    }
  ];

  const projectsData = [
    {
      title: "UPESBuddy",
      description: "An intelligent AI chatbot developed as part of the AI/ML department at UPES. As a team member of this innovative project, I contribute to creating a comprehensive assistant for UPES students. The chatbot provides instant information about university facilities, campus navigation, faculty details, and more.",
      demoLink: "https://t.me/UpesBot",
      sourceLink: null
    },
    {
      title: "Gaming Console",
      description: "A retro-style gaming console developed in C programming language, implementing classic arcade games with efficient memory management and hardware interfacing capabilities.",
      demoLink: null,
      sourceLink: "https://github.com"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const sections = ['home', 'techstack', 'experience', 'projects', 'contact'];
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800 text-white font-mono">
      <nav className="p-4 bg-teal-950/30 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-5xl font-black transform -skew-x-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300 mb-4 md:mb-0">
            MS
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 tracking-wider">
            {['Home', 'TechStack', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-3 py-2 hover:text-teal-300 transition-colors font-mono relative ${
                  activeSection === item.toLowerCase() ? 'text-teal-300' : ''
                }`}
                aria-label={`Scroll to ${item}`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-300" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="max-w-6xl mx-auto pt-32 px-4">
        <div className="flex flex-wrap items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">
              Hello! I Am <span className="text-teal-400">Mrigank Singh</span>
            </h1>
            <p className="text-xl mb-6 tracking-wide">A CS Student who</p>
            <h2 className="text-5xl font-bold mb-4 tracking-tight">
              Loves New Technologies and Coding...
            </h2>
            <p className="text-gray-300 tracking-wide">
              And Loves to connect with people who share same passion.
            </p>
          </div>
        </div>
      </section>

      <section id="techstack" className="max-w-6xl mx-auto py-20 px-4">
        <TechStack stack={techStack} />
      </section>

      <section id="experience" className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold mb-12 tracking-tight">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((item) => (
            <ExperienceCard key={item.title} {...item} />
          ))}
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
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

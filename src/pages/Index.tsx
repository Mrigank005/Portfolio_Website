
import React, { useEffect } from 'react';
import StarBackground from '../components/StarBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  // Add smooth scrolling behavior
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the clicked element is an anchor tag with a hash
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        
        // If it's just '#' (to the top), don't do anything special
        if (href === '#') return;
        
        e.preventDefault();
        
        // Get the target element
        const targetElement = document.querySelector(href as string);
        
        if (targetElement) {
          // Smooth scroll to the element
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // Update URL without triggering a page jump
          window.history.pushState(null, '', href);
        }
      }
    };
    
    // Add event listener to the document
    document.addEventListener('click', handleLinkClick);
    
    // Clean up event listener
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <StarBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

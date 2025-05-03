
import React from 'react';
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Mrigank Singh. All rights reserved.
            </p>
            <p className="text-white/40 text-sm italic mt-1">
              "Powered by curiosity and caffeine."
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-space-purple transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-space-purple transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-white/40 text-xs flex items-center justify-center gap-1">
          <span>Built with</span>
          <Heart className="h-3 w-3 text-space-purple animate-pulse" />
          <span>using React and Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

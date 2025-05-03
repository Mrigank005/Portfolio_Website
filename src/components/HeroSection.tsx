
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, RocketIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Floating elements */}
      <div className="planet w-20 h-20 bg-space-violet rounded-full opacity-20 top-1/4 left-1/4 animate-float"></div>
      <div className="planet w-32 h-32 bg-space-purple rounded-full opacity-10 bottom-1/3 right-1/3 animate-float" style={{animationDelay: '-2s'}}></div>
      <div className="planet w-16 h-16 bg-space-star rounded-full opacity-5 bottom-1/4 left-1/3 animate-float" style={{animationDelay: '-4s'}}></div>
      
      {/* Orbit lines */}
      <div className="absolute w-[800px] h-[800px] border border-space-purple/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[600px] h-[600px] border border-space-violet/15 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[400px] h-[400px] border border-space-star/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-space-purple font-medium tracking-wide">Hello, my name is</h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pb-4">
            <span className="block text-white mb-2">Mrigank Singh</span>
            <span className="block bg-gradient-to-r from-space-purple to-space-violet bg-clip-text text-transparent">
              Exploring the cosmos of code and innovation
            </span>
          </h1>
          
          <p className="text-white/70 text-lg max-w-2xl">
            A passionate B.Tech Computer Science student at UPES, Dehradun, navigating through 
            the vast universe of technology and entrepreneurship.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#projects" className="cosmic-primary-button">
              <RocketIcon size={18} />
              View Projects
            </a>
            <a 
              href="https://drive.google.com/file/d/1HrV9PI5mA8kXHC-U5_4hdS7J71Cy7Q7j/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cosmic-secondary-button"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50">
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

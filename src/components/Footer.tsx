
import React from 'react';
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Mrigank Singh. All rights reserved.
          </p>
          <p className="text-white/40 text-sm italic mt-1">
            "Powered by curiosity and caffeine."
          </p>
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

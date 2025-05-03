
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Star, Orbit, Satellite } from "lucide-react";

const AboutSection = () => {
  const traits = [
    { name: "Teamwork", icon: <Satellite className="h-6 w-6 text-space-purple" /> },
    { name: "Resilience", icon: <Moon className="h-6 w-6 text-space-purple" /> },
    { name: "Curiosity", icon: <Star className="h-6 w-6 text-space-purple" /> },
    { name: "Leadership", icon: <Orbit className="h-6 w-6 text-space-purple" /> },
  ];
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="bg-gradient-to-r from-space-purple to-space-violet bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="cosmic-card p-6 h-full">
              <CardContent className="space-y-4">
                <p className="text-lg text-white/90">
                  Motivated B.Tech Computer Science student at UPES, Dehradun, with a deep passion 
                  for tech innovation and entrepreneurship. 
                </p>
                <p className="text-lg text-white/80">
                  I'm adaptable, team-oriented, and driven by the ambition to launch a startup by the third year.
                  My journey in technology is fueled by a desire to build solutions that make a difference.
                </p>
                <p className="text-lg italic text-white/70 border-l-4 border-space-purple pl-4">
                  "I treat every bug like a black hole — challenging, but waiting to be understood."
                </p>
              </CardContent>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, index) => (
              <Card key={index} className="cosmic-card">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full glassmorphism">
                    {trait.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white">{trait.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-space-star opacity-70 rounded-full animate-twinkle"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-space-purple opacity-50 rounded-full animate-twinkle" style={{animationDelay: '-1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-space-violet opacity-60 rounded-full animate-twinkle" style={{animationDelay: '-2s'}}></div>
    </section>
  );
};

export default AboutSection;

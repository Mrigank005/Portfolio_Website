
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Orbit, Satellite, Telescope, Moon, Star } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Rocket className="h-6 w-6" />,
      skills: ["C", "Python", "Shell Scripting", "HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Tools",
      icon: <Telescope className="h-6 w-6" />,
      skills: ["GitHub", "VS Code", "Canva", "MS Office", "Google Workspace"],
    },
    {
      title: "Operating Systems",
      icon: <Moon className="h-6 w-6" />,
      skills: ["Windows", "macOS", "Ubuntu"],
    },
    {
      title: "Soft Skills",
      icon: <Satellite className="h-6 w-6" />,
      skills: ["Communication", "Time Management", "Attention to Detail"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Orbit animation */}
      <div className="absolute w-24 h-24 border border-space-purple/10 rounded-full top-1/4 left-1/4">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-space-purple/60 rounded-full animate-orbit"></div>
      </div>
      <div className="absolute w-32 h-32 border border-space-violet/10 rounded-full bottom-1/3 right-1/4">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-space-violet/60 rounded-full animate-orbit" style={{animationDuration: '20s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="bg-gradient-to-r from-space-purple to-space-violet bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="cosmic-card h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full glassmorphism text-space-purple">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-sm rounded-full glassmorphism text-white/90 hover:bg-space-purple/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Skill level visualization */}
        <div className="mt-16 max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl font-medium text-center mb-8">Technical Proficiency</h3>
          
          {[
            { name: "Frontend Development", level: 80 },
            { name: "Python Programming", level: 85 },
            { name: "Backend Development", level: 60 },
            { name: "UI/UX Design", level: 70 },
          ].map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-space-deeper rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-space-purple to-space-violet animate-pulse-glow"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

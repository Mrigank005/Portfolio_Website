import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();

  const contactInfo = [
    { 
      icon: <Mail className="h-5 w-5" />, 
      title: "Email",
      link: "mailto:mriganksingh005@gmail.com"
    },
    { 
      icon: <Github className="h-5 w-5" />, 
      title: "GitHub",
      link: "https://github.com/Mrigank005"
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      title: "LinkedIn",
      link: "https://linkedin.com/in/mrigank-singh-1899bb31b"
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-space-purple/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="bg-gradient-to-r from-space-purple to-space-violet bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="cosmic-card">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="p-2 rounded-full glassmorphism text-space-purple mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white/70 hover:text-space-purple transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="cosmic-card md:col-span-3">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-white/70">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      required 
                      className="glassmorphism border-white/10 focus-visible:ring-space-purple"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-white/70">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      required 
                      className="glassmorphism border-white/10 focus-visible:ring-space-purple"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-white/70">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="Message subject" 
                    className="glassmorphism border-white/10 focus-visible:ring-space-purple"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-white/70">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={5} 
                    required 
                    className="glassmorphism border-white/10 focus-visible:ring-space-purple resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="cosmic-primary-button w-full"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-space-star opacity-70 rounded-full animate-twinkle"></div>
      <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-space-purple opacity-50 rounded-full animate-twinkle" style={{animationDelay: '-1s'}}></div>
    </section>
  );
};

export default ContactSection;


import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 overflow-hidden">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-up">
              Sasha Huang
            </h1>
          </div>
          
          <div className="overflow-hidden mb-6">
            <h2 className="text-xl md:text-2xl text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Product Manager & Technology Enthusiast
            </h2>
          </div>
          
          <div className="overflow-hidden mb-8">
            <p className="max-w-2xl text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Passionate about creating innovative digital products and leveraging AI technologies to solve complex business challenges.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#contact" className="button-primary">
              Get in Touch
            </a>
            <a href="#experience" className="button-outline">
              View Experience
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;

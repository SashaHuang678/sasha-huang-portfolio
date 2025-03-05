
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/lovable-uploads/15b6f55a-d85e-4a49-b1d0-69eeba63edb0.png"
          alt="Tranquil beach scene"
          className="absolute min-w-full min-h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 to-white"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
          {/* Portrait image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start animate-fade-up">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/01cf07aa-8203-41cb-800a-79260da7df7e.png" 
                alt="Sasha Huang" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop";
                }}
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="mb-4 overflow-hidden">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-up text-white md:text-zinc-900">
                Sasha Huang
              </h1>
            </div>
            
            <div className="overflow-hidden mb-6">
              <h2 className="text-xl md:text-2xl text-white md:text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Product Manager & Technology Enthusiast
              </h2>
            </div>
            
            <div className="overflow-hidden mb-8">
              <p className="max-w-2xl text-white md:text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Passionate about creating innovative digital products and leveraging AI technologies to solve complex business challenges.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="#contact" className="button-primary">
                Get in Touch
              </a>
              <a href="#experience" className="button-outline bg-white/80 hover:bg-white">
                View Experience
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;


import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-bold mb-4">SH</div>
          
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#education" className="text-muted-foreground hover:text-primary transition-colors">Education</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Sasha Huang. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

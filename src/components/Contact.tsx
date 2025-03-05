
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-12">Contact Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:Sasha123@uw.edu" className="text-muted-foreground hover:text-primary transition-colors">
                      Sasha123@uw.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+12065135239" className="text-muted-foreground hover:text-primary transition-colors">
                      (206) 513-5239
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">
                      Seattle, WA 98105
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/sasha-huang-6625b4312" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/sasha-huang-6625b4312
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">Get In Touch</h3>
                <p className="text-muted-foreground mb-4">
                  I'm always open to new opportunities and collaborations.
                </p>
                <a 
                  href="mailto:Sasha123@uw.edu"
                  className="button-primary"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

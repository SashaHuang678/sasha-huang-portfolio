
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <h2 className="section-title">About Me</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg">
              I'm Sasha Huang, a Product Manager with expertise in AI, fintech, and enterprise solutions. Currently pursuing my Master of Science in Information Systems at the University of Washington's Foster School of Business.
            </p>
            
            <p className="text-lg">
              With over 5 years of experience at companies like HSBC and NetEase Games, I've successfully led product development initiatives, reduced operational costs, and improved user experiences through data-driven approaches.
            </p>
            
            <p className="text-lg">
              I'm passionate about leveraging technology to solve complex business challenges, with a particular focus on AI applications and process optimization.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="chip">Product Management</div>
              <div className="chip">Artificial Intelligence</div>
              <div className="chip">Data Analysis</div>
              <div className="chip">User Experience</div>
              <div className="chip">Agile Methodologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

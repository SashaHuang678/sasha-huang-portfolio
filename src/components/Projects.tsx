
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-12">Projects Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-lg p-8 transition-all hover:shadow-xl">
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-2xl font-bold">MoonshotAI</h3>
                <span className="text-muted-foreground">Seattle, WA, USA</span>
              </div>
              <p className="text-lg italic mb-4">
                The winner of the AI program at Foster School, powered by LLM and AI, leveraging reasoning model to helps startups improve business ideas, seek funding, and offer customized evaluation tool for Venture Capital firms.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <span className="font-medium mr-2">Product Manager</span>
                <span>Aug 2024 – Present</span>
              </div>
            </div>
            
            <ul className="space-y-3">
              <li className="flex">
                <span className="text-primary mr-2">•</span>
                <span>Improved the accuracy of AI application by 20% through prompt engineering and models changing.</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-2">•</span>
                <span>Finished implementation of POC within 2 weeks by collaborating with data scientists and engineers.</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-2">•</span>
                <span>Designed solution, research strategies, and evaluation metrics including models quality, costing, and performance by conducting data experiments with various models.</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-2">•</span>
                <span>Delivered product pitch, developed vision, features requirement, UIUX by conducting market analysis.</span>
              </li>
            </ul>
            
            <div className="mt-6 flex flex-wrap gap-2">
              <div className="chip">AI</div>
              <div className="chip">LLM</div>
              <div className="chip">Product Management</div>
              <div className="chip">UX Design</div>
              <div className="chip">Prompt Engineering</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

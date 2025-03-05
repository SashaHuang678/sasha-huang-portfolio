
import React from 'react';

const skillCategories = [
  {
    title: 'Technical Skills',
    skills: ['Java', 'SQL', 'Python', 'C', 'HTML', 'JavaScript']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Photoshop', 'Illustrator', 'Adobe Premiere', 'Jira', 'Excel', 'Looker']
  },
  {
    title: 'Domain Expertise',
    skills: ['Machine Learning', 'AI', 'Data Mining', 'Design Thinking', 'Cloud Computing (AWS)', 'SEO']
  },
  {
    title: 'Certifications',
    skills: ['SAFe POPM (Scaled Agile Framework)', 'PMP', 'AI for Product Management (Google Cloud & Pendo)']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-12">Skills & Certifications</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="glass-card rounded-lg p-6 transition-all hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="chip"
                      style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

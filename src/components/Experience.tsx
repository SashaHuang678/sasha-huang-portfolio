
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    id: 'moonshot',
    company: 'MoonshotAI',
    position: 'Product Manager',
    location: 'Seattle, WA, USA',
    period: 'Aug 2024 – Present',
    highlights: [
      'Improved the accuracy of AI application by 20% through prompt engineering and models changing.',
      'Finished implementation of POC within 2 weeks by collaborating with data scientists and engineers.',
      'Designed solution, research strategies, and evaluation metrics including models quality, costing, and performance by conducting data experiments with various models.',
      'Delivered product pitch, developed vision, features requirement, UIUX by conducting market analysis.'
    ],
    description: 'The winner of the AI program at Foster School, powered by LLM and AI, leveraging reasoning model to helps startups improve business ideas, seek funding, and offer customized evaluation tool for Venture Capital firms.'
  },
  {
    id: 'hsbc-pm',
    company: 'HSBC',
    position: 'Product Manager',
    location: 'Guangzhou, China',
    period: 'Aug 2021 – May 2024',
    highlights: [
      'Reduced operation cost by 50% through launching strategic payment and profile management features.',
      'Increased journey success rates by 10% through analyzing data, root cause, and delivering enhancements with better user experience for identity verification and account resetting within 1 month.',
      'Migrated 2 million users to a new platform, raised user base by 15% through launching 10+ features including sign-up, sign-in, fraud detection, face recognition, and OCR to secure customers.',
      'Led product management for Hong Kong, UK, Singapore markets, defined vision, roadmap, OKRs, priorities, user stories, collaborating with market and legal teams to ensure compliance and maximize business value.',
      'Trained junior members, improved efficiency of workflows by 30%~50% for 2 cross-functional teams and 3 projects through stakeholders management and process optimization with Agile methodologies.',
      'Presented and showcased outcomes, key findings, and insights to senior executives at global workshops.'
    ]
  },
  {
    id: 'netease',
    company: 'NetEase Games',
    position: 'Program Manager',
    location: 'Guangzhou, China',
    period: 'Mar 2021 – Jun 2021',
    highlights: [
      'Managed 80+ weekly releases of collaboration and enterprise products including messaging tool, Kanban and Canteen Self-Ordering system for 20,000+ internal users by coordinating with cross-functional teams.',
      'Achieved key milestones across 10+ platforms by collaborating with senior executive stakeholders, leading project planning, and resource management of 70+ employees including engineers, QAs and product teams.',
      'Reduced Scope Change Rate and Release Delay Rate by 5%~10% through data monitoring, retrospectively reporting, and project process optimization.'
    ],
    description: "One of China's largest gaming and music streaming companies, with 20,000+ employees worldwide. Developed and published Harry Potter: Magic Awakened, and more, partnering with Warner Bros. and Mojang (Microsoft)."
  },
  {
    id: 'hsbc-pmo',
    company: 'HSBC',
    position: 'Product Manager & Project Management Office',
    location: 'Guangzhou, China',
    period: 'Sep 2018 – Mar 2021',
    highlights: [
      'Reduced management and operation resource cost by 80% through implementing and launching innovative office automation and enterprise products from zero-to-one with an internal startup team.',
      'Created 4 products including Talent Development System and Funding Management System by running through product lifecycle including problem analysis, prototyping and optimizing with users feedback.',
      'Ensured smooth operations for a project team of 380+ employees by tracking project status, overseeing budget and resource allocation, and standardizing project management processes and team policies.'
    ]
  },
  {
    id: 'starswtrip',
    company: 'Starswtrip',
    position: 'Founder, Product Manager',
    location: 'Guangzhou, China',
    period: 'Nov 2017 – Sep 2018',
    highlights: [
      'Established 20+ international programs in locations including Iceland, France, Kenya, Nepal, Thailand and Japan through forming partnerships with global organizations.',
      'Secured angel investment, been selected and supported by the College Entrepreneurship Incubation Base.',
      'Developed product vision, strategy and roadmaps, led the designing and implementing of the company website and branding by conducting market analysis, identifying target users and personas.',
      'Expanded social media presence to 5,000+ followers and attracted 200+ participants within 3 months by creating engaging content including videos and organizing 10+ marketing events.'
    ],
    description: 'Supported the development of young people and bridged the communication of diverse cultures by providing oversea volunteering, internship and study tour programs in schools, NGO, communities and companies.'
  },
  {
    id: 'documentary',
    company: 'Non-profit Documentary Film Project',
    position: 'Director & Editor',
    location: 'Taiwan',
    period: 'Feb 2016 – Jun 2016',
    highlights: [
      'Conducted field research and interviews with students and faculty.',
      'Filmed and edited the movie by collaborating with the team.'
    ],
    description: 'The film focused on the education of secondary school students in remote areas, with a particular emphasis on the lack of educational resources in such areas. It also served to assist schools in raising sponsorship.'
  }
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-12">Work Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-4 lg:space-x-0 lg:space-y-1 pb-4 lg:pb-0">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp.id)}
                className={cn(
                  "px-4 py-3 text-left rounded-lg transition-all duration-300 whitespace-nowrap lg:whitespace-normal",
                  activeExperience === exp.id
                    ? "bg-white shadow-md"
                    : "hover:bg-white/50"
                )}
              >
                <div className="font-medium">{exp.company}</div>
                <div className="text-sm text-muted-foreground">{exp.position}</div>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="lg:col-span-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={cn(
                  "glass-card rounded-lg p-6 transition-all duration-500",
                  activeExperience === exp.id
                    ? "animate-scale-in"
                    : "hidden"
                )}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground">
                    <span className="font-medium">{exp.company}</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{exp.period}</div>
                </div>
                
                {exp.description && (
                  <p className="mb-4 italic text-muted-foreground">{exp.description}</p>
                )}
                
                <ul className="space-y-2 list-disc pl-5">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="text-foreground">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

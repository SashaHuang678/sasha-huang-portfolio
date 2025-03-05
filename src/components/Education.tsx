
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-12">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="timeline-item">
            <div className="glass-card rounded-lg p-6 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold">University of Washington - Michael G. Foster School of Business</h3>
              <p className="text-muted-foreground">Seattle, WA, USA</p>
              <div className="mt-2 mb-4">
                <div className="text-foreground font-medium">Master of Science in Information Systems</div>
                <div className="text-muted-foreground">In Progress, Expected Graduation: Jun 2025</div>
              </div>
              <div className="space-y-2">
                <div className="chip">Information Systems</div>
                <div className="chip">Data Analytics</div>
                <div className="chip">Business Intelligence</div>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="glass-card rounded-lg p-6 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold">South China Agricultural University</h3>
              <p className="text-muted-foreground">Guangzhou, China</p>
              <div className="mt-2 mb-4">
                <div className="text-foreground font-medium">Bachelor of Management, Information Management and Information Systems</div>
                <div className="text-muted-foreground">2018</div>
              </div>
              <div className="space-y-2">
                <div className="chip">Information Management</div>
                <div className="chip">Information Systems</div>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="glass-card rounded-lg p-6 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold">Providence University</h3>
              <p className="text-muted-foreground">Taiwan</p>
              <div className="mt-2 mb-4">
                <div className="text-foreground font-medium">Exchange Student, Information Management</div>
                <div className="text-muted-foreground">College of Computing and Informatics</div>
              </div>
              <div className="space-y-2">
                <div className="chip">Information Management</div>
                <div className="chip">Exchange Program</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

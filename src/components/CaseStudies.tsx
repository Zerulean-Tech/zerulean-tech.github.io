import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  delay: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, image, category, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all animate-on-scroll opacity-0"
      style={{ animationDelay: delay }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="text-sm font-medium text-indigo-600 mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        
        <a 
          href="#" 
          className="inline-flex items-center text-indigo-600 font-medium group/link"
        >
          Read Case Study
          <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Local Restaurant Chain Growth",
      description: "How we helped a family-owned restaurant chain modernize their operations and expand to 5 locations.",
      image: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Digital Transformation",
      delay: "0.1s"
    },
    {
      title: "Retail Store Modernization",
      description: "Implementing affordable POS and inventory systems that helped a local retailer compete with big chains.",
      image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Business Software",
      delay: "0.2s"
    },
    {
      title: "Law Firm Security Upgrade",
      description: "Securing client data and enabling remote work for a growing law practice with 15 employees.",
      image: "https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "IT Security",
      delay: "0.3s"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            Success Stories
          </h2>
          <p className="text-slate-600 text-lg animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
            See how we've helped local businesses like yours succeed with the right technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              description={study.description}
              image={study.image}
              category={study.category}
              delay={study.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
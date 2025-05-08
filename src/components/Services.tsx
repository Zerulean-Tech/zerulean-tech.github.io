import React from 'react';
import { Cloud, Shield, Cpu, Database, BarChart, Globe } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group animate-on-scroll opacity-0 hover:-translate-y-1"
      style={{ animationDelay: delay }}
    >
      <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Affordable cloud storage and applications that grow with your business. No complex contracts or hidden fees.",
      delay: "0.1s"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "IT Security",
      description: "Protect your business with simple yet effective security solutions designed for small business budgets.",
      delay: "0.2s"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Business Software",
      description: "Custom software solutions and integrations that streamline your operations without breaking the bank.",
      delay: "0.3s"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Backup",
      description: "Secure, automated backup solutions to keep your business data safe and accessible when you need it.",
      delay: "0.4s"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "IT Support",
      description: "Responsive technical support and maintenance to keep your systems running smoothly 24/7.",
      delay: "0.5s"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Services",
      description: "Professional websites and online tools to help your business stand out and serve customers better.",
      delay: "0.6s"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            IT Solutions Made Simple
          </h2>
          <p className="text-slate-600 text-lg animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
            Affordable technology solutions that help small businesses grow without the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
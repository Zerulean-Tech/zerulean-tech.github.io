import React from 'react';
import { Check, Clock, Zap, Lock } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0">
              Why Choose Zerulean Technologies?
            </h2>
            <p className="text-indigo-200 text-lg mb-8 animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
              We deliver cutting-edge solutions that empower your business to scale efficiently, 
              secure critical assets, and gain a competitive advantage.
            </p>
            
            <div className="space-y-6">
              <FeatureItem 
                icon={<Zap className="w-5 h-5" />}
                title="Rapid Implementation"
                description="Get up and running quickly with our streamlined onboarding process"
                delay="0.2s"
              />
              <FeatureItem 
                icon={<Lock className="w-5 h-5" />}
                title="Enterprise-Grade Security"
                description="Protect your data with military-grade encryption and compliance"
                delay="0.3s"
              />
              <FeatureItem 
                icon={<Clock className="w-5 h-5" />}
                title="24/7 Support & Monitoring"
                description="Our team is always available to ensure your systems run smoothly"
                delay="0.4s"
              />
              <FeatureItem 
                icon={<Check className="w-5 h-5" />}
                title="99.99% Uptime Guarantee"
                description="We ensure your services remain available when you need them most"
                delay="0.5s"
              />
            </div>
          </div>
          
          <div className="relative animate-on-scroll opacity-0" style={{ animationDelay: "0.6s" }}>
            <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl p-1">
              <div className="bg-indigo-900 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Zerulean dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-400 rounded-lg rotate-12 opacity-30"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-400 rounded-full opacity-30"></div>
            <div className="absolute bottom-12 -left-4 w-8 h-8 bg-teal-400 rounded-lg rotate-45 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, delay }) => {
  return (
    <div className="flex items-start animate-on-scroll opacity-0" style={{ animationDelay: delay }}>
      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-indigo-200">{description}</p>
      </div>
    </div>
  );
};

export default Features;
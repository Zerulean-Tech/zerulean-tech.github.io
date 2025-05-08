import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const taglineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Background Elements */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 
            ref={taglineRef}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 animate-on-scroll opacity-0"
          >
            Taking your business, beyond the cloud
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            Affordable cloud solutions and IT services designed specifically for small and medium businesses. 
            We help you grow with technology that works for your budget.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-full font-medium flex items-center justify-center hover:shadow-lg hover:shadow-indigo-200 transition-all group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#pricing" 
              className="px-8 py-3 bg-white border border-slate-200 text-slate-800 rounded-full font-medium flex items-center justify-center hover:shadow-md transition-all"
            >
              View Pricing
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto relative animate-on-scroll opacity-0" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white shadow-2xl shadow-indigo-100 rounded-2xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Small business team working together" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Overlay Elements */}
          <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-indigo-600 rounded-2xl h-12 w-12 md:h-16 md:w-16 flex items-center justify-center text-white">
            <span className="text-lg md:text-2xl font-bold">Z</span>
          </div>
          
          <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl h-12 w-12 md:h-16 md:w-16 flex items-center justify-center text-white">
            <span className="text-lg md:text-2xl font-bold">T</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
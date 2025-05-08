import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick, delay }) => {
  return (
    <div 
      className="border-b border-slate-200 py-5 animate-on-scroll opacity-0"
      style={{ animationDelay: delay }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-slate-800">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-indigo-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>
      
      <div 
        className={`mt-2 text-slate-600 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-2">{answer}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const faqItems = [
    {
      question: "How quickly can Zerulean migrate our applications to the cloud?",
      answer: "Our typical cloud migration process takes 4-12 weeks depending on the complexity and number of applications. We use our proprietary migration framework to ensure minimal disruption to your business operations. For most clients, we achieve zero downtime during the transition."
    },
    {
      question: "What security measures do you implement to protect our data?",
      answer: "We implement multiple layers of security including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, HIPAA, and GDPR. Our security operations center monitors your systems 24/7 to prevent and address any potential threats."
    },
    {
      question: "Can your AI solutions integrate with our existing tech stack?",
      answer: "Yes, our AI solutions are designed to be interoperable with most popular tech stacks and legacy systems. We provide custom integrations to ensure seamless data flow between systems. Our team will conduct a detailed assessment of your current infrastructure to determine the best integration approach."
    },
    {
      question: "How do you ensure business continuity during implementation?",
      answer: "We follow a phased implementation approach with extensive testing at each stage. We create detailed rollback plans, maintain redundant systems during transitions, and schedule critical changes during low-traffic periods. Our 24/7 support team is on standby during all major implementations."
    },
    {
      question: "What kind of ROI can we expect from implementing your solutions?",
      answer: "Most of our clients see ROI within 6-12 months of implementation. On average, our cloud migration services reduce IT operational costs by 30-40%, while our AI and automation solutions typically improve operational efficiency by 25-35%. We provide detailed reporting and KPI tracking to measure the specific impact on your business."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
              Find answers to common questions about our services and solutions
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            {faqItems.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === openIndex}
                onClick={() => toggleFaq(index)}
                delay={`${0.2 + index * 0.1}s`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
import React, { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix: string;
  delay: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix, delay }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          
          let start = 0;
          const duration = 2000; // ms
          const step = value / (duration / 16); // Assuming 60fps
          
          const timer = setInterval(() => {
            start += step;
            if (start > value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value]);

  return (
    <div ref={counterRef} className="animate-on-scroll opacity-0" style={{ animationDelay: delay }}>
      <div className="text-3xl md:text-4xl font-bold text-indigo-600">
        {count}{suffix}
      </div>
      <p className="text-slate-600 mt-2">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            Trusted by Local Businesses
          </h2>
          <p className="text-slate-600 text-lg animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
            Join hundreds of small businesses who trust us with their IT needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem value={500} label="Local Businesses Served" suffix="+" delay="0.2s" />
          <StatItem value={95} label="Client Satisfaction" suffix="%" delay="0.3s" />
          <StatItem value={24} label="Hour Support" suffix="/7" delay="0.4s" />
          <StatItem value={10} label="Years of Service" suffix="+" delay="0.5s" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
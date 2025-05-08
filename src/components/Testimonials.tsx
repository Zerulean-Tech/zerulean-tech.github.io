import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      text: "Zerulean helped us modernize our entire business without breaking the bank. Their IT support is amazing, and they really understand what small businesses need.",
      author: "Mike Anderson",
      position: "Owner",
      company: "Anderson Family Bakery",
      rating: 5,
      image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      text: "Finally, IT support that speaks our language! They set up our new systems and trained our staff without any technical jargon. Couldn't be happier.",
      author: "Lisa Chen",
      position: "Manager",
      company: "Green Valley Market",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      text: "The team at Zerulean made our transition to cloud services smooth and affordable. They're always there when we need them.",
      author: "James Wilson",
      position: "Director",
      company: "Wilson Law Group",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-lg animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
            Hear from local business owners who trust us with their technology needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-indigo-50">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <div className="flex mb-4 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-slate-700 text-lg italic mb-6">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-slate-600">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  company?: string;
  content: string;
  rating: number;
}

const ClientTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "Bright Future LLC",
      content: "SNA transformed our financial management system. Their attention to detail and proactive approach saved us from potential tax issues and helped us optimize our cash flow. Definitely recommend their services!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Small Business Owner",
      content: "As a small business owner, I was drowning in paperwork until I found SNA. Their team organized my finances, set up efficient systems, and now I can focus on growing my business instead of worrying about bookkeeping.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "Sunset Hospitality",
      content: "We've been working with SNA for over three years now. Their monthly financial reports are clear and insightful, and they're always available to answer questions. They're truly partners in our financial success.",
      rating: 5
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Freelance Consultant",
      content: "SNA understands the unique challenges freelancers face. They helped me set up a proper accounting system, maximize my deductions, and prepare for tax season without the usual stress. Worth every penny!",
      rating: 5
    },
  ];

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex(current => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex(current => 
      (current + 1) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Client Reviews
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-secondary-500 mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Don't just take our word for it - see what our clients have to say about our bookkeeping and accounting services.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg bg-sky-300">
            <div className="p-8 md:p-12 relative">
              <div className="text-primary-400 mb-6 flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={24} 
                    fill={i < testimonials[activeIndex].rating ? "#F59E0B" : "none"} 
                    color={i < testimonials[activeIndex].rating ? "#F59E0B" : "#D1D5DB"}
                  />
                ))}
              </div>
              
              <motion.div
                key={testimonials[activeIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <blockquote className="text-xl italic font-medium text-gray-700 mb-6">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="bg-primary-200 rounded-full p-2 mr-4">
                    <User size={24} className="text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900">{testimonials[activeIndex].name}</h4>
                    {(testimonials[activeIndex].role || testimonials[activeIndex].company) && (
                      <p className="text-gray-600">
                        {testimonials[activeIndex].role}
                        {testimonials[activeIndex].role && testimonials[activeIndex].company && ", "}
                        {testimonials[activeIndex].company}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-primary-600" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-primary-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
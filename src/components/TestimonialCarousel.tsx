import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialCarouselProps {
  industry: string;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ industry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Map of testimonials by industry
  const testimonialsByIndustry: Record<string, Array<{
    quote: string;
    author: string;
    position: string;
    company: string;
  }>> = {
    retail: [
      {
        quote: "Their retail-specific expertise saved us thousands in inventory tax assessments. They understand the seasonal nature of our business and help us prepare accordingly.",
        author: "Emily Johnson",
        position: "Owner",
        company: "Urban Style Boutique"
      },
      {
        quote: "Managing sales tax across multiple states was a nightmare until we partnered with them. Now we're fully compliant and I can sleep at night.",
        author: "Michael Rodriguez",
        position: "CFO",
        company: "GadgetWorld Online"
      }
    ],
    healthcare: [
      {
        quote: "Their understanding of healthcare billing cycles and insurance reconciliation has transformed our practice's financial health.",
        author: "Dr. Sarah Williams",
        position: "Medical Director",
        company: "Wellness Medical Group"
      },
      {
        quote: "They helped us navigate complex Medicare reimbursement changes while maintaining our focus on patient care.",
        author: "James Chen",
        position: "Practice Manager",
        company: "Family Care Associates"
      }
    ],
    construction: [
      {
        quote: "Their job costing system helped us identify unprofitable projects and improve our bidding process. Our margins have improved by 12% in just one year.",
        author: "Robert Miller",
        position: "President",
        company: "Miller Construction Co."
      },
      {
        quote: "They understand the unique cash flow challenges in construction and helped us establish a system that keeps us liquid even during slow periods.",
        author: "Lisa Sanchez",
        position: "Operations Director",
        company: "Precision Builders"
      }
    ],
    technology: [
      {
        quote: "They helped us structure our SaaS revenue recognition properly from day one, which made our Series A funding process much smoother.",
        author: "David Kim",
        position: "CEO",
        company: "CloudSync Technologies"
      },
      {
        quote: "Their expertise in R&D tax credits recovered over $200,000 that we were able to reinvest in product development.",
        author: "Alicia Thompson",
        position: "CTO",
        company: "Innovate Solutions"
      }
    ],
    professional: [
      {
        quote: "They revolutionized our time tracking and billing process, increasing our realization rate by 15% in the first quarter alone.",
        author: "Jonathan Lawson",
        position: "Managing Partner",
        company: "Lawson & Associates"
      },
      {
        quote: "Their partner compensation analysis helped us restructure in a way that's both fair and incentivizes growth.",
        author: "Maria Bennett",
        position: "HR Director",
        company: "Global Consulting Group"
      }
    ],
    nonprofit: [
      {
        quote: "Their expertise in fund accounting ensures we maintain perfect compliance with restricted donations, which has impressed our major donors.",
        author: "Thomas Wilson",
        position: "Executive Director",
        company: "Community Outreach Foundation"
      },
      {
        quote: "They streamlined our grant reporting process, saving us countless hours and ensuring we meet all compliance requirements.",
        author: "Grace Martinez",
        position: "Development Director",
        company: "Children's Education Alliance"
      }
    ]
  };
  
  const testimonials = testimonialsByIndustry[industry] || [];
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 md:p-8 relative">
      <div className="absolute top-8 left-8 text-cyan-500 opacity-20">
        <Quote size={64} />
      </div>
      
      <div className="relative z-10 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <p className="text-gray-700 text-lg italic mb-6 relative z-10">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
              <p className="text-gray-600">
                {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-between mt-6">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-cyan-500 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:text-cyan-600"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:text-cyan-600"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
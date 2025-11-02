import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoTestimonial {
  id: number;
  thumbnailUrl: string;
  title: string;
  clientName: string;
  clientPosition?: string;
  videoUrl: string;
}

const VideoTestimonials: React.FC = () => {
  const testimonials: VideoTestimonial[] = [
    {
      id: 1,
      thumbnailUrl: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "How AccuBooks Helped Our Retail Business",
      clientName: "Robert Johnson",
      clientPosition: "CEO, Fashion Forward",
      videoUrl: "#"
    },
    {
      id: 2,
      thumbnailUrl: "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Tax Savings for Our Restaurant Chain",
      clientName: "Maria Garcia",
      clientPosition: "Owner, Taste of Italy",
      videoUrl: "#"
    },
    {
      id: 3,
      thumbnailUrl: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Streamlining Our Tech Startup's Finances",
      clientName: "Jason Lee",
      clientPosition: "Founder, NextGen Solutions",
      videoUrl: "#"
    },
    {
      id: 4,
      thumbnailUrl: "https://images.pexels.com/photos/3783358/pexels-photo-3783358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Bookkeeping Support for Our E-commerce Store",
      clientName: "Jennifer Taylor",
      clientPosition: "Operations Manager, GadgetMart",
      videoUrl: "#"
    },
    {
      id: 5,
      thumbnailUrl: "https://images.pexels.com/photos/3760373/pexels-photo-3760373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Financial Strategy for Our Legal Practice",
      clientName: "Michael Peterson",
      clientPosition: "Senior Partner, Peterson Law",
      videoUrl: "#"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Testimonials
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
            Hear directly from our clients about how our bookkeeping and accounting services have helped their businesses thrive.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.slice(0, 3).map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={item}
              className="rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative">
                <img 
                  src={testimonial.thumbnailUrl} 
                  alt={testimonial.title}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors"
                    aria-label={`Play ${testimonial.title} video`}
                  >
                    <Play size={24} className="text-primary-600 fill-primary-600" />
                  </button>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{testimonial.title}</h3>
                <p className="text-gray-700">
                  <span className="font-medium">{testimonial.clientName}</span>
                  {testimonial.clientPosition && (
                    <span> - {testimonial.clientPosition}</span>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.slice(3, 5).map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={item}
              className="rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative">
                <img 
                  src={testimonial.thumbnailUrl} 
                  alt={testimonial.title}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors"
                    aria-label={`Play ${testimonial.title} video`}
                  >
                    <Play size={24} className="text-primary-600 fill-primary-600" />
                  </button>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{testimonial.title}</h3>
                <p className="text-gray-700">
                  <span className="font-medium">{testimonial.clientName}</span>
                  {testimonial.clientPosition && (
                    <span> - {testimonial.clientPosition}</span>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
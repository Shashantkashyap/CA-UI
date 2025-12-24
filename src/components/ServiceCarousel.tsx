import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  points?: string[];
}

interface ServiceCarouselProps {
  services: Service[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        const next = prev + newDirection;
        if (next < 0) return services.length - 1;
        if (next >= services.length) return 0;
        return next;
      });
    },
    [services.length]
  );

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, paginate]);

  const currentService = services[currentIndex];

  return (
    <div
      className="relative w-full max-w-xl mx-auto mt-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Card */}
      <div className="relative h-[340px] overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 px-8 py-10 flex flex-col justify-between"
          >
            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {currentService.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {currentService.description}
              </p>

              {currentService.points && (
                <ul className="space-y-2">
                  {currentService.points.slice(0, 3).map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-slate-500 leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate("/services")}
              className="self-start mt-2 mb-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              View service details →
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 -left-10 -translate-y-1/2 p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-primary-600 hover:shadow transition"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 -right-10 -translate-y-1/2 p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-primary-600 hover:shadow transition"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-6 bg-primary-600"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;

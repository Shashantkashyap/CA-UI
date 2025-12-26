import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface WhyWorkWithUsPoint {
  icon?: React.ReactNode;
  title: string;
  summary: string;
  bullets: string[];
}

interface WhyWorkWithUsCarouselProps {
  title: string;
  subtitle?: string;
  points: WhyWorkWithUsPoint[];
}

const WhyWorkWithUsCarousel: React.FC<WhyWorkWithUsCarouselProps> = ({
  title,
  subtitle,
  points,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  /* ------------------ Animation ------------------ */
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 240 : -240,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 240 : -240,
      opacity: 0,
    }),
  };

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        const next = prev + newDirection;
        if (next < 0) return points.length - 1;
        if (next >= points.length) return 0;
        return next;
      });
    },
    [points.length]
  );

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => paginate(1), 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, paginate]);

  /* ------------------ UI ------------------ */
  return (
    <section ref={ref} className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 text-base md:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                alt="Why Work With Us"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT — Executive Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-lg"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative h-[380px] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 p-8 flex flex-col justify-between"
                >
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        {points[currentIndex].icon}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {points[currentIndex].title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {points[currentIndex].summary}
                    </p>

                    <div className="h-px bg-slate-200 mb-5" />

                    <ul className="space-y-3">
                      {points[currentIndex].bullets.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-slate-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 text-sm font-medium text-blue-600">
                    Trusted by growing businesses →
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              <button
                onClick={() => paginate(-1)}
                className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:shadow transition"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:shadow transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {points.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-slate-300 hover:bg-blue-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsCarousel;

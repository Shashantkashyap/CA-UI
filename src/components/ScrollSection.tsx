import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollSectionPoint {
  text: string;
}

interface ScrollSectionProps {
  title: string;
  subtitle?: string;
  points: ScrollSectionPoint[];
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  title,
  subtitle,
  points,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-24 bg-slate-50"
    >
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

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <p className="text-slate-700 text-sm leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;

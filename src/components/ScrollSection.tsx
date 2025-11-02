import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollSectionPoint {
  icon: React.ReactNode;
  text: string;
}

interface ScrollSectionProps {
  backgroundImage: string;
  title: string;
  points: ScrollSectionPoint[];
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  backgroundImage,
  title,
  points,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          y: yMove,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary-900/80 to-black/90" />
      </motion.div>

      {/* Floating Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            {title}
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-12 rounded-full" />
        </motion.div>

        {/* Animated Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : { opacity: 0, y: 50, rotateX: 15 }
              }
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl text-left group overflow-hidden hover:bg-white/20 transition"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="text-blue-400 text-3xl">{point.icon}</div>
                <p className="text-white text-lg font-medium leading-relaxed">
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;

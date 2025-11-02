import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
}

const Banner: React.FC<BannerProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  height = 'h-[92vh]' 
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition * 0.4;
      bannerRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`relative overflow-hidden ${height} w-full`}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div 
        className="absolute inset-0 bg-secondary-900/60"
        ref={bannerRef}
      ></div>
      
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              damping: 12,
              stiffness: 100
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                damping: 12,
                stiffness: 100
              }}
              className="text-xl md:text-2xl font-sans text-white/90 mb-8"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-8 overflow-hidden"
          >
            <motion.div
              animate={{ y: ["0%", "-5%", "0%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full relative"
        >
          <span className="block w-1 h-2 bg-white/50 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
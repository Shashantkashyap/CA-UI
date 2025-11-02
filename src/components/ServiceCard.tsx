import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 80 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 transform group-hover:scale-110" />
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100/20 transform transition-all duration-300">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-blue-600 text-white mb-5 mx-auto group-hover:scale-110 transition-transform duration-300"
        >
          {icon}
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xl font-heading font-semibold text-center mb-3 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-secondary-600 text-center"
        >
          {description}
        </motion.p>
        <motion.div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-600 to-blue-600 rounded-b-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;

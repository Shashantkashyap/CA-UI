import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, PieChart, TrendingUp } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessSteps: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Initial Assessment",
      description: "We begin with a comprehensive review of your financial situation. This includes analyzing your existing systems, identifying pain points, and understanding your business goals.",
      icon: <ClipboardCheck size={40} className="text-primary-500" />
    },
    {
      id: 2,
      title: "Strategic Planning",
      description: "Based on the assessment, we develop a tailored financial strategy. This considers your budget, growth objectives, and reporting needs to create a sustainable financial foundation.",
      icon: <PieChart size={40} className="text-primary-500" />
    },
    {
      id: 3,
      title: "Implementation & Growth",
      description: "We execute the strategy with precision, providing regular insights and reports. Our proactive approach helps identify opportunities for optimization and growth.",
      icon: <TrendingUp size={40} className="text-primary-500" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Proven 3-Step Process
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
            We've refined our approach to deliver exceptional financial management for businesses of all sizes.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="bg-red-50 rounded-lg shadow-lg p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-6 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4 flex items-center gap-2 relative z-10">
                  <span className="text-3xl font-bold text-blue-400">{step.id}.</span>
                  {step.title}
                </h3>
                <p className="text-gray-600 relative z-10">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
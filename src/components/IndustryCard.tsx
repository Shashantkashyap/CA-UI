import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Shield, 
  LineChart, 
  FileText, 
  DollarSign, 
  Users,
  BarChart,
  Calculator,
  Clock
} from 'lucide-react';

interface IndustryCardProps {
  title: string;
  description: string;
  icon: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-cyan-500" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-cyan-500" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6 text-cyan-500" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-cyan-500" />;
      case 'DollarSign':
        return <DollarSign className="w-6 h-6 text-cyan-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-500" />;
      case 'BarChart':
        return <BarChart className="w-6 h-6 text-cyan-500" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-cyan-500" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-cyan-500" />;
      default:
        return <BookOpen className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <motion.div 
      className="bg-cyan-50 rounded-xl p-6 border border-cyan-100 hover:shadow-md transition-all"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
        {getIcon()}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default IndustryCard;
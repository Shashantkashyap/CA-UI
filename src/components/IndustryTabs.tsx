import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Stethoscope, 
  HardHat, 
  Laptop, 
  Briefcase, 
  Heart 
} from 'lucide-react';

interface IndustryTabsProps {
  activeIndustry: string;
  onIndustryChange: (industry: string) => void;
}

const IndustryTabs: React.FC<IndustryTabsProps> = ({ 
  activeIndustry, 
  onIndustryChange 
}) => {
  const industries = [
    { id: 'retail', name: 'Retail', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Stethoscope className="w-4 h-4" /> },
    { id: 'construction', name: 'Construction', icon: <HardHat className="w-4 h-4" /> },
    { id: 'technology', name: 'Tech', icon: <Laptop className="w-4 h-4" /> },
    { id: 'professional', name: 'Professional', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'nonprofit', name: 'Nonprofit', icon: <Heart className="w-4 h-4" /> }
  ];

  return (
    <div className="mb-8 overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max">
        {industries.map((industry) => (
          <motion.button
            key={industry.id}
            onClick={() => onIndustryChange(industry.id)}
            className={`flex items-center px-4 py-2 rounded-full ${
              activeIndustry === industry.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md'
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">
              {industry.icon}
            </span>
            {industry.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default IndustryTabs;
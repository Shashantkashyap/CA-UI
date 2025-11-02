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

interface IndustrySidebarProps {
  activeIndustry: string;
  onIndustryChange: (industry: string) => void;
}

const IndustrySidebar: React.FC<IndustrySidebarProps> = ({ 
  activeIndustry, 
  onIndustryChange 
}) => {
  const industries = [
    { id: 'retail', name: 'Retail & E-Commerce', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'healthcare', name: 'Healthcare & Medical', icon: <Stethoscope className="w-5 h-5" /> },
    { id: 'construction', name: 'Construction & Contracting', icon: <HardHat className="w-5 h-5" /> },
    { id: 'technology', name: 'Technology & SaaS', icon: <Laptop className="w-5 h-5" /> },
    { id: 'professional', name: 'Professional Services', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'nonprofit', name: 'Nonprofit & Associations', icon: <Heart className="w-5 h-5" /> }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-cyan-100 sticky top-24">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Industries</h2>
      <nav>
        <ul className="space-y-2">
          {industries.map((industry) => (
            <motion.li key={industry.id}>
              <button
                onClick={() => onIndustryChange(industry.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-all ${
                  activeIndustry === industry.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium'
                    : 'text-gray-700 hover:bg-cyan-50'
                }`}
                whileHover={{ x: activeIndustry === industry.id ? 0 : 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-3">
                  {industry.icon}
                </span>
                {industry.name}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-8 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
        <h3 className="font-medium text-gray-800 mb-2">Need Custom Solutions?</h3>
        <p className="text-sm text-gray-600 mb-3">
          We offer specialized services for other industries as well.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md w-full"
        >
          Contact Us
        </motion.button>
      </div>
    </div>
  );
};

export default IndustrySidebar;
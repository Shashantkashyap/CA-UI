import React from 'react';
import { motion } from 'framer-motion';
import { FileText, HelpCircle } from 'lucide-react';

interface ResourceSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const ResourceSidebar: React.FC<ResourceSidebarProps> = ({ 
  activeSection, 
  onSectionChange 
}) => {
  const sections = [
    { id: 'blogs', label: 'Blog Posts', icon: <FileText size={18} /> },
    { id: 'faqs', label: 'FAQs', icon: <HelpCircle size={18} /> }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
      <div className="space-y-2">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSectionChange(section.id)}
            className={`w-full flex items-center py-3 px-4 rounded-md text-left transition-colors ${
              activeSection === section.id
                ? 'bg-primary-50 text-primary-700 font-medium'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className="mr-3">{section.icon}</span>
            {section.label}
          </motion.button>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
        <h4 className="font-medium text-primary-800 mb-2">Need Help?</h4>
        <p className="text-sm text-gray-600 mb-3">
          Our team is ready to assist you with any questions you might have.
        </p>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="/contact"
          className="inline-block text-sm font-medium text-primary-700 hover:text-primary-800"
        >
          Contact Support →
        </motion.a>
      </div>
    </div>
  );
};

export default ResourceSidebar;
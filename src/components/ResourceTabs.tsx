import React from 'react';
import { motion } from 'framer-motion';
import { FileText, HelpCircle } from 'lucide-react';

interface ResourceTabsProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const ResourceTabs: React.FC<ResourceTabsProps> = ({ 
  activeSection, 
  onSectionChange 
}) => {
  const tabs = [
    { id: 'blogs', label: 'Blog Posts', icon: <FileText size={18} /> },
    { id: 'faqs', label: 'FAQs', icon: <HelpCircle size={18} /> }
  ];

  return (
    <div className="flex border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSectionChange(tab.id)}
          className={`flex items-center py-3 px-4 border-b-2 transition-colors ${
            activeSection === tab.id
              ? 'border-primary-500 text-primary-700 font-medium'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ResourceTabs;
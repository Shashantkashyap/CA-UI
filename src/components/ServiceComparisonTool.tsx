import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';


interface ServiceComparisonToolProps {
  industry: string;
}

const ServiceComparisonTool: React.FC<ServiceComparisonToolProps> = ({ industry }) => {
  const [businessSize, setBusinessSize] = useState('small');
  
  // Common services across all industries
  const commonServices = [
    "Monthly Bookkeeping",
    "Quarterly Financial Statements",
    "Year-End Tax Preparation",
    "Payroll Processing",
    "Accounts Payable/Receivable"
  ];
  
  // Industry-specific services
  const industrySpecificServices: Record<string, string[]> = {
    retail: [
      "Inventory Management",
      "Sales Tax Compliance",
      "POS System Integration",
      "Cash Flow Forecasting",
      "Cost of Goods Analysis"
    ],
    healthcare: [
      "Medical Billing Reconciliation",
      "Insurance Reimbursement Tracking",
      "HIPAA Compliance",
      "Practice Expense Management",
      "Healthcare Tax Planning"
    ],
    construction: [
      "Job Costing",
      "Progress Billing",
      "Contractor Compliance",
      "Equipment Tracking",
      "Certified Payroll"
    ],
    technology: [
      "SaaS Revenue Recognition",
      "R&D Tax Credits",
      "Equity Compensation",
      "Investor Reporting",
      "SaaS Metrics Tracking"
    ],
    professional: [
      "Time & Billing Integration",
      "Trust Account Management",
      "Partner Compensation",
      "Utilization Analysis",
      "Professional Liability Tracking"
    ],
    nonprofit: [
      "Fund Accounting",
      "Grant Compliance",
      "Form 990 Preparation",
      "Donor Management",
      "Board Financial Reporting"
    ]
  };
  
  // Get industry-specific services or default to retail if not found
  const specificServices = industrySpecificServices[industry] || industrySpecificServices.retail;
  
  // All services for the current industry
  const allServices = [...commonServices, ...specificServices];
  
  // Service packages by business size
  const packages = {
    small: {
      name: "Essential",
      price: "$499",
      period: "monthly",
      included: commonServices.concat(specificServices.slice(0, 2)),
    },
    medium: {
      name: "Professional",
      price: "$999",
      period: "monthly",
      included: commonServices.concat(specificServices.slice(0, 4)),
    },
    large: {
      name: "Enterprise",
      price: "$1,999",
      period: "monthly",
      included: allServices,
    }
  };

  return (
    <div className="bg-white rounded-xl border border-cyan-100 overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4">
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setBusinessSize('small')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              businessSize === 'small'
                ? 'bg-white text-cyan-700'
                : 'bg-transparent text-white hover:bg-white/10'
            }`}
          >
            Small Business
          </motion.button>
          
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setBusinessSize('medium')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              businessSize === 'medium'
                ? 'bg-white text-cyan-700'
                : 'bg-transparent text-white hover:bg-white/10'
            }`}
          >
            Mid-Size Business
          </motion.button>
          
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setBusinessSize('large')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              businessSize === 'large'
                ? 'bg-white text-cyan-700'
                : 'bg-transparent text-white hover:bg-white/10'
            }`}
          >
            Enterprise
          </motion.button>
        </div>
      </div>
      
      <div className="p-6">
        <motion.div
          key={businessSize}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{packages[businessSize as keyof typeof packages].name} Package</h3>
              <p className="text-gray-600">Tailored for {businessSize} businesses in the {industry} industry</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-cyan-600">{packages[businessSize as keyof typeof packages].price}</div>
              <div className="text-gray-500">per {packages[businessSize as keyof typeof packages].period}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allServices.map((service, index) => {
              const isIncluded = packages[businessSize as keyof typeof packages].included.includes(service);
              
              return (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex items-center p-3 rounded-lg ${
                    isIncluded ? 'bg-cyan-50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    isIncluded 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-300 text-white'
                  }`}>
                    {isIncluded ? <Check size={14} /> : <Minus size={14} />}
                  </div>
                  <span className={isIncluded ? 'text-gray-800' : 'text-gray-500'}>
                    {service}
                  </span>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-8 text-center">
            <HashLink smooth to="/consultation#schedule-consultation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
              >
                Schedule a Consultation
              </motion.button>
            </HashLink>
          </div>


        </motion.div>
      </div>
    </div>
  );
};

export default ServiceComparisonTool;
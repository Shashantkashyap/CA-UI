import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import IndustryCard from '../components/IndustryCard';
import IndustrySidebar from '../components/IndustrySidebar';
import IndustryTabs from '../components/IndustryTabs';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ChatButton from '../components/ChatButton';
import ServiceComparisonTool from '../components/ServiceComparisonTool';

const industryKeys = [
  'retail',
  'healthcare',
  'construction',
  'technology',
  'professional',
  'nonprofit'
];

const IndustriesPage: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('retail');
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Unified scroll and active industry setter
  const goToIndustry = useCallback((industry: string) => {
    setActiveIndustry(industry);
    setTimeout(() => {
      const el = document.getElementById(industry);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, []);

  // Listen for hash changes (including direct navigation and navbar clicks)
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (industryKeys.includes(hash)) {
      goToIndustry(hash);
    }
  }, [location.hash, goToIndustry]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const bannerImage = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-white min-h-screen pt-20">
      <Banner
        title="Industries We Serve"
        subtitle="Specialized accounting and bookkeeping solutions for your specific industry needs"
        backgroundImage={bannerImage}
        height="h-[40vh]"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {isMobile && (
              <IndustryTabs
                activeIndustry={activeIndustry}
                onIndustryChange={goToIndustry}
              />
            )}

            <div className="flex flex-col md:flex-row gap-8">
              {!isMobile && (
                <div className="md:w-1/4">
                  <IndustrySidebar
                    activeIndustry={activeIndustry}
                    onIndustryChange={goToIndustry}
                  />
                </div>
              )}

              <div className="md:w-3/4">
                <motion.div
                  key={activeIndustry}
                  id={activeIndustry}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-sm p-8 border border-cyan-100"
                >
                  <IndustryContent industry={activeIndustry} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">What Our Clients Say</h2>
                  <TestimonialCarousel industry={activeIndustry} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Service Comparison</h2>
                  <ServiceComparisonTool industry={activeIndustry} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Get Industry-Specific Insights
            </h2>
            <p className="text-cyan-50 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for tailored financial tips and regulatory updates for your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-cyan-700 font-medium px-6 py-3 rounded-md hover:bg-cyan-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

const IndustryContent: React.FC<{ industry: string }> = ({ industry }) => {
  const industries = {
    retail: {
      title: "Retail & E-Commerce",
      description: "From inventory management to sales tax compliance, we help retail businesses optimize their financial operations and maintain accurate records.",
      benefits: [
        "Inventory valuation and tracking",
        "Sales tax compliance across multiple jurisdictions",
        "Point-of-sale system integration",
        "Cash flow forecasting for seasonal fluctuations",
        "Cost of goods sold analysis"
      ],
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      engagementModels: ["Personalization", "Omnichannel", "Gamification"],
      essentialTools: ["AI personalization", "Omnichannel platforms", "Analytics"]
    },
    healthcare: {
      title: "Healthcare & Medical",
      description: "We understand the complexities of healthcare billing, insurance reimbursements, and regulatory compliance that medical practices face.",
      benefits: [
        "Medical billing reconciliation",
        "Insurance reimbursement tracking",
        "HIPAA-compliant financial records",
        "Practice expense management",
        "Healthcare-specific tax planning"
      ],
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      engagementModels: ["Patient Engagement (PHE)", "Shared Decision-Making"],
      essentialTools: ["Patient portals", "Telehealth", "Mobile apps", "Wearables"]
    },
    construction: {
      title: "Construction & Contracting",
      description: "Our specialized services for construction businesses include job costing, contract accounting, and compliance with industry-specific regulations.",
      benefits: [
        "Project-based accounting and job costing",
        "Progress billing management",
        "Contractor license bond compliance",
        "Equipment depreciation tracking",
        "Certified payroll processing"
      ],
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      engagementModels: ["Delivery Partner", "8-Step Contractor Model"],
      essentialTools: ["Contract mgmt", "Procurement", "Collaboration tools"]
    },
    technology: {
      title: "Technology & SaaS",
      description: "We help tech companies navigate the unique financial challenges of subscription models, R&D tax credits, and investor reporting.",
      benefits: [
        "Revenue recognition for subscription models",
        "R&D tax credit documentation",
        "Stock option and equity compensation tracking",
        "Investor-ready financial reporting",
        "SaaS metrics and KPI monitoring"
      ],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      engagementModels: ["High/Low-Touch", "Hybrid"],
      essentialTools: ["Onboarding", "In-app messaging", "Analytics", "Automation"]
    },
    professional: {
      title: "Professional Services",
      description: "Law firms, consultancies, and other service-based businesses benefit from our expertise in time tracking, billing, and profitability analysis.",
      benefits: [
        "Time and billing system integration",
        "Client trust account management",
        "Partner equity and compensation tracking",
        "Utilization and realization rate analysis",
        "Professional liability insurance tracking"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      engagementModels: ["Personalized", "Proactive", "Segmented"],
      essentialTools: ["CRM", "Workflow automation", "Feedback", "Collaboration"]
    },
    nonprofit: {
      title: "Nonprofit & Associations",
      description: "We specialize in fund accounting, grant management, and helping nonprofits maintain their tax-exempt status through proper financial practices.",
      benefits: [
        "Fund accounting and restricted fund tracking",
        "Grant compliance and reporting",
        "Form 990 preparation and filing",
        "Donor management and reporting",
        "Board-ready financial statements"
      ],
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      engagementModels: ["Community", "Omnichannel", "Donor Engagement"],
      essentialTools: ["Email", "Social mgmt", "Event", "Survey", "Donor CRM"]
    }
  };

  const currentIndustry = industries[industry as keyof typeof industries];

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentIndustry.title}</h2>
          <p className="text-gray-600 mb-6">{currentIndustry.description}</p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">How We Help</h3>
          <ul className="space-y-2 mb-6">
            {currentIndustry.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-cyan-500 mr-2">✓</span>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium px-6 py-3 rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all shadow-md"
          >
            Request Industry-Specific Consultation
          </motion.button> */}
        </div>

        <div className="md:w-1/2">
          <motion.div
            className="rounded-xl overflow-hidden shadow-md h-[300px] md:h-[400px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={currentIndustry.image}
              alt={currentIndustry.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Engagement Models & Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-100"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Our Strategic Approach for {currentIndustry.title}
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We leverage proven engagement models and cutting-edge tools specifically tailored for your industry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Engagement Models */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-sm border border-cyan-100"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Engagement Models</h4>
            </div>
            <div className="space-y-3">
              {currentIndustry.engagementModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-3 hover:from-cyan-100 hover:to-blue-100 transition-all"
                >
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{model}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Essential Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg p-6 shadow-sm border border-cyan-100"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Essential Tools</h4>
            </div>
            <div className="space-y-3">
              {currentIndustry.essentialTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 hover:from-blue-100 hover:to-purple-100 transition-all"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Discuss Your Industry Strategy
          </motion.button> */}
        </motion.div>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <IndustryCard
          title="Specialized Bookkeeping"
          description="Industry-specific chart of accounts and financial tracking tailored to your business needs."
          icon="BookOpen"
        />
        <IndustryCard
          title="Compliance Support"
          description="Stay compliant with industry-specific regulations and reporting requirements."
          icon="Shield"
        />
        <IndustryCard
          title="Strategic Advisory"
          description="Data-driven insights to help you make better financial decisions for your industry."
          icon="LineChart"
        />
      </div>
    </div>
  );
};

export default IndustriesPage;
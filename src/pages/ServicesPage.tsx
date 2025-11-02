import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileBarChart, // for Virtual CFO
  Receipt, // for Controller Services
  BookText, // for Transactional Accounting
  CloudCog, // for Cloud Accounting Setup
  FileText, // for Financial Reporting & Analysis
  Banknote, // for Tax Preparation & Planning
  ShieldCheck, // for Compliance & Audit Support
  BarChart3, // for Business Advisory Services
  Phone, // for CTA section
} from "lucide-react";

import Banner from "../components/Banner";
import ChatButton from "../components/ChatButton";
import { Link, useNavigate } from "react-router-dom";

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null);

  const bannerImage =
    "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const services = [
    {
      icon: <FileBarChart size={48} className="text-primary-500" />,
      title: "Virtual CFO",
      description:
        "Strategic financial leadership without the cost of a full-time CFO.",
      fullDescription:
        "Our Virtual CFO service gives you access to strategic financial guidance from experienced professionals. Ideal for growing businesses that need expert oversight on financial planning, forecasting, budgeting, and KPI tracking without hiring a full-time executive.",
      points: [
        "Cash flow forecasting",
        "Budgeting and planning",
        "Financial KPI development",
        "Investor reporting",
        "Monthly strategy sessions",
      ],
    },
    {
      icon: <Receipt size={48} className="text-primary-500" />,
      title: "Controller Services",
      description:
        "Experienced Controllers to oversee your accounting operations.",
      fullDescription:
        "Our Controller service provides accurate financial oversight and helps manage accounting teams, processes, and compliance. Ideal for businesses ready to upgrade from a bookkeeper to structured financial management.",
      points: [
        "Monthly close and reconciliations",
        "Process improvement and documentation",
        "Internal controls and compliance",
        "Oversight of bookkeeping team",
        "GAAP-compliant reporting",
      ],
    },
    {
      icon: <BookText size={48} className="text-primary-500" />,
      title: "Transactional Accounting",
      description:
        "Reliable and accurate daily bookkeeping and financial records.",
      fullDescription:
        "Our Transactional service ensures that your books are always up to date. We handle your routine financial entries, reconciliations, and reporting with accuracy and timeliness.",
      points: [
        "Accounts payable and receivable",
        "Bank and credit card reconciliations",
        "Monthly financial statements",
        "Expense tracking",
        "Industry benchmark comparisons",
      ],
    },
    {
      icon: <CloudCog size={48} className="text-primary-500" />,
      title: "Cloud Accounting Setup",
      description:
        "Modern cloud-based accounting solutions tailored for your business.",
      fullDescription:
        "We set up and optimize cloud accounting systems like QuickBooks Online and Xero, enabling secure, real-time access to your financials and improved workflow efficiency.",
      points: [
        "QuickBooks and Xero setup",
        "Cloud system migration",
        "App integrations and automations",
        "User training and support",
        "Custom chart of accounts",
      ],
    },
    {
      icon: <FileText size={48} className="text-primary-500" />,
      title: "Financial Reporting & Analysis",
      description: "Insightful reports to support informed business decisions.",
      fullDescription:
        "We provide detailed financial reporting and custom dashboards to help you understand performance, track trends, and make strategic decisions with confidence.",
      points: [
        "Monthly and quarterly reporting",
        "Custom dashboards",
        "Variance analysis",
        "Cash flow reports",
        "Performance trend insights",
      ],
    },
    {
      icon: <Banknote size={48} className="text-primary-500" />,
      title: "Tax Preparation & Planning",
      description:
        "Strategic planning and accurate tax filing for peace of mind.",
      fullDescription:
        "We handle both individual and business tax preparation with year-round planning strategies to minimize liabilities and avoid surprises at tax time.",
      points: [
        "Business and personal tax prep",
        "Quarterly estimated taxes",
        "Tax-saving strategies",
        "IRS compliance support",
        "Filing for multiple states",
      ],
    },
    {
      icon: <ShieldCheck size={48} className="text-primary-500" />,
      title: "Compliance & Audit Support",
      description:
        "Ensure financial compliance and prepare confidently for audits.",
      fullDescription:
        "We support your business in staying compliant with regulatory requirements, including audit preparation, internal reviews, and financial documentation.",
      points: [
        "Audit preparation and liaison",
        "Internal control setup",
        "1099/Payroll compliance",
        "Sales tax filings",
        "Financial policy documentation",
      ],
    },
    {
      icon: <BarChart3 size={48} className="text-primary-500" />,
      title: "Business Advisory Services",
      description:
        "Financial strategy and advisory to support business growth.",
      fullDescription:
        "Beyond the books, our advisory services help you understand the financial impact of business decisions. We assist with strategic planning, pricing models, mergers, and more.",
      points: [
        "Business model analysis",
        "Pricing and margin strategy",
        "Break-even and ROI analysis",
        "Growth planning",
        "Exit strategy consulting",
      ],
    },
  ];

  const processes = [
    {
      number: "01",
      title: "Assessment & Onboarding",
      description: "Review systems and align on requirements",
      fullDescription:
        "We begin by understanding your current financial processes, tools, and goals. This includes a comprehensive review of your systems, accounts, and business structure to identify gaps and opportunities. We’ll align on your specific requirements and tailor a plan accordingly.",
    },
    {
      number: "02",
      title: "Software Setup & Migration",
      description: "Configure accounting software and import data",
      fullDescription:
        "We configure or migrate your financial data to robust accounting software (like QuickBooks, Xero, or others). This includes setting up your chart of accounts, tax settings, payroll integration, and importing historical data — ensuring a smooth and secure transition.",
    },
    {
      number: "03",
      title: "Cleanup & Catchup",
      description: "Fix discrepancies and reconcile accounts",
      fullDescription:
        "If your books are behind or disorganized, we clean up and bring them current. This involves transaction categorization, fixing discrepancies, and performing multi-dimensional reconciliations across all accounts.",
    },
    {
      number: "04",
      title: "Full-Cycle Bookkeeping",
      description: "Handle day-to-day financial tracking",
      fullDescription:
        "We handle daily bookkeeping including receipts, payments, and journal entries. Our services ensure timely, accurate tracking of all financial activities.",
    },
    {
      number: "05",
      title: "Payroll Processing",
      description: "Manage wages, taxes and compliance",
      fullDescription:
        "We manage the payroll cycle — calculating wages, taxes, and deductions while ensuring compliance with local laws.",
    },
    {
      number: "06",
      title: "AP & AR Management",
      description: "Manage cash flow with invoice handling",
      fullDescription:
        "We help manage incoming and outgoing payments — invoices, vendor payments, customer follow-ups, and maintaining aging reports for insights.",
    },
    {
      number: "07",
      title: "Inventory Management",
      description: "Track inventory and create projections",
      fullDescription:
        "We implement systems for tracking inventory in real-time and create cash flow projections to prevent stockouts or overstocking.",
    },
    {
      number: "08",
      title: "Financial Reports",
      description: "Prepare statements and track KPIs",
      fullDescription:
        "We prepare accurate financial statements (P&L, Balance Sheet, Cash Flow Statements) and management reports with KPI tracking.",
    },
    {
      number: "09",
      title: "Budgets & Forecasting",
      description: "Build models and analyze variances",
      fullDescription:
        "We build forward-looking financial models and budgets, providing variance analysis to help you make data-driven strategic decisions.",
    },
   
  ];

  return (
    <div className="pt-20">
      <Banner
        title="Our Services"
        subtitle="Accounting & Bookkeeping Solution"
        backgroundImage={bannerImage}
        height="h-[50vh]"
      />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 inline-block font-outfit relative">
              Our Expertise
              <motion.div
                className="absolute -inset-1 bg-blue-100/30 rounded-lg -z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent font-outfit">
              Comprehensive Financial Services
            </h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto font-outfit leading-relaxed">
              Our team delivers professional accounting solutions tailored to
              your business needs.
            </p>
          </motion.div>

          {/* Services Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:border-blue-300 transition-all duration-300">
                  {/* Background Gradients */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />
                    <div className="absolute -inset-[500px] bg-blue-500/5 blur-3xl group-hover:animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    <div className="flex items-start gap-6">
                      {/* Icon Section */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">{service.icon}</div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold font-outfit text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 transition-all duration-300 line-clamp-2 font-outfit">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: hoveredService === index ? "auto" : "0",
                            opacity: hoveredService === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-blue-100">
                            <p className="text-gray-700 mb-3">
                              {service.fullDescription}
                            </p>
                            <ul className="grid grid-cols-2 gap-2">
                              {service.points.map((point, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                  <span>{point}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Elements */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-br from-blue-500 to-indigo-500"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-800/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-800/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
                Ready to Elevate Your Finances?
              </h2>
              <p className="text-indigo-100 text-lg mb-10 font-outfit leading-relaxed">
                Let's discuss how our accounting experts can streamline your
                business operations and help you scale efficiently.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-outfit"
                >
                  <Phone size={20} />
                  Get in Touch
                </Link>

                <Link
                  to="/about"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 font-outfit"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <div className="container mx-auto px-4 relative z-10 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 inline-block font-outfit relative">
            Our Methodology
            <motion.div
              className="absolute -inset-1 bg-blue-100/30 rounded-lg -z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent font-outfit">
            Our Proven Process
          </h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto font-outfit leading-relaxed">
            A systematic approach to excellence in financial management and
            business growth.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {processes.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl border border-gray-100 hover:border-blue-200 overflow-hidden"
                onMouseEnter={() => setHoveredProcess(index)}
                onMouseLeave={() => setHoveredProcess(null)}
              >
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150 blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-all duration-300">
                      <span className="text-blue-600 font-bold font-outfit">
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-semibold font-outfit group-hover:text-blue-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <motion.p
                    className="text-gray-600 text-sm pl-16 transition-all duration-300"
                    initial={false}
                    animate={{
                      height: hoveredProcess === index ? "auto" : "4.5rem",
                    }}
                  >
                    {hoveredProcess === index
                      ? step.fullDescription
                      : step.description}
                  </motion.p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-800/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-800/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-outfit">
                Ready to Elevate Your Finances?
              </h2>
              <p className="text-indigo-100 text-base mb-10 font-outfit leading-relaxed">
                Let's discuss how our accounting experts can streamline your
                business operations and help you scale efficiently.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <motion.button
                  onClick={() => navigate("/contact")}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-outfit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={20} />
                  Get in Touch
                </motion.button>

                <motion.button
                  onClick={() => navigate("/about")}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 font-outfit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default ServicesPage;

import React, { useState } from "react";
import FullWidthServiceCarousel from "../components/FullWidthServiceCarousel";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

import ChatButton from "../components/ChatButton";
import { Link, useNavigate } from "react-router-dom";

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [showAllProcesses, setShowAllProcesses] = useState(false);

  const services = [
    {
      title: "Accounting & Bookkeeping",
      description:
        "We provide structured accounting and bookkeeping support to help businesses maintain accurate financial records, ensure compliance with applicable standards, and establish consistent financial reporting practices.",
      points: [
        "Maintenance of day-to-day books of accounts with systematic recording of financial transactions",
        "Periodic bank, cash, and ledger reconciliations to ensure accuracy and completeness of records",
        "Preparation of monthly and periodic financial statements for internal review and reporting",
        "Accounting processes designed to support audit readiness and statutory compliance",
      ],
    },
    {
      title: "Accounting System Setup & Software Migration",
      description:
        "We assist businesses in setting up accounting systems and migrating financial data in a controlled and well-documented manner, ensuring data integrity and continuity of accounting records.",
      points: [
        "Assessment of business requirements to support selection and configuration of accounting software",
        "Structured migration of historical accounting data with reconciliation and validation checks",
        "Configuration of accounting workflows aligned with business operations and reporting needs",
        "Initial system orientation and post-migration support to ensure smooth adoption",
      ],
    },
    {
      title: "Accounts Receivable & Payable Management",
      description:
        "We support the management of receivables and payables to improve visibility over outstanding balances and strengthen financial discipline across customer and vendor transactions.",
      points: [
        "Monitoring and review of accounts receivable and payable balances on a periodic basis",
        "Tracking of invoices, outstanding dues, and aging to support timely follow-ups",
        "Vendor and customer reconciliation support to resolve differences and maintain clean balances",
        "Reporting focused on working capital visibility and short-term cash flow planning",
      ],
    },
    {
      title: "Virtual CFO & Financial Advisory",
      description:
        "Our Virtual CFO services provide structured financial oversight and advisory support to businesses that require experienced financial guidance without engaging a full-time finance function.",
      points: [
        "Preparation and review of budgets, forecasts, and financial plans aligned with business goals",
        "Analysis of cash flows, margins, and profitability to support informed decision-making",
        "Management reporting and MIS preparation to provide clarity on financial performance",
        "Ongoing financial advisory support to business owners and management teams",
      ],
    },
    {
      title: "Financial Reporting & MIS",
      description:
        "We assist businesses in preparing structured financial reports and management information systems (MIS) that provide clear visibility into financial performance and operational trends.",
      points: [
        "Preparation of periodic financial reports aligned with management and reporting requirements",
        "Development of MIS formats to track key financial metrics and performance indicators",
        "Variance analysis to compare actual performance against budgets or forecasts",
        "Presentation of financial information in a clear and decision-oriented manner",
      ],
    },
    {
      title: "Compliance Support & Regulatory Filings",
      description:
        "We provide ongoing compliance support to help businesses meet statutory and regulatory requirements in a timely and organised manner.",
      points: [
        "Support for routine statutory filings and regulatory submissions",
        "Maintenance of compliance calendars and tracking of due dates",
        "Coordination and documentation support for audits and assessments",
        "Assistance in responding to routine compliance queries and notices",
      ],
    },
    {
      title: "Process Review & Internal Control Support",
      description:
        "We assist businesses in reviewing accounting processes and internal controls to improve reliability of financial information and strengthen governance practices.",
      points: [
        "Review of existing accounting workflows and documentation",
        "Identification of process gaps and control weaknesses",
        "Recommendations to improve efficiency, accuracy, and control effectiveness",
        "Support in implementing revised processes and internal controls",
      ],
    },
  ];


  const processes = [
    {
      number: "01",
      title: "Assessment & Onboarding",
      description: "Review systems and align on requirements",
      fullDescription:
        "We begin by understanding your current financial processes, tools, and goals. This includes a comprehensive review of your systems, accounts, and business structure to identify gaps and opportunities.",
    },
    {
      number: "02",
      title: "Software Setup & Migration",
      description: "Configure accounting software and import data",
      fullDescription:
        "We configure or migrate your financial data to robust accounting software. This includes setting up your chart of accounts, tax settings, payroll integration, and importing historical data.",
    },
    {
      number: "03",
      title: "Cleanup & Catchup",
      description: "Fix discrepancies and reconcile accounts",
      fullDescription:
        "If your books are behind or disorganized, we clean up and bring them current. This involves transaction categorization, fixing discrepancies, and performing multi-dimensional reconciliations.",
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

  const displayedProcesses = showAllProcesses ? processes : processes.slice(0, 3);

  return (
    <div className="pt-20 bg-slate-50 min-h-screen font-sans">
      
       {/* HERO SECTION - REPLACING BANNER */}
      <section className="relative w-full py-24 bg-[#00254B] flex items-center overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/10 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
             >
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-800/50 border border-blue-700/50 text-blue-200 text-sm font-medium mb-6">
                    Professional Financial Services
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Expert Accounting & <br/><span className="text-blue-400">Financial Solutions</span>
                </h1>
                <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed mb-10">
                    Comprehensive accounting, bookkeeping, and advisory services tailored to streamline your financial operations and drive business growth.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button 
                        onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3.5 bg-white text-[#00254B] rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
                    >
                        How We Work
                    </button>
                    <Link 
                        to="/contact"
                        className="px-8 py-3.5 bg-transparent border border-blue-400 text-white rounded-full font-semibold hover:bg-blue-900/50 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
             </motion.div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Financial Services</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">
                Tailored solutions designed to meet the unique financial needs of your business.
             </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <FullWidthServiceCarousel services={services} />
          </div>
        </div>
      </section>


      {/* METHODOLOGY SECTION */}
      <section id="methodology" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
            >
                <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">
                Our Methodology
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
                 A Structured Approach to Excellence
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed">
                We follow a rigorous, transparent process to ensure accuracy, compliance, and clarity across all your financial engagements.
                </p>
            </motion.div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <AnimatePresence>
                    {displayedProcesses.map((step, index) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-4xl font-bold text-blue-100 group-hover:text-blue-600 transition-colors duration-300">
                                {step.number}
                            </span>
                            <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                                <CheckCircle2 size={20} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                            {step.title}
                        </h3>

                        <p className="text-slate-600 text-sm font-medium mb-4">
                            {step.description}
                        </p>
                        
                        <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                            {step.fullDescription}
                        </p>
                    </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* View More / Less Button */}
            <div className="text-center">
                <button
                    onClick={() => setShowAllProcesses(!showAllProcesses)}
                    className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition-colors hover:gap-3"
                >
                    {showAllProcesses ? "Show Less" : "View All Steps"}
                    <ArrowRight size={20} className={showAllProcesses ? "rotate-90" : ""} />
                </button>
            </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-[#0e3155] text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

         <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
               Ready to streamline your <span className="text-blue-300">financial operations?</span>
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
               Partner with us for reliable accounting support that empowers your business decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0e3155] px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone size={20} />
                  Speak with an Expert
                </Link>
            </div>
         </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default ServicesPage;

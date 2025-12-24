import React, { useState } from "react";
import FullWidthServiceCarousel from "../components/FullWidthServiceCarousel";
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
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null);

  const bannerImage =
    "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

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
          {/* Services Carousel */}
          <div className="max-w-7xl mx-auto">
            <FullWidthServiceCarousel services={services} />
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

     <div className="container mx-auto px-4 py-20">

  {/* Header */}
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto text-center mb-14"
  >
    <span className="text-primary-600 text-sm font-medium uppercase tracking-wide">
      Our Methodology
    </span>

    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-3 mb-4">
      A Clear & Structured Process
    </h2>

    <p className="text-slate-600 text-base">
      A practical approach designed to ensure accuracy, compliance, and clarity
      across all financial engagements.
    </p>
  </motion.div>

  {/* Process */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {processes.map((step, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        viewport={{ once: true }}
        className="group"
      >
        {/* Number */}
        <span className="text-sm font-semibold text-primary-600 block mb-2">
          {step.number}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {step.title}
        </h3>

        {/* Short description */}
        <p className="text-slate-600 text-sm leading-relaxed">
          {step.description}
        </p>

        {/* Subtle divider */}
        <div className="mt-6 h-px bg-slate-200 group-hover:bg-primary-600 transition-colors" />
      </motion.div>
    ))}
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

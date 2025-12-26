import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Shuffle,
  CreditCard,
  Briefcase,

  CheckCircle2,
  Shield,
  Users,
} from "lucide-react";


import ScrollSection from "../components/ScrollSection";
import ChatButton from "../components/ChatButton";
import AnimatedCounter from "../components/AnimatedCounter";

import WhyWorkWithUsCarousel from "../components/ScrollSection";

const Home = () => {
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });




  /* ===================== SERVICES ===================== */

  // const services = [
  //   {
  //     icon: <FileText size={24} />,
  //     title: "Accounting & Bookkeeping",
  //     description:
  //       "We provide structured accounting and bookkeeping services to ensure accuracy, transparency, and compliance with applicable accounting standards. Our approach enables businesses to maintain reliable financial records while focusing on operational efficiency.",
  //     points: [
  //       "Daily bookkeeping and transaction recording",
  //       "Bank and ledger reconciliations",
  //       "Preparation of financial statements",
  //       "Compliance-ready accounting processes",
  //     ],
  //   },
  //   {
  //     icon: <Shuffle size={24} />,
  //     title: "Software Migration & Accounting System Setup",
  //     description:
  //       "Our team assists businesses in migrating accounting data across platforms with minimal disruption. We ensure secure data transfer, optimal configuration, and long-term scalability of your accounting systems.",
  //     points: [
  //       "Accounting software evaluation and setup",
  //       "Secure data migration and validation",
  //       "Process automation and optimization",
  //       "User training and support",
  //     ],
  //   },
  //   {
  //     icon: <CreditCard size={24} />,
  //     title: "Accounts Management",
  //     description:
  //       "We manage accounts receivable and payable with a focus on improving cash flow visibility and strengthening financial control across operations.",
  //     points: [
  //       "Accounts receivable and payable management",
  //       "Invoice tracking and aging analysis",
  //       "Vendor reconciliation and follow-ups",
  //       "Working capital monitoring",
  //     ],
  //   },
  //   {
  //     icon: <Briefcase size={24} />,
  //     title: "Virtual CFO Services",
  //     description:
  //       "Our Virtual CFO services provide strategic financial guidance without the cost of a full-time CFO. We support informed decision-making aligned with long-term business objectives.",
  //     points: [
  //       "Budgeting and financial forecasting",
  //       "Cash flow and profitability analysis",
  //       "Management reporting and MIS",
  //       "Strategic financial planning",
  //     ],
  //   },
  //   // {
  //   //   icon: <BarChart2 size={24} />,
  //   //   title: "Financial Analytics & Reporting",
  //   //   description:
  //   //     "We convert financial data into actionable insights through structured analysis and professional reporting to support data-driven decision-making.",
  //   //   points: [
  //   //     "Cash flow forecasting and analysis",
  //   //     "KPI tracking and performance review",
  //   //     "Variance and trend analysis",
  //   //     "Executive dashboards",
  //   //   ],
  //   // },
  // ];

  const services = [
  {
    icon: <FileText size={24} />,
    title: "Accounting & Bookkeeping",
    description:
      "We deliver reliable accounting and bookkeeping services that help businesses maintain accurate financial records and comply with applicable accounting standards. Our processes are designed to support consistency, transparency, and audit readiness.",
    points: [
      "Day-to-day bookkeeping and transaction recording",
      "Bank, cash, and ledger reconciliations",
      "Preparation of periodic financial statements",
      "Accounting processes aligned with statutory requirements",
    ],
  },
  {
    icon: <Shuffle size={24} />,
    title: "Accounting System Setup & Software Migration",
    description:
      "We assist businesses in setting up accounting systems and migrating financial data across platforms in a structured and controlled manner, ensuring data integrity and continuity of operations.",
    points: [
      "Accounting software selection and initial setup",
      "Data migration with validation and reconciliation",
      "Process configuration based on business requirements",
      "Basic system orientation and ongoing support",
    ],
  },
  {
    icon: <CreditCard size={24} />,
    title: "Accounts Receivable & Payable Management",
    description:
      "We support the management of receivables and payables to improve visibility over outstanding balances and strengthen financial discipline across business operations.",
    points: [
      "Monitoring of receivables and payable balances",
      "Invoice tracking and aging analysis",
      "Vendor and customer reconciliation support",
      "Working capital visibility and reporting",
    ],
  },
  {
    icon: <Briefcase size={24} />,
    title: "Virtual CFO & Financial Advisory",
    description:
      "Our Virtual CFO services provide structured financial oversight and advisory support to businesses that require strategic input without engaging a full-time finance head.",
    points: [
      "Budgeting, forecasting, and financial planning",
      "Cash flow and profitability review",
      "Management reporting and MIS preparation",
      "Decision-support advisory for business owners",
    ],
  },
];

  /* ===================== WHY US ===================== */

 const whyChooseUsPoints = [
  {
    icon: <FileText size={22} className="text-blue-600" />,
    title: "End-to-End Financial Support",
    summary:
      "A unified engagement model that delivers consistent, compliant, and well-governed accounting support.",
    bullets: [
      "Single point ownership across accounting functions",
      "Integrated bookkeeping, reporting, and advisory",
      "Processes aligned with statutory requirements",
    ],
  },
  {
    icon: <Shuffle size={22} className="text-blue-600" />,
    title: "Process-Driven & Technology Enabled",
    summary:
      "Structured workflows supported by appropriate accounting tools to ensure accuracy and efficiency.",
    bullets: [
      "Automated routine accounting activities",
      "Reduced dependency on manual interventions",
      "Consistent quality checks and reviews",
    ],
  },
  {
    icon: <CreditCard size={22} className="text-blue-600" />,
    title: "Transparent Pricing Structure",
    summary:
      "Clearly defined scope and pricing model with no hidden costs or ambiguity.",
    bullets: [
      "Upfront pricing aligned with deliverables",
      "Well-defined engagement boundaries",
      "Predictable monthly or periodic billing",
    ],
  },
  {
    icon: <Briefcase size={22} className="text-blue-600" />,
    title: "CA-Led Advisory & Oversight",
    summary:
      "Guidance from experienced Chartered Accountants with practical industry exposure.",
    bullets: [
      "Financial interpretation beyond bookkeeping",
      "Compliance-aware decision support",
      "Business-focused financial insights",
    ],
  },
  {
    icon: <Shield size={22} className="text-blue-600" />,
    title: "Data Security & Confidentiality",
    summary:
      "Strong internal controls and secure handling of sensitive financial information.",
    bullets: [
      "Restricted data access controls",
      "Confidentiality-driven workflows",
      "Secure document and data management",
    ],
  },
  {
    icon: <Users size={22} className="text-blue-600" />,
    title: "Dedicated Professional Team",
    summary:
      "A consistent team that understands your business and ensures service continuity.",
    bullets: [
      "Dedicated engagement team",
      "Continuity across reporting periods",
      "Long-term client relationship focus",
    ],
  },
];


//   const whyChooseUsPoints = [
//   {
//     icon: <FileText size={22} className="text-primary-600" />,
//     text: "End-to-end accounting and financial management services delivered through a single, integrated engagement model.",
//   },
//   {
//     icon: <Shuffle size={22} className="text-primary-600" />,
//     text: "Technology-enabled processes designed to improve accuracy, efficiency, and consistency across financial operations.",
//   },
//   {
//     icon: <CreditCard size={22} className="text-primary-600" />,
//     text: "Transparent, value-based pricing aligned with clearly defined deliverables and measurable business outcomes.",
//   },
//   {
//     icon: <Briefcase size={22} className="text-primary-600" />,
//     text: "Strategic financial advisory backed by experienced professionals with deep domain and industry expertise.",
//   },
//   {
//     icon: <Shield size={22} className="text-primary-600" />,
//     text: "Strong data security and confidentiality standards to safeguard sensitive financial and business information.",
//   },
//   {
//     icon: <Users size={22} className="text-primary-600" />,
//     text: "Dedicated team of qualified finance professionals committed to long-term client success and compliance excellence.",
//   },
// ];


  /* ===================== STATS ===================== */

  const stats = [
  { label: "Years of Experience", value: 10, suffix: "+" },
  { label: "Clients Served", value: 100, suffix: "+" },
  { label: "Projects Completed", value: 250, suffix: "+" },
  { label: "Countries Served", value: 15, suffix: "+" },
];


  return (
    <div className="pt-20 bg-slate-100 overflow-x-hidden">
      {/* ===================== HERO BANNER ===================== */}
      <section className="relative w-full min-h-[600px] bg-[#012a51] flex items-center overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Accounting & <br />
                <span className="text-blue-300">Bookkeeping Services</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed">
                Structured financial support focused on accuracy, compliance, and clarity.
                We ensure your business stays financially healthy and compliant.
              </p>
              
              {/* Optional CTA or Decor */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="pt-4"
              >
                  <div className="h-1 w-20 bg-blue-400 rounded-full mb-6" />
                  
                  <button 
                    onClick={() => navigate('/cpa-outsourcing')}
                    className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                  >
                    Get Started
                  </button>
              </motion.div>
            </motion.div>

            {/* RIGHT: IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Image Glow/Shadow Effect */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full transform scale-90" />
              <img
                src="/CA-banner.png"
                alt="Accounting Services Banner"
                className="relative w-full h-auto object-contain drop-shadow-2xl z-10"
                style={{ maxHeight: "500px" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== OUR SERVICES ===================== */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 relative inline-block"
            >
              Our Professional Services
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-600 text-lg leading-relaxed"
            >
              We provide structured and compliance-oriented financial services that help
              businesses maintain accurate records, improve financial visibility, and
              support informed decision-making.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-300 border border-slate-100 flex flex-col"
              >
                {/* Header: Icon & Title */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <div className="h-1 w-12 bg-blue-200 rounded-full group-hover:w-20 transition-all duration-300" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Points */}
                <ul className="space-y-3 mt-auto">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-slate-500">
                      <div className="mt-1 bg-green-100 rounded-full p-0.5 shrink-0">
                        <CheckCircle2 size={14} className="text-green-600" />
                      </div>
                      <span className="group-hover:text-slate-700 transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Optional 'Learn More' link if desired, kept clean for now */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY WORK WITH US ===================== */}
<WhyWorkWithUsCarousel
  title="Why Work With Us"
  subtitle="A structured, professional approach to accounting and financial management"
  points={whyChooseUsPoints}
/>
      {/* ===================== STATS ===================== */}
      <section ref={statsRef} className="py-16 bg-blue-950 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-semibold">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    isVisible={isStatsInView}
                  />
                </div>
                <p className="text-primary-200 text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default Home;

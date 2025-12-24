import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom"; // Removed unused import
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Shuffle,
  CreditCard,
  Briefcase,
  BarChart2,
  CheckCircle2,
  Shield,
  Users,
} from "lucide-react";

import Banner from "../components/Banner";
import ScrollSection from "../components/ScrollSection";
import ChatButton from "../components/ChatButton";
import AnimatedCounter from "../components/AnimatedCounter";
import ServiceCarousel from "../components/ServiceCarousel";

const Home = () => {
  // const navigate = useNavigate(); // Removed unused navigate
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

    const bannerImage =
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const scrollSectionBg =
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";


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
    icon: <FileText size={22} className="text-primary-600" />,
    text: "Comprehensive accounting and financial support delivered through a single, well-structured engagement model.",
  },
  {
    icon: <Shuffle size={22} className="text-primary-600" />,
    text: "Process-driven approach supported by appropriate use of technology to ensure accuracy and consistency.",
  },
  {
    icon: <CreditCard size={22} className="text-primary-600" />,
    text: "Clear and transparent pricing aligned with defined scopes of work and service deliverables.",
  },
  {
    icon: <Briefcase size={22} className="text-primary-600" />,
    text: "Practical financial advisory backed by professional experience across accounting, compliance, and reporting.",
  },
  {
    icon: <Shield size={22} className="text-primary-600" />,
    text: "Strong focus on data confidentiality, internal controls, and secure handling of financial information.",
  },
  {
    icon: <Users size={22} className="text-primary-600" />,
    text: "Dedicated team of qualified finance professionals focused on long-term client relationships and service continuity.",
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
      <Banner
        title="Accounting & Bookkeeping Services"
subtitle="Structured financial support focused on accuracy, compliance, and clarity"
       backgroundImage={bannerImage}
      />

      {/* ===================== OUR SERVICES ===================== */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-6xl">


<div className="mb-14 max-w-3xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
    Our Services
  </h2>

  <p className="text-slate-600 text-base md:text-[16px] leading-relaxed">
  We provide structured and compliance-oriented financial services that help
  businesses maintain accurate records, improve financial visibility, and
  support informed decision-making.
</p>
</div>


    <div className="grid md:grid-cols-2 gap-16 items-center">


      {/* LEFT : IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative flex justify-center"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-primary-100/50 rounded-[30px] -z-10 blur-xl" />
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3VyJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D"
            alt="Our Services"
            className="max-w-full h-auto rounded-[20px] shadow-2xl"
          />
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle2 size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Success Rate</p>
              <p className="text-lg font-bold text-slate-900">99.9%</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT : SERVICES */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full p-2"
      >
        <ServiceCarousel services={services} />
      </motion.div>

    </div>
  </div>
</section>

      {/* ===================== WHY WORK WITH US ===================== */}
      <ScrollSection title="Why Work With Us" points={whyChooseUsPoints} backgroundImage={""} className="py-20 bg-white"/>

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

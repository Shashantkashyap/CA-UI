import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  TrendingUp, 
  Users, 
  Lock, 
  Clock, 
  CheckCircle2,
  FileSearch,
  Handshake,
  MonitorCheck,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";
import ChatButton from "../components/ChatButton";

/* ================= DATA ================= */

const outsourcingCapabilities = [
  {
    title: "Tax Preparation Outsourcing",
    content: (
      <>
        <p className="mb-4 text-slate-600">
          We support U.S.-based CPA firms with end-to-end tax preparation services
          covering individual, partnership, trust, and corporate returns. Our
          teams follow IRS guidelines, firm-specific review standards, and
          current tax regulations to ensure accuracy and compliance.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Preparation of Forms 1040, 1065, 1120, 1120S, and 1041</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Balance sheet and P&L classification for tax treatment</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> E-filing, withholding tax, and reconciliation support</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Review-ready work papers and documentation</li>
        </ul>
      </>
    ),
  },
  {
    title: "Bookkeeping & Write-Up Services",
    content: (
      <>
        <p className="mb-4 text-slate-600">
          Our bookkeeping services help CPA firms convert routine write-up work
          into a scalable and profitable service through standardized workflows
          and automation-driven processes.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Transaction recording and general ledger maintenance</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Bank and credit card reconciliations</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Periodic financial statements with schedules</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> W-9 tracking and Form 1099 compliance</li>
        </ul>
      </>
    ),
  },
  {
    title: "Payroll Processing & Statutory Filings",
    content: (
      <>
        <p className="mb-4 text-slate-600">
          Payroll processing demands accuracy, timeliness, and strict
          compliance. We manage payroll operations for CPA firms using
          established controls and leading payroll platforms.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Employee master setup and payroll inputs</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Payroll processing and approval reports</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Filing of Forms 940, 941, W-2, W-3, and state returns</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Ongoing payroll compliance monitoring</li>
        </ul>
      </>
    ),
  },
  {
    title: "Sales & Use Tax Compliance",
    content: (
      <>
        <p className="mb-4 text-slate-600">
          Sales and use tax compliance involves multi-state regulations and
          frequent updates. We assist CPA firms in maintaining accurate and
          audit-ready sales tax filings.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> State-wise taxable and non-taxable sales analysis</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Sales tax return preparation and filing</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Resale certificate tracking</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> General ledger reconciliation support</li>
        </ul>
      </>
    ),
  },
  {
    title: "Customized Accounting & Back-Office Support",
    content: (
      <>
        <p className="mb-4 text-slate-600">
          We provide customized accounting support aligned with client-specific
          requirements, internal control frameworks, and audit needs.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Accounts payable and receivable support</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Audit and assurance work-paper preparation</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> MIS reporting and financial analysis</li>
          <li className="flex items-start gap-3 text-slate-500"><CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" /> Budget vs actual and cost analysis reporting</li>
        </ul>
      </>
    ),
  },
];

const benefits = [
  {
    icon: <TrendingUp size={32} />,
    title: "Scalability on Demand",
    description: "Scale your team up or down based on tax season demands without the overhead of hiring full-time staff."
  },
  {
    icon: <Users size={32} />,
    title: "Access to Skilled Talent",
    description: "Work with experienced accountants and tax professionals who understand U.S. GAAP and tax regulations."
  },
  {
    icon: <Clock size={32} />,
    title: "Faster Turnaround",
    description: "Leverage time zone differences to get work done overnight, ensuring faster client deliverables."
  },
  {
    icon: <Globe2 size={32} />,
    title: "Cost Efficiency",
    description: "Reduce operational costs significantly while maintaining high-quality output and review standards."
  }
];

const processSteps = [
  {
    icon: <FileSearch size={28} />,
    title: "Discovery & Needs Analysis",
    description: "We analyze your firm's processes, software stack, and volume to design a tailored outsourcing workflow."
  },
  {
    icon: <Handshake size={28} />,
    title: "Proposal & SLA Definition",
    description: "Scope, pricing, and Service Level Agreements (SLAs) are defined to ensure transparency and accountability."
  },
  {
    icon: <MonitorCheck size={28} />,
    title: "Secure Onboarding & Setup",
    description: "We set up secure remote access (VPN/RDP) and train our team on your specific tools and procedures."
  },
  {
    icon: <Rocket size={28} />,
    title: "Go-Live & Ongoing Support",
    description: "Operations commence with a dedicated account manager ensuring quality and timely delivery."
  }
];

const softwareStack = [
  "QuickBooks Online", "Xero", "NetSuite", "Sage Intacct", "Bill.com", "Gusto", "CCH Axcess", "Drake Tax", "Lacerte"
];

/* ================= COMPONENT: ACCORDION ================= */

const ServiceAccordion = ({ items }: { items: typeof outsourcingCapabilities }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => setActiveIndex(isOpen ? null : index)}
              className={`w-full flex items-center justify-between px-8 py-6 text-left transition-colors duration-300 ${isOpen ? "bg-slate-50" : "bg-white"}`}
            >
              <h3 className={`text-lg md:text-xl font-semibold transition-colors ${isOpen ? "text-blue-700" : "text-slate-900"}`}>
                {item.title}
              </h3>
              <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? "bg-blue-100 text-blue-600 rotate-180" : "bg-slate-100 text-slate-500"}`}>
                <ChevronDown className="h-5 w-5" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-slate-50 border-t border-slate-100 px-8 pb-8 pt-4 text-[15px] leading-relaxed"
                >
                  <div className="max-w-4xl">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

/* ================= PAGE COMPONENT ================= */

const CPAOutsourcingPage = () => {
  return (
    <div className="pt-20 bg-slate-100 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#012a51] text-white py-28 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-800/40 border border-blue-700/50 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              Dedicated Support for CPA Firms
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Strategic Outsourcing for <br/> <span className="text-blue-300">U.S.-Based Services</span>
            </h1>
            <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              Reliable, secure, and scalable back-office solutions that allow you to focus on high-value advisory and client growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-[#012a51] rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule a Consultation
              </Link>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border border-blue-400/50 text-white rounded-full font-semibold hover:bg-blue-900/40 transition-colors"
              >
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO / VALUE PROPOSITION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Extend Your Firm's Capabilities Without the Overhead
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  In today’s evolving regulatory environment, CPA firms face increasing operational complexity. Hiring locally can be expensive and time-consuming.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Our outsourcing model helps firms reduce administrative burden while maintaining accuracy, confidentiality, and control. When you work with us, you gain a reliable offshore team that integrates seamlessly with your firm’s processes, workflows, and review standards.
                </p>
                
                <div className="flex gap-8">
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-blue-600">50+</span>
                      <span className="text-slate-500 text-sm">Firms Supported</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-blue-600">99%</span>
                      <span className="text-slate-500 text-sm">Accuracy Rate</span>
                   </div>
                </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-4 bg-blue-100 rounded-[40px] rotate-3 -z-10" />
                 <img 
                   src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                   alt="CPA Team working" 
                   className="rounded-[30px] shadow-2xl w-full object-cover h-[500px]"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* KEY BENEFITS GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Partner With Us?</h2>
            <p className="text-slate-600 text-lg">
              We provide more than just labor arbitrage. We deliver process excellence, specialized talent, and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: ONBOARDING PROCESS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="text-center mb-16">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Workflow</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">How We Get Started</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                 A simple, transparent 4-step process to integrate our team with yours.
              </p>
           </div>
           
           <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, idx) => (
                 <div key={idx} className="relative group">
                    {/* Connector Line (except last item) */}
                    {idx !== processSteps.length - 1 && (
                       <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-slate-100 group-hover:bg-blue-100 transition-colors" />
                    )}
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                       <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-6 shadow-sm group-hover:border-blue-500 group-hover:text-blue-600 transition-all duration-300">
                          {step.icon}
                       </div>
                       <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                       <p className="text-slate-500 text-sm leading-relaxed px-2">
                          {step.description}
                       </p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* SERVICES ACCORDION */}
      <section id="services" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Comprehensive Services for CPA Firms
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From tax season support to year-round bookkeeping, our services are designed to fit seamlessly into your practice.
            </p>
          </div>

          <ServiceAccordion items={outsourcingCapabilities} />
        </div>
      </section>
      
      {/* SOFTWARE STACK */}
      <section className="py-20 bg-white border-t border-slate-100">
         <div className="container mx-auto px-4 text-center max-w-5xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-10">Seamless Integration with Leading Platforms</h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {softwareStack.map((sw, i) => (
                  <span key={i} className="text-xl font-semibold text-slate-400 hover:text-blue-600 cursor-default transition-colors">
                    {sw}
                  </span>
               ))}
            </div>
         </div>
      </section>

      {/* SECURITY */}
      <section className="py-24 bg-[#012a51] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                 <div className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-6">
                    <ShieldCheck size={18} />
                    <span>Data Security First</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Bank-Grade Security & Compliance</h2>
                 <p className="text-blue-100 text-lg leading-relaxed mb-8">
                    We understand that data security is paramount for CPA firms. Our infrastructure is built to meet strict security standards, ensuring your client data remains protected at all times.
                 </p>
                 
                 <ul className="space-y-4">
                     {[
                       "ISO 27001 Certified Information Security Management",
                       "Secure VPN & RDP access to your servers",
                       "NDA & Confidentiality Agreements for all staff",
                       "Restricted physical access & 24/7 surveillance"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4">
                           <div className="bg-blue-500/20 p-2 rounded-full">
                              <Lock size={18} className="text-blue-300" />
                           </div>
                           <span className="text-blue-50">{item}</span>
                        </li>
                     ))}
                 </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                     <div className="absolute inset-0 bg-blue-500 blur-[60px] opacity-20" />
                     <ShieldCheck size={280} className="text-blue-400/80 relative z-10" strokeWidth={0.5} />
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Scale Your Practice?
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            Join forward-thinking CPA firms that are leveraging our expertise to reduce costs and focus on growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#012a51] text-white px-10 py-5 rounded-full font-bold hover:bg-blue-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Get a Customized Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
      
      <ChatButton />
    </div>
  );
};

export default CPAOutsourcingPage;

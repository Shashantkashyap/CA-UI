import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  BarChart3,
  PieChart,
  Layers,
  FileSpreadsheet,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import ChatButton from "../components/ChatButton";

const FundAccountingPage = () => {
  const servicesList = [
    {
      icon: BarChart3,
      title: "Portfolio Reporting",
      description:
        "Clear and structured portfolio reports providing visibility into fund investments, asset performance, and cash movements.",
      items: [
        "Investment and subscription reconciliation",
        "Asset-level tracking and attribution",
        "Cash flow tracking by investment",
        "Cost basis and valuation support",
      ],
    },
    {
      icon: FileSpreadsheet,
      title: "Customized Financial Reports",
      description:
        "Financial reports tailored to the needs of fund managers, investors, auditors, and lenders.",
      items: [
        "GAAP-compliant financial statements",
        "Investor and management reporting",
        "Footnotes and financial highlights",
        "SEC and credit facility reporting support",
      ],
    },
    {
      icon: PieChart,
      title: "Capital Account Statements",
      description:
        "Accurate capital account statements reflecting investor activity across the fund lifecycle.",
      items: [
        "Capital contribution and distribution tracking",
        "Waterfall and carried interest calculations",
        "Allocation of profits and expenses",
        "Ledger-driven automation for consistency",
      ],
    },
    {
      icon: Layers,
      title: "Multi-Share Class & Waterfall Accounting",
      description:
        "Support for complex fund structures involving multiple share classes and preferred return arrangements.",
      items: [
        "Net Asset Value (NAV) calculations",
        "Expense and income allocation",
        "Management fee calculations",
        "Complex waterfall and allocation structures",
      ],
    },
  ];

  const complianceServices = [
    "Investor K-1 and 1099 preparation",
    "E-filing and withholding requirements",
    "Sales, property, and use tax support",
    "US reporting for international fund structures",
    "Compliance calendar management",
    "Audit and regulatory inquiry support",
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative w-full py-28 bg-[#00254B] flex items-center overflow-hidden">
        {/* Decorative Background Elements - Matches Services Page Theme */}
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
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-800/50 border border-blue-700/50 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
                    Specialized Financial Services
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Fund Accounting & <br /><span className="text-blue-400">Administration</span>
                </h1>
                <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed mb-10">
                    Professional support designed to ensure accuracy, regulatory compliance, and operational clarity so you can focus on maximizing returns.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button 
                        onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3.5 bg-white text-[#00254B] rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
                    >
                        Explore Services
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

      {/* Intro Section */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block ml-[25%]">Our approach</span>
            <h2 className="text-3xl md:text-[30px] font-bold text-slate-900 leading-tight mb-8">
              End-to-End Fund Accounting & Administration
            </h2>
            <div className="relative rounded-2xl overflow-hidden  border border-slate-100 group">
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 "></div>
                <img 
                    src="./Fund.png" 
                    alt="Fund Accounting Process" 
                    className="w-full h-auto object-cover"
                />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-600 text-md leading-relaxed">
            <p>
              Managing a fund involves more than investment decisions. Ongoing
              accounting, investor reporting, and regulatory compliance require
              time, accuracy, and specialised expertise.
            </p>
            <p>
              Our fund accounting services support fund managers by handling
              day-to-day accounting operations, financial reporting, and
              compliance requirements, allowing investment teams to focus on
              capital raising and portfolio management.
            </p>
            <p>
              We work with private equity funds, venture capital funds, real
              estate funds, and other investment structures, delivering
              accounting support aligned with US GAAP and applicable regulatory
              standards.
            </p>

            <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
               <h4 className="font-semibold text-blue-900 mb-2">Technical Expertise</h4>
               <p className="text-sm text-slate-600">
                  Platform experience across Carta, Juniper, Ledgy, Vested, and comparable fund and equity management systems.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="details" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">Capabilities</span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Comprehensive Fund Services
             </h2>
             <p className="text-slate-600 text-lg">
                We manage critical back-office functions including reporting, allocations, and complex fund structures.
             </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-100 border border-transparent transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon size={28} className="text-blue-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                  </div>

                  <div className="pl-[4.5rem]">
                    <ul className="space-y-3">
                        {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            {item}
                        </li>
                        ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-[#0e3155] text-white relative overflow-hidden">
        {/* Decorative elements */}
         <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Tax & Regulatory <br/><span className="text-blue-300">Compliance Support</span>
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                We handle the complexities of domestic and international fund structures, ensuring you never miss a regulatory deadline.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#0e3155] px-8 py-3.5 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Discuss Requirements <ArrowRight size={18} />
              </Link>
            </div>

            <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-4">
                {complianceServices.map((item, i) => (
                    <div
                    key={i}
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                    <CheckCircle2 size={20} className="text-blue-400 shrink-0" />
                    <span className="text-sm font-medium text-blue-50">{item}</span>
                    </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Matches Services CTA */}
     <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
             >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Reliable Fund Accounting Support
                </h2>
                <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                    Partner with an experienced team to ensure accurate reporting and operational efficiency.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#00254B] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0e3155] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    <Phone size={20} />
                    Speak With Our Team
                </Link>
             </motion.div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default FundAccountingPage;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, HelpCircle, CheckCircle2, ArrowRight, Users, Briefcase } from "lucide-react";

import Banner from "../components/Banner";
import ChatButton from "../components/ChatButton";

const ReferralPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"client" | "partner">("client");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const bannerImage =
    "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const clientProgram = [
    {
      title: "Referral Consideration",
      description:
        "Clients introducing new engagements may be considered for referral recognition, subject to successful onboarding and completion of initial services.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Service Credits",
      description:
        "Eligible referrals may qualify for service credits or professional fee adjustments, communicated at the time of engagement.",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
    }, 
    {
      title: "Priority Coordination",
      description:
        "Active referrers receive priority coordination and communication support.",
      icon: <ArrowRight className="w-6 h-6 text-blue-600" />,
    },
  ];

  const partnerProgram = [
    {
      title: "Referral Fee Arrangement",
      description:
        "Professional partners may be eligible for a referral fee arrangement based on engagement scope and duration.",
      icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
    },
    { 
      title: "Collaborative Engagements",
      description:
        "Opportunities for joint client engagements and long-term collaboration.",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Practice Support",
      description:
        "Access to technical discussions and collaborative knowledge sharing.",
      icon: <CheckCircle2 className="w-6 h-6 text-indigo-600" />,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Registration",
      description:
        "Express interest through your point of contact or by reaching out to our team.",
    },
    {
      number: "02",
      title: "Referral Introduction",
      description:
        "Introduce the prospective engagement with relevant background details.",
    },
    {
      number: "03",
      title: "Engagement Review",
      description:
        "Scope, eligibility, and onboarding requirements are independently assessed.",
    },
    {
      number: "04",
      title: "Confirmation & Settlement",
      description:
        "Referral consideration is confirmed after completion of initial services.",
    },
  ];

  const faqs = [
    {
      question: "When is a referral considered eligible?",
      answer:
        "After successful onboarding and completion of the initial engagement scope.",
    },
    {
      question: "Are referral terms fixed?",
      answer:
        "Terms vary by engagement and are communicated individually.",
    },
    {
      question: "Is there a referral limit?",
      answer:
        "There is no predefined limit. Each referral is assessed independently.",
    },
    {
      question: "Can international professionals refer?",
      answer:
        "Yes, subject to applicable regulations and engagement suitability.",
    },
  ];

  return (
    <div className="pt-20 bg-slate-50 text-slate-800 font-sans">
      <Banner
        title="Referral Program"
        subtitle="A structured referral arrangement for clients and professional partners"
        backgroundImage={bannerImage}
        height="h-[60vh]"
      />

      {/* PROGRAM SECTION */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-semibold tracking-wider uppercase text-sm"
            >
              Partnership Opportunities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mt-3 mb-4"
            >
              Referral Engagement Options
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 max-w-2xl mx-auto text-lg"
            >
              Structured referral arrangements designed for long-term,
              professional relationships.
            </motion.p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200 inline-flex">
              {["client", "partner"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {tab === "client"
                    ? "Client Referral"
                    : "Professional Partner"}
                </button>
              ))}
            </div>
          </div>

          {/* Program Panels */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {(activeTab === "client" ? clientProgram : partnerProgram).map(
                (item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {React.cloneElement(item.icon as React.ReactElement, {
                          className: "w-6 h-6 group-hover:text-white transition-colors",
                        })}
                      </div>
                      <h4 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mt-3 mb-4">
              Referral Process
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A clearly defined process ensuring transparency and consistency.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white md:bg-transparent"
                >
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-500 group-hover:shadow-lg transition-all duration-300 relative z-10">
                      <span className="text-xl font-bold font-heading text-slate-400 group-hover:text-blue-600 transition-colors">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Common clarifications regarding the referral arrangement.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <HelpCircle
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      openFaqIndex === index ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-indigo-900/50" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            Interested in Referring?
          </h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            Please contact our team to understand eligibility, process, and
            applicable terms for your specific situation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/20"
          >
            <Share2 size={20} />
            Contact Us for Details
          </motion.button>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default ReferralPage;

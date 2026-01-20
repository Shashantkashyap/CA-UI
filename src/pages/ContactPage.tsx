import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Calendar,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import ContactForm from "../components/ContactForm";
import ChatButton from "../components/ChatButton";

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} className="text-primary-500" />,
      title: "Phone Number",
      details: "+91 99282 83543",
    },
    {
      icon: <Mail size={24} className="text-primary-500" />,
      title: "Email Address",
      details: "finolytic@gmail.com",
    },
    {
      icon: <Clock size={24} className="text-primary-500" />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="bg-slate-50 pt-20 min-h-screen">
      {/* ================= HERO SECTION ================= */}
      {/* ================= HERO SECTION ================= */}
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
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-800/50 border border-blue-700/50 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              We're Here to Help
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Get in Touch <span className="text-blue-400">With Us</span>
            </h1>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to discuss how we can help your business
              thrive? Reach out to us through any channel below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
              <ContactForm />
            </div>

            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                >
                  <div className="inline-block p-3 bg-blue-50 rounded-xl mb-6">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 font-outfit text-slate-900">
                    Contact Details
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300 text-blue-600">
                              {item.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-1 font-outfit">
                              {item.title}
                            </h4>
                            <p className="text-slate-600 font-outfit text-sm">
                              {item.details}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 mt-8 pt-8">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      <h4 className="text-sm font-semibold font-outfit text-slate-900">
                        Business Hours
                      </h4>
                    </div>
                    <div className="space-y-2 text-sm text-slate-600 font-outfit">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <h4 className="text-sm font-semibold font-outfit">
                      Quick Response Time
                    </h4>
                  </div>
                  <p className="text-sm text-blue-50 font-outfit mb-4">
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+919928283543"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300 font-outfit"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>

                  <div className="relative z-10">
                    <div className="inline-block p-1 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4">
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Mail className="w-5 h-5 text-blue-600" />
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 font-outfit text-slate-900">
                      Stay Connected
                    </h3>
                    <p className="text-sm text-slate-600 font-outfit mb-6">
                      Follow us for expert insights and updates in accounting
                      and finance.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        
                        {
                          icon: <Linkedin size={20} />,
                          name: "LinkedIn",
                          url: "https://www.linkedin.com/in/rohit-agarwal-cpa-ca-a2baa0364",
                          color: "hover:bg-blue-600",
                        }
                      ].map((platform, index) => (
                        <motion.a
                          key={index} 
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`group flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:text-white transition-all duration-300 ${platform.color}`}
                        >
                          <span className="mb-1">{platform.icon}</span>
                          <span className="text-xs font-medium font-outfit">
                            {platform.name}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 inline-block font-outfit relative z-10">
                Expert Insights
              </span>
              <motion.div
                className="absolute -inset-1 bg-blue-100/30 rounded-lg -z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 font-outfit relative"
            >
              Frequently Asked Questions
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-600 text-lg max-w-2xl mx-auto font-outfit leading-relaxed"
            >
              Find quick answers to common queries about our professional
              services and expertise
            </motion.p>
          </motion.div>

          <div className="flex items-center justify-center overflow-x-auto gap-4 pb-4  mx-auto hide-scrollbar">
            {[
              {
                question: "What types of businesses do you work with?",
                answer:
                  "We work with a wide range of businesses—from startups and solo entrepreneurs to established small and mid-sized companies. Our clients include e-commerce shops, law firms, healthcare practices, real estate agencies, and nonprofits.",
                icon: <ArrowRight className="text-blue-600" />,
              },
              {
                question: "Do you work with businesses in all states?",
                answer:
                  "Yes, we serve clients across the United States. Our cloud-based accounting tools and virtual team allow us to support businesses regardless of location while staying compliant with local tax regulations.",
              },
              {
                question: "What bookkeeping software do you use?",
                answer:
                  "We primarily use QuickBooks Online and Xero, but we’re also experienced with platforms like FreshBooks, Wave, and NetSuite. We recommend tools based on what’s best for your specific business needs.",
              },
              {
                question:
                  "Can you work with my existing accountant or tax preparer?",
                answer:
                  "Absolutely. We often collaborate with in-house accountants or external CPAs and tax professionals to ensure seamless financial reporting and compliance for our clients.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 overflow-hidden flex-shrink-0 w-[300px]"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -right-16 -top-16 w-48 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150 blur-2xl"></div>
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {faq.icon}
                      </motion.div>
                    </div>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-blue-600 text-[16px] font-semibold">
                        {index + 1}
                      </span>
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold mb-2 text-slate-900 font-outfit group-hover:text-blue-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-xs text-slate-600 font-outfit leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-4">
                      {faq.answer}
                    </p>
                  </div>
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
      </section>

      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 text-left"
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 inline-block font-outfit">
                Start Your Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 font-outfit leading-tight">
                Ready to Elevate Your Financial Strategy?
              </h2>
              <p className="text-slate-600 text-base md:text-lg mb-8 font-outfit leading-relaxed">
                Schedule a personalized consultation to discover tailored
                solutions for your business growth.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <motion.a
                  whileHover={{ scale: 1.02, backgroundColor: "#1E40AF" }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-outfit text-base"
                >
                  Schedule Consultation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
                <span className="text-gray-500 font-outfit text-sm">or</span>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+919928283543"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 font-outfit text-base"
                >
                  <Phone size={18} className="mr-2" />
                  Call Us Now
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                  <h4 className="font-semibold text-slate-900 mb-1 font-outfit">
                    Quick Response
                  </h4>
                  <p className="text-sm text-slate-600 font-outfit">
                    Get replies within 24 hours
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
                  <h4 className="font-semibold text-slate-900 mb-1 font-outfit">
                    Expert Team
                  </h4>
                  <p className="text-sm text-slate-600 font-outfit">
                    Dedicated professionals
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                  <h4 className="font-semibold text-slate-900 mb-1 font-outfit">
                    Tailored Plans
                  </h4>
                  <p className="text-sm text-slate-600 font-outfit">
                    Customized solutions
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
                  <h4 className="font-semibold text-slate-900 mb-1 font-outfit">
                    Transparent Pricing
                  </h4>
                  <p className="text-sm text-slate-600 font-outfit">
                    Clear fee structure
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <ChatButton />
    </div>
  );
};

export default ContactPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Shuffle,
  CreditCard,
  Briefcase,
  BarChart2,
  Award,
  Users,
  Clock,
  Globe,
  DollarSign,
  Shield,
  Settings,
  Cpu,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import ScrollSection from "../components/ScrollSection";
import ChatButton from "../components/ChatButton";
import AnimatedCounter from "../components/AnimatedCounter";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const bannerImage =
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const scrollSectionBg =
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const whyChooseUsPoints = [
    {
      icon: <FileText size={32} className="text-primary-600" />,
      text: "One Stop Solution : If you want high-quality Bookkeeping, Accounting, Virtual CFO, System Setup & Migration services, we have it.",
    },
    {
      icon: <DollarSign size={32} className="text-primary-600" />,
      text: "Affordable : Rendering value based pricing so it stays win win for both of us.",
    },
    {
      icon: <Shield size={32} className="text-primary-600" />,
      text: "Secured Data : Your financial data is our bread. You can trust us with your financial data, because we take food seriously.",
    },
    {
      icon: <Settings size={32} className="text-primary-600" />,
      text: "Custom-Tailored Services : Our team is all-set to provide well-crafted solutions for your unique business needs.",
    },
    {
      icon: <Cpu size={32} className="text-primary-600" />,
      text: "Technologically Efficient : Singhal Nitin & Associates chooses the tech-savvy approach to automate your business and provide effective solutions.",
    },
    {
      icon: <Users size={32} className="text-primary-600" />,
      text: "Skilled Specialists : With CAs, CPAs, MBAs and other experienced expert personnel on our side, you get the best.",
    },
  ];

  const services = [
    {
      icon: <FileText size={32} />,
      title: "Accounting and Bookkeeping",
      description:
        "Professional management of your financial records, ensuring accuracy and compliance with latest accounting standards.",
    },
    {
      icon: <Shuffle size={32} />,
      title: "Software Migration & Setup",
      description:
        "Seamless transition between accounting platforms with zero data loss and minimal business disruption.",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Accounts Management",
      description:
        "Comprehensive handling of receivables, payables, and reconciliations with detailed aging analysis.",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Virtual CFO Services",
      description:
        "Strategic financial leadership and expert guidance without the cost of a full-time CFO. Perfect for growing businesses.",
    },
    {
      icon: <BarChart2 size={32} />,
      title: "Financial Analytics",
      description:
        "In-depth financial reporting and analysis including cash flow forecasting, KPI tracking, and performance metrics.",
    },
  ];

  const stats = [
    {
      icon: <Clock size={28} />,
      value: 10,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      icon: <Users size={28} />,
      value: 100,
      suffix: "+",
      label: "Satisfied Clients",
    },
    {
      icon: <Award size={28} />,
      value: 250,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: <Globe size={28} />,
      value: 15,
      suffix: "+",
      label: "Countries Served",
    },
  ];

  const achievements = [
    "ISO 9001:2015 Certified",
    "Trusted by Fortune 500 Companies",
    "99.9% Client Retention Rate",
    "Award-Winning Service Excellence",
  ];

  return (
    <div className="pt-20">
      <Banner
        title="Bookkeeping & Accounting Services"
        subtitle="Get Best Services for Everyone"
        backgroundImage={bannerImage}
      />

      {/* Services Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Professional Services
            </motion.h2>
            <motion.p
              className="text-secondary-600 text-lg md:text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Comprehensive financial solutions tailored to elevate your
              business performance and ensure compliance
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={<FileText size={32} />}
              title="Accounting and Bookkeeping"
              description="Professional management of your financial records, ensuring accuracy and compliance with latest accounting standards."
              delay={0.2}
            />
            <ServiceCard
              icon={<Shuffle size={32} />}
              title="Software Migration & Setup"
              description="Seamless transition between accounting platforms with zero data loss and minimal business disruption."
              delay={0.4}
            />
            <ServiceCard
              icon={<CreditCard size={32} />}
              title="Accounts Management"
              description="Comprehensive handling of receivables, payables, and reconciliations with detailed aging analysis."
              delay={0.6}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-4/5 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={<Briefcase size={32} />}
              title="Virtual CFO Services"
              description="Strategic financial leadership and expert guidance without the cost of a full-time CFO. Perfect for growing businesses."
              delay={0.8}
            />
            <ServiceCard
              icon={<BarChart2 size={32} />}
              title="Financial Analytics"
              description="In-depth financial reporting and analysis including cash flow forecasting, KPI tracking, and performance metrics."
              delay={1.0}
            />
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-0 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </section>

      <ScrollSection
        backgroundImage={scrollSectionBg}
        title="Why Work With Us"
        points={whyChooseUsPoints}
      />

      {/* Statistics Section */}
      <section
        ref={statsRef}
        className="py-16 md:py-20 bg-primary-900 text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-primary-200 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and client
              satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-800 p-3 rounded-full text-primary-200 hover:bg-primary-700 transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 text-white">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    isVisible={isStatsInView}
                    duration={2.5}
                  />
                </div>
                <div className="text-primary-200 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 bg-primary-800/50 rounded-lg py-3 px-4"
              >
                <CheckCircle2
                  size={20}
                  className="text-green-400 flex-shrink-0"
                />
                <span className="text-sm text-primary-100">{achievement}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="relative py-12 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                      <TrendingUp size={14} className="sm:w-4 sm:h-4" />
                      <span>Grow Your Business</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">
                      Ready to Transform Your Financial Operations?
                    </h2>

                    <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
                      Partner with industry-leading financial experts and
                      experience the difference professional accounting services
                      can make to your business growth.
                    </p>

                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg mt-1">
                          <CheckCircle2
                            size={16}
                            className="text-green-600 sm:w-5 sm:h-5"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">
                            Free Consultation
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            Get expert advice tailored to your business needs
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg mt-1">
                          <CheckCircle2
                            size={16}
                            className="text-blue-600 sm:w-5 sm:h-5"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">
                            Quick Response Time
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            We respond to all inquiries within 24 hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="bg-purple-100 p-1.5 sm:p-2 rounded-lg mt-1">
                          <CheckCircle2
                            size={16}
                            className="text-purple-600 sm:w-5 sm:h-5"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">
                            No Obligation
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            Explore our services risk-free
                          </p>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate("/contact")}
                      className="group bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 w-full md:w-auto justify-center"
                    >
                      <span>Schedule a Consultation</span>
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Right Side - Contact Options */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-6 sm:p-8 md:p-12 text-white flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-6 sm:space-y-8"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-6">
                        Get in Touch
                      </h3>
                      <p className="text-primary-100 text-sm sm:text-base mb-6 sm:mb-8">
                        Choose the most convenient way to reach out to us. Our
                        team is here to help you succeed.
                      </p>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 cursor-pointer"
                    >
                      <div className="bg-white/20 p-2 sm:p-3 rounded-lg">
                        <Phone size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-primary-100">
                          Call Us
                        </p>
                        <p className="font-semibold text-base sm:text-lg">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 cursor-pointer"
                    >
                      <div className="bg-white/20 p-2 sm:p-3 rounded-lg">
                        <Mail size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-primary-100">
                          Email Us
                        </p>
                        <p className="font-semibold text-base sm:text-lg break-all">
                          info@snassociates.com
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 cursor-pointer"
                    >
                      <div className="bg-white/20 p-2 sm:p-3 rounded-lg">
                        <Calendar size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-primary-100">
                          Business Hours
                        </p>
                        <p className="font-semibold text-base sm:text-lg">
                          Mon-Fri: 9AM - 6PM
                        </p>
                      </div>
                    </motion.div>

                    <div className="pt-4 sm:pt-6 border-t border-white/20">
                      <p className="text-xs sm:text-sm text-primary-100">
                        Join hundreds of satisfied clients who trust us with
                        their financial operations.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorations */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </section>

      <ChatButton />
    </div>
  );
};

export default HomePage;

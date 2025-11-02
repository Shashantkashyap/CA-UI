import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Award,
  Users,
  Target,
  Briefcase,
  Globe,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  Shield,
  Zap,
  Heart,
  LineChart,
  Coins,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import ChatButton from "../components/ChatButton";

const AboutPage: React.FC = () => {
  const bannerImage =
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const values = [
    {
      icon: <Lightbulb size={24} />,
      label: "Innovation",
      color: "from-amber-500 to-yellow-500",
      description: "Embracing cutting-edge solutions",
    },
    {
      icon: <Scale size={24} />,
      label: "Excellence",
      color: "from-blue-500 to-cyan-500",
      description: "Delivering superior quality",
    },
    {
      icon: <Shield size={24} />,
      label: "Integrity",
      color: "from-emerald-500 to-green-500",
      description: "Unwavering ethical standards",
    },
    {
      icon: <Users size={24} />,
      label: "Collaboration",
      color: "from-violet-500 to-purple-500",
      description: "Building strong partnerships",
    },
    {
      icon: <Coins size={24} />,
      label: "Client Focus",
      color: "from-rose-500 to-pink-500",
      description: "Your success is our priority",
    },
    {
      icon: <LineChart size={24} />,
      label: "Growth",
      color: "from-indigo-500 to-blue-600",
      description: "Continuous improvement",
    },
  ];

  const expertise = [
    "Financial Analysis",
    "Business Advisory",
    "QuickBooks & Xero",
    "Tax Planning",
    "International Accounting",
    "Digital Transformation",
  ];

  const { scrollYProgress } = useScroll();

  const stats = [
    {
      number: "10+",
      label: "Years of Excellence",
      icon: <Award size={24} />,
      gradient: "from-primary-500 to-primary-600",
    },
    {
      number: "100+",
      label: "Global Clients",
      icon: <Globe size={24} />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "15+",
      label: "Countries Served",
      icon: <Target size={24} />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: <Heart size={24} />,
      gradient: "from-rose-500 to-red-500",
    },
  ];

  return (
    <div className="bg-white text-gray-800 pt-20">
      <Banner
        title="About Singhal Nitin & Associates"
        subtitle="Pioneering Excellence in Global Accounting Services"
        backgroundImage={bannerImage}
        height="h-[60vh]"
      />

      {/* Story Section with Modern Layout */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Since 2013
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Building the Future of{" "}
                <span className="text-primary-600">Global Accounting</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-blue-600 mb-8 rounded-full"></div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2013, Singhal Nitin & Associates emerged with a
                  bold vision: to create a{" "}
                  <strong className="text-gray-900">
                    Global Accountancy Company
                  </strong>{" "}
                  that bridges traditional expertise with cutting-edge
                  technology.
                </p>
                <p>
                  Today, we stand as a comprehensive accounting partner, powered
                  by a team of qualified and dedicated professionals who
                  leverage online technology to scale businesses while
                  maintaining that essential personalized touch.
                </p>
                <p>
                  From{" "}
                  <strong className="text-gray-900">
                    Bookkeeping and Accounting
                  </strong>{" "}
                  to{" "}
                  <strong className="text-gray-900">
                    Virtual CFO Services
                  </strong>{" "}
                  and{" "}
                  <strong className="text-gray-900">System Migrations</strong>,
                  we provide end-to-end financial solutions for small &
                  medium-sized businesses, CPA firms, and accounting practices
                  worldwide.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Projects Delivered
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 text-sm">Team Members</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl -z-10 opacity-20"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl -z-10 opacity-20"></div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100 max-w-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle2 size={24} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Trusted Partner
                    </div>
                    <div className="text-sm text-gray-600">
                      Fortune 500 Companies
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Letter Section - Premium Design */}
      <section className="py-10 md:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1  0 left-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Mail size={32} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      A Letter From Our CEO
                    </h2>
                    <p className="text-primary-100 text-sm mt-1">
                      Leadership Perspective
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="mb-8 text-lg text-gray-600 italic border-l-4 border-primary-500 pl-6">
                  "Dear Valued Clients and Partners,"
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed text-sm">
                  <p>
                    When I founded Singhal Nitin & Associates in 2013, I had a
                    vision to create an accounting firm that would transcend
                    traditional boundaries and embrace the digital future.
                    Today, I'm proud to say that we've not only realized that
                    vision but continue to expand upon it each day.
                  </p>

                  <p>
                    Our journey began with a simple promise: to provide
                    exceptional accounting services with unwavering integrity
                    and a personal touch. Over the years, we've grown from a
                    small local practice to a global team serving clients across
                    continents, but that core promise remains unchanged.
                  </p>

                  <p>
                    What sets us apart is our commitment to innovation. We've
                    embraced technology not as a replacement for human
                    expertise, but as a powerful tool that enables our team to
                    deliver more value, insights, and strategic guidance to your
                    business.
                  </p>

                  <p>
                    As we look to the future, our focus remains on your success.
                    Whether you're a small business owner navigating growth
                    challenges, a CPA firm seeking reliable back-office support,
                    or an enterprise requiring sophisticated financial analysis,
                    our team is dedicated to being your trusted financial
                    partner.
                  </p>

                  <p className="text-primary-700 font-semibold">
                    I personally invite you to experience the SNA difference.
                    Our doors—both physical and virtual—are always open.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200 flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-600 rounded-full"></div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      Nitin Singhal
                    </div>
                    <div className="text-primary-600 font-medium">
                      Founder & CEO
                    </div>
                    <div className="text-gray-600 text-sm">
                      Singhal Nitin & Associates
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Leadership Section - Premium Layout */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-primary-600">Founder</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visionary leadership driving excellence in global accounting
              services
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="sticky top-24">
                  <div className="relative">
                    <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src="/img1.jpg"
                        alt="Nitin Singhal - CEO"
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-1">
                          Nitin Singhal
                        </h3>
                        <p className="text-primary-100">Founder & CEO</p>
                      </div>
                    </div>

                    {/* Decorative gradient */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl -z-10 opacity-20"></div>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">
                          10+
                        </div>
                        <div className="text-xs text-gray-600">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">
                          CFA
                        </div>
                        <div className="text-xs text-gray-600">
                          Level 2 Candidate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-900">
                      Nitin Singhal, CA
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        Chartered Accountant
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        QuickBooks ProAdvisor
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        Xero Advisor
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      A qualified Chartered Accountant with close to a decade of
                      successful experience, Nitin is also a{" "}
                      <strong className="text-gray-900">
                        CFA USA Level 2 candidate
                      </strong>{" "}
                      and a certified QuickBooks and Xero expert.
                    </p>
                    <p>
                      Prior to establishing his own CA firm, Nitin gained
                      valuable experience at{" "}
                      <strong className="text-gray-900">
                        PricewaterhouseCoopers, Mumbai
                      </strong>{" "}
                      and various prestigious local CA firms, building a strong
                      foundation in professional accounting services.
                    </p>
                    <p>
                      Backed by his extensive experience serving clients across
                      the{" "}
                      <strong className="text-gray-900">
                        UK, US, Australia, and India
                      </strong>
                      , he brings specialized skills in business transformation
                      and professional advisory to help organizations navigate
                      complex financial landscapes.
                    </p>
                    <p>
                      Beyond his professional pursuits, Nitin is passionate
                      about traveling abroad, maintaining an active lifestyle
                      through regular workouts, and exploring entrepreneurial
                      ventures.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                      <Briefcase size={24} className="text-primary-600" />
                      Areas of Expertise
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {expertise.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 bg-gradient-to-r from-primary-50 to-blue-50 p-3 rounded-lg group hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-800 font-medium text-sm">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Modern Design */}
     <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Dynamic background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-indigo-500/20 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 md:p-16 shadow-[0_8px_40px_rgba(0,0,0,0.25)] relative overflow-hidden"
        >
          {/* Decorative gradient lines */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-cyan-300 to-transparent opacity-70" />

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <div className="flex items-center gap-5 mb-6 md:mb-0">
              <motion.div
                whileHover={{ rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-tr from-blue-600/30 to-indigo-500/20 rounded-2xl flex items-center justify-center border border-white/20 shadow-inner"
              >
                <Users size={30} className="text-blue-300" />
              </motion.div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Our Expert Team
                </h3>
                <p className="text-blue-200 font-medium">
                  Excellence Through Collaboration
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto mb-12">
            <p>
              Our team consists of highly qualified accounting and finance
              professionals with global experience and outstanding analytical
              skills. Each member combines precision, creativity, and integrity
              to deliver excellence.
            </p>
            <p>
              With{" "}
              <span className="text-white font-semibold">
                2–10 years of specialized expertise
              </span>{" "}
              across industries, we bring deep domain knowledge and the ability
              to adapt to emerging technologies and global compliance standards.
            </p>
            <p>
              Our delivery-driven culture ensures that every engagement is
              handled with attention to detail, transparent communication, and a
              relentless focus on client success.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                }}
                viewport={{ once: true }}
                className="relative bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:border-blue-300/40 transition-all duration-300 backdrop-blur-lg"
              >
                {/* Light glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-indigo-500/20 rounded-xl border border-white/10">
                    <div className="text-blue-200">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-semibold mb-1 bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-blue-200/90 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>


      <ChatButton />
    </div>
  );
};

export default AboutPage;

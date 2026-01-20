import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Award,
  Users,
  Target,
  Briefcase,
  Globe,
  CheckCircle2,
  Heart,
  ArrowRight,
} from "lucide-react";

import ChatButton from "../components/ChatButton";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  
  const expertise = [
    "Financial Analysis",
    "Business Advisory",
    "QuickBooks & Xero",
    "Tax Planning",
    "International Accounting",
    "Digital Transformation",
  ];

  const stats = [
    {
      number: "10+",
      label: "Years of Excellence",
      icon: <Award size={24} />,
    },
    {
      number: "100+",
      label: "Global Clients",
      icon: <Globe size={24} />,
    },
    {
      number: "15+",
      label: "Countries Served",
      icon: <Target size={24} />,
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: <Heart size={24} />,
    },
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#012a51] text-white py-24 md:py-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-800/40 border border-blue-700/50 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              Since 2022
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Pioneering Excellence in <br />
              <span className="text-blue-300">Global Accounting Services</span>
            </h1>
            <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Finolytic bridges traditional financial expertise with cutting-edge technology to deliver scalable solutions for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY / INTRODUCTION ================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Our Journey & <br/> <span className="text-blue-600">Global Vision</span>
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full" />
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2022, <strong>Finolytic</strong> emerged with a
                  bold vision: to create a global accountancy firm that seamlessly integrates 
                  expert financial guidance with modern technology.
                </p>
                <p>
                  Today, we stand as a comprehensive accounting partner, powered
                  by a team of qualified professionals who leverage cloud solutions 
                  to scale businesses while maintaining a personalized touch.
                </p>
                <p>
                  From <strong>Bookkeeping</strong> to <strong>Virtual CFO Services</strong> and <strong>System Migrations</strong>,
                  we provide end-to-end financial solutions for SMBs, CPA firms, 
                  and enterprises across the globe.
                </p>
              </div>

              <div className="flex flex-wrap gap-8 mt-10">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 min-w-[160px]">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-slate-500 text-sm font-medium">Projects Delivered</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 min-w-[160px]">
                  <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-slate-500 text-sm font-medium">Team Members</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                 <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 max-w-xs z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    <CheckCircle2 size={24} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Trusted Partner</div>
                    <div className="text-xs text-slate-500">For Global Enterprises</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CEO MESSAGE ================= */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              
              {/* Sidebar / Header */}
              <div className="md:w-1/3 bg-[#012a51] p-10 text-white flex flex-col justify-between relative overflow-hidden">
                 <div className="relative z-10">
                    <Mail size={40} className="text-blue-300 mb-6" />
                    <h3 className="text-3xl font-bold mb-2">A Message from Our CEO</h3>
                    <p className="text-blue-200 text-sm">Leadership Perspective</p>
                 </div>
                 
                 <div className="mt-12 relative z-10">
                   
                    <div>
                       <div className="font-bold text-lg">Rohit Agarwal</div>
                       <div className="text-blue-300 text-sm">Founder & CEO</div>
                    </div>
                 </div>

                 {/* Decor */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16" />
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -ml-16 -mb-16" />
              </div>

              {/* Content */}
              <div className="md:w-2/3 p-10 md:p-14">
                 <div className="mb-8 border-l-4 border-blue-600 pl-6 italic text-slate-500 text-lg">
                    "Our vision was never just to provide accounting services, but to become a strategic partner in our clients' growth stories."
                 </div>
                 
                 <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                       When I founded Finolytic in 2022, I envisioned a firm that would transcend traditional boundaries. Today, we've realized that vision by serving clients across the UK, US, Australia, and India.
                    </p>
                    <p>
                       We've embraced technology not as a replacement for human expertise, but as a powerful enabler. This allows us to deliver accurate, timely, and insightful financial guidance that drives decision-making.
                    </p>
                    <p>
                       Whether you're a small business or a large CPA firm, our doors—both physical and virtual—are always open to you.
                    </p>
                 </div>

                 <div className="mt-8">
                     <Link to="/contact" className="inline-flex items-center gap-2 text-[#012a51] font-semibold hover:gap-3 transition-all group">
                        Get in Touch <ArrowRight size={18} className="group-hover:text-blue-600" />
                     </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ================= FOUNDER PROFILE ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet the Founder</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                 Visionary leadership driving excellence in global accounting standards.
              </p>
           </div>
           
           <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="md:w-1/9 relative">
                 <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                    {/* <img src="/img1.jpg" alt="Nitin Singhal" className="w-full h-auto object-cover" /> */}
                 </div>
                 {/* Badge */}
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                    {/* <span className="text-[#012a51] font-bold text-sm">CFA Level 2 Candidate</span> */}
                 </div>
              </div>

              <div className="md:w-8/9">
                 <h3 className="text-3xl font-bold text-slate-900 mb-4">Rohit Agarwal, CA</h3>
                 
                 <div className="flex flex-wrap gap-2 mb-8">
                    {["Chartered Accountant", "QuickBooks ProAdvisor", "Xero Advisor"].map((tag, i) => (
                       <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          {tag}
                       </span>
                    ))}
                 </div>

                 <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                    <p>
fied Public Accountant(CPA), Compliance  Director                    </p>
                    <p>
US Certified Public Accountant(CPA) with 8+ years of expertise in accounting, taxation, and financial reporting, serving global clients with precision and compliance. Skilled in US-GAAP, IFRS, and advanced accounting software, delivering exceptional results in dynamic environments.                    </p>
                 </div>

                 <div className="border-t border-slate-100 pt-8">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                       <Briefcase size={20} className="text-blue-600" /> Areas of Expertise
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                       {expertise.map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-600 text-sm bg-slate-50 px-3 py-2 rounded-lg">
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                             {skill}
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ================= TEAM HEADER / STATS ================= */}
      <section className="py-24 bg-[#0b1c2c] text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -ml-20 -mb-20" />

        <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expert Team</h2>
              <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
                 We are a collective of highly qualified professionals driven by precision, creativity, and a relentless focus on client success.
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, idx) => (
                 <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                 >
                    <div className="inline-flex p-3 rounded-xl bg-blue-500/20 text-blue-300 mb-4">
                       {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-blue-200/80 uppercase tracking-wide font-medium">{stat.label}</div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default AboutPage;

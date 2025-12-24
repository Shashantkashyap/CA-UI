import { FileText, Shuffle, CreditCard, Briefcase, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FileText size={28} />,
    title: "Accounting & Bookkeeping",
    description:
      "We provide end-to-end accounting and bookkeeping services designed to ensure accuracy, transparency, and compliance with applicable accounting standards. Our team manages daily financial transactions, reconciliations, and financial statements, enabling businesses to maintain reliable records and make informed financial decisions with confidence.",
  },
  {
    icon: <Shuffle size={28} />,
    title: "Software Migration & Accounting System Setup",
    description:
      "Our experts assist businesses in seamlessly migrating accounting data between platforms while ensuring data integrity and operational continuity. We handle system configuration, data validation, and user enablement to optimize your accounting infrastructure for scalability and efficiency.",
  },
  {
    icon: <CreditCard size={28} />,
    title: "Accounts Management",
    description:
      "We offer comprehensive management of accounts receivable and payable to support healthy cash flow operations. Our structured processes include invoice tracking, aging analysis, vendor reconciliation, and follow-ups, providing clear visibility into working capital performance.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Virtual CFO Services",
    description:
      "Our Virtual CFO services deliver strategic financial leadership without the overhead of a full-time CFO. We support budgeting, forecasting, financial planning, management reporting, and profitability analysis to align financial strategies with business growth objectives.",
  },
  {
    icon: <BarChart2 size={28} />,
    title: "Financial Analytics & Reporting",
    description:
      "We convert complex financial data into actionable insights through customized reporting and performance analysis. Our analytics services include cash flow forecasting, KPI monitoring, variance analysis, and executive dashboards to support data-driven decision-making.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Comprehensive financial solutions designed to strengthen compliance,
            enhance efficiency, and support sustainable business growth.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600 shrink-0">
                {service.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

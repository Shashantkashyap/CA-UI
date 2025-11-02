import React from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a full suite of accounting and bookkeeping services, including financial statement preparation, payroll processing, tax planning and filing, accounts payable/receivable management, bank reconciliations, budgeting and forecasting, and financial consulting. Our services are designed to meet the unique needs of small to medium-sized businesses."
    },
    {
      question: "How long does it take to get started?",
      answer: "Getting started typically takes 1–2 weeks, depending on the complexity of your current financial setup. We begin with an initial consultation and a review of your existing records to ensure a smooth onboarding process."
    },
    {
      question: "What is your process for managing our finances?",
      answer: "Our process is structured around five key phases: Assessment, Setup, Categorization, Reconciliation, and Reporting. We prioritize accuracy, transparency, and timely communication to ensure your financials are always up-to-date and compliant."
    },
    {
      question: "Do you provide ongoing support and consultation?",
      answer: "Absolutely. We offer ongoing monthly support as part of our bookkeeping and accounting packages. You’ll have access to regular financial reports, compliance updates, and proactive financial advice tailored to your business goals."
    },
    {
      question: "How do you handle pricing for your services?",
      answer: "We offer flexible pricing models, including monthly retainers, hourly billing, or custom packages based on your business’s size and service needs. All pricing is discussed transparently during our initial consultation."
    },
    {
      question: "Can you work with our existing accounting software?",
      answer: "Yes, we work with a wide range of accounting platforms including QuickBooks, Xero, FreshBooks, and Sage. We can either integrate with your current systems or recommend tools that best suit your operations."
    }
  ];

  return (
    <section className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold mb-6 text-gray-800"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FAQItem 
              question={faq.question} 
              answer={faq.answer} 
              initiallyOpen={index === 0}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import BlogCard from '../components/BlogCard';
import FAQSection from '../components/FAQSection';
import ResourceSidebar from '../components/ResourceSidebar';
import ResourceTabs from '../components/ResourceTabs';
import ChatButton from '../components/ChatButton';

const ResourcesPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('blogs');
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Unified scroll and active section setter
  const goToSection = useCallback((section: string) => {
    setActiveSection(section === 'faqs' ? 'faqs' : 'blogs');
    const id = section === 'faqs' ? 'faqs' : 'latest-blog';
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, []);

  // Listen for hash changes (including direct navigation and navbar clicks)
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'faqs' || hash === 'latest-blog') {
      goToSection(hash);
    }
  }, [location.hash, goToSection]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const bannerImage = "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  const blogPosts = [
    {
      title: "Top 10 Bookkeeping Tips for Small Businesses in 2025",
      excerpt: "Stay on top of your finances with these essential bookkeeping strategies designed to help small business owners stay organized and compliant.",
      image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Emma Walker",
      date: "July 15, 2025",
      readTime: "6 min read",
      category: "Bookkeeping",
      fullContent: "1. Keep Personal and Business Finances Separate: One of the most crucial steps in bookkeeping is maintaining clear boundaries between personal and business expenses. This separation not only makes tax preparation easier but also provides a clearer picture of your business's financial health.\n\n2. Track Every Transaction: Document all income and expenses, no matter how small. This includes cash transactions, digital payments, and any business-related purchases. Use accounting software or apps to make this process more efficient.\n\n3. Reconcile Bank Statements Monthly: Regular reconciliation helps you catch errors early and ensures your books match your bank records. Set aside time each month to review and reconcile all accounts.\n\n4. Organize Your Receipts: Keep both physical and digital receipts organized by category and date. Consider using receipt scanning apps or cloud storage to maintain digital copies.\n\n5. Set Up a Chart of Accounts: Create a comprehensive chart of accounts that reflects your business structure. This will make categorizing transactions more consistent and reporting more accurate.\n\n6. Monitor Cash Flow: Keep a close eye on your cash flow by tracking when money comes in and goes out. This helps you make informed decisions about expenses and growth opportunities.\n\n7. Prepare for Tax Season: Stay organized throughout the year by maintaining proper records and setting aside money for taxes. Consider working with a professional accountant for complex tax situations.\n\n8. Use Accounting Software: Invest in reliable accounting software that suits your business size and needs. Popular options include QuickBooks, Xero, and Wave.\n\n9. Regular Financial Reviews: Schedule monthly or quarterly reviews of your financial reports to assess your business performance and identify areas for improvement.\n\n10. Backup Your Data: Regularly backup your financial data to prevent loss due to technical issues or security breaches. Use cloud-based solutions for added security.",
      tags: ["Bookkeeping", "Small Business", "Financial Management", "Tax Preparation", "Cash Flow"],
      relatedLinks: [
        { title: "QuickBooks for Small Business", url: "https://quickbooks.intuit.com/small-business/" },
        { title: "IRS Small Business Tax Guide", url: "https://www.irs.gov/businesses/small-businesses-self-employed" },
        { title: "Small Business Administration Resources", url: "https://www.sba.gov/business-guide/manage-your-business/manage-business-finances" }
      ]
    },
    {
      title: "How to Choose the Right Accounting Software",
      excerpt: "From QuickBooks to Xero, we compare the most popular accounting platforms to help you find the best fit for your business.",
      image: "https://images.pexels.com/photos/6693644/pexels-photo-6693644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Liam Patel",
      date: "July 1, 2025",
      readTime: "7 min read",
      category: "Technology",
      fullContent: "Choosing the right accounting software is crucial for your business's financial management success. With numerous options available, it's important to understand what features matter most for your specific needs.\n\nQuickBooks Online: The most popular choice for small to medium businesses, QuickBooks offers comprehensive features including invoicing, expense tracking, payroll integration, and extensive third-party app integrations. It's user-friendly and offers excellent customer support.\n\nXero: Known for its clean interface and strong bank reconciliation features, Xero is particularly popular with accountants and bookkeepers. It offers unlimited users on all plans and has excellent mobile apps.\n\nWave: A free accounting software that's perfect for very small businesses and freelancers. While it has fewer features than paid alternatives, it covers the basics well and integrates with Wave's payment processing services.\n\nSage Business Cloud: Offers scalable solutions from basic bookkeeping to enterprise-level accounting. It's particularly strong in inventory management and has good industry-specific features.\n\nZoho Books: Part of the larger Zoho ecosystem, this software integrates well with other Zoho applications. It's competitively priced and offers good automation features.\n\nKey factors to consider when choosing:\n- Business size and complexity\n- Industry-specific needs\n- Integration requirements\n- Budget constraints\n- User experience and learning curve\n- Customer support quality\n- Scalability for future growth\n\nTake advantage of free trials to test different platforms before making your decision. Consider involving your accountant or bookkeeper in the selection process, as they'll be working with the software regularly.",
      tags: ["Accounting Software", "QuickBooks", "Xero", "Technology", "Business Tools"],
      relatedLinks: [
        { title: "QuickBooks vs Xero Comparison", url: "https://quickbooks.intuit.com/compare/quickbooks-vs-xero/" },
        { title: "Small Business Software Reviews", url: "https://www.softwareadvice.com/accounting/" },
        { title: "Accounting Software Buying Guide", url: "https://www.capterra.com/accounting-software/" }
      ]
    },
    {
      title: "Understanding Financial Statements: A Beginner’s Guide",
      excerpt: "Learn how to read and interpret income statements, balance sheets, and cash flow statements to make smarter financial decisions.",
      image: "https://images.pexels.com/photos/6693673/pexels-photo-6693673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Sophia Lin",
      date: "June 20, 2025",
      readTime: "8 min read",
      category: "Finance"
    },
    {
      title: "Tax Planning Strategies Every Business Should Know",
      excerpt: "Minimize your tax burden legally and efficiently with these proactive tax planning tips for entrepreneurs and small business owners.",
      image: "https://images.pexels.com/photos/4386369/pexels-photo-4386369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "James Nguyen",
      date: "May 30, 2025",
      readTime: "9 min read",
      category: "Tax"
    },
    {
      title: "Cash Flow Management: Keep Your Business Financially Healthy",
      excerpt: "Master your cash flow with proven techniques to ensure your business has enough liquidity to meet its obligations and grow sustainably.",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Natalie Brooks",
      date: "May 15, 2025",
      readTime: "7 min read",
      category: "Cash Flow",
      fullContent: "Cash flow is the lifeblood of any business. Even profitable companies can fail if they can't manage their cash flow effectively. Here's how to master this critical aspect of business finance.\n\nUnderstanding Cash Flow vs. Profit: Profit is the difference between revenue and expenses on paper, while cash flow represents the actual money moving in and out of your business. You can be profitable on paper but still face cash flow problems if customers pay slowly or you tie up too much money in inventory.\n\nCreating Cash Flow Projections: Develop 13-week rolling cash flow forecasts that predict your cash position. Include all expected income and expenses, noting when payments are actually expected to be received or made. Update these projections weekly for accuracy.\n\nAccelerating Receivables: Implement strategies to get paid faster:\n- Offer early payment discounts (2/10 net 30)\n- Require deposits or partial payments upfront\n- Use electronic invoicing and payment systems\n- Follow up on overdue accounts promptly\n- Consider factoring for immediate cash\n\nManaging Payables Strategically: While you want to pay bills on time, you can optimize timing:\n- Take advantage of payment terms without damaging relationships\n- Negotiate better terms with suppliers\n- Pay by credit card for additional float (if no fees)\n- Consider early payment discounts only if they make financial sense\n\nInventory Management: Excess inventory ties up cash unnecessarily:\n- Use just-in-time ordering when possible\n- Implement inventory management systems\n- Regularly review and remove slow-moving items\n- Consider consignment arrangements\n\nBuilding Cash Reserves: Maintain a cash cushion for unexpected expenses or opportunities:\n- Aim for 3-6 months of operating expenses in reserve\n- Use high-yield savings accounts or money market funds\n- Consider a business line of credit for additional flexibility\n\nRegular cash flow management prevents crisis situations and provides the foundation for sustainable business growth.",
      tags: ["Cash Flow", "Financial Management", "Business Finance", "Liquidity", "Working Capital"],
      relatedLinks: [
        { title: "Cash Flow Management Guide", url: "https://www.sba.gov/business-guide/manage-your-business/manage-business-finances" },
        { title: "Invoice Factoring Information", url: "https://www.investopedia.com/terms/f/factor.asp" },
        { title: "Business Credit Lines", url: "https://www.nerdwallet.com/article/small-business/business-line-of-credit" }
      ]
    },
    {
      title: "Why Monthly Reconciliation Is Crucial for Your Business",
      excerpt: "Avoid financial surprises by learning the importance of monthly bank reconciliations and how they contribute to financial accuracy.",
      image: "https://images.pexels.com/photos/6693670/pexels-photo-6693670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Carlos Rivera",
      date: "April 28, 2025",
      readTime: "5 min read",
      category: "Operations"
    }
  ];


  return (
    <div className='pt-20'>
      <Banner
        title="Resources"
        subtitle="Insights, guides, and answers to help your business thrive"
        backgroundImage={bannerImage}
        height="h-[40vh]"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {isMobile && (
              <ResourceTabs
                activeSection={activeSection}
                onSectionChange={goToSection}
              />
            )}
            <div className="flex flex-col md:flex-row gap-8">
              {!isMobile && (
                <div className="md:w-1/4">
                  <ResourceSidebar
                    activeSection={activeSection}
                    onSectionChange={goToSection}
                  />
                </div>
              )}
              <div className="md:w-3/4">
                {activeSection === 'blogs' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-6" id="latest-blog">Latest Blog Posts</h2>
                      <p className="text-gray-600 mb-8">
                        Stay up to date with the latest trends, insights, and best practices in technology and digital innovation.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {blogPosts.map((post, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <BlogCard {...post} />
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-10 text-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-primary-600 text-white font-medium px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
                        >
                          View All Blog Posts
                        </motion.button>
                      </div>
                    </div>
                    <div className="mt-16">
                      <FAQSection />
                    </div>
                  </motion.div>
                )}
                {activeSection === 'faqs' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-6" id="faqs">Frequently Asked Questions</h2>
                      <p className="text-gray-600 mb-8">
                        Find quick answers to common questions about our services, process, and approach.
                      </p>
                      <FAQSection />
                    </div>
                    <div className="mt-16 bg-gray-50 rounded-lg p-8 border border-gray-200">
                      <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
                      <p className="text-gray-600 mb-6">
                        Our team is ready to help you find the answers you need. Reach out to us for personalized assistance.
                      </p>
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href="/contact"
                        className="inline-block bg-primary-600 text-white font-medium px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
                      >
                        Contact Us
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8">
              Get the latest insights, tips, and resources delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-800 font-medium px-6 py-3 rounded-md hover:bg-primary-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <ChatButton />
    </div>
  );
};

export default ResourcesPage;

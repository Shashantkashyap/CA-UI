import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator,
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const services = [
  'Virtual CFO',
  'Controller Service',
  'Transactional Accounting',
  'Cloud Accounting Setup',
  'Financial Reporting and Analysis',
  'Tax Preparation and Planning',
  'Compliance and Audit Support',
  'Business Advisory Service',
];

const industries = [
  { label: 'Retail & E-Commerce', hash: 'retail' },
  { label: 'Healthcare & Medical', hash: 'healthcare' },
  { label: 'Construction & Contracting', hash: 'construction' },
  { label: 'Technology & SaaS', hash: 'technology' },
  { label: 'Professional Services', hash: 'professional' },
  { label: 'Nonprofit & Associations', hash: 'nonprofit' },
];

const resources = [
  { label: 'Latest Blog', hash: 'latest-blog' },
  { label: 'FAQs', hash: 'faqs' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Company Logo and Description */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold">FINOLYTIC</span>
          </div>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Empowering your finances. Expert bookkeeping and accounting to keep your business on track
          </p>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* ACCOUNTING SERVICES */}
          <div>
            <h3 className="text-orange-400 text-sm font-bold tracking-wider mb-6 uppercase">
              Accounting Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to={`/services?name=${encodeURIComponent(service)}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h3 className="text-orange-400 text-sm font-bold tracking-wider mb-6 uppercase">
              Industries
            </h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.hash}>
                  <Link 
                    to={`/industries#${industry.hash}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-orange-400 text-sm font-bold tracking-wider mb-6 uppercase">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.hash}>
                  <Link 
                    to={`/resources#${resource.hash}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-orange-400 text-sm font-bold tracking-wider mb-6 uppercase">
              Company
            </h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link 
                  to="/about" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-white font-medium hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-white font-medium hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link 
                  to="/referral" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-white font-medium hover:text-blue-400 transition-colors"
                >
                  Referral Program
                </Link>
              </li> */}
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/rohit-agarwal-cpa-ca-a2baa0364" 
                className="text-gray-400 ml-5  hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              {/* <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://www.facebook.com/nitin.singhal.75098?mibextid=wwXIfr&rdid=054tPrbFgnT2hw0N&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F1C1CVydtwN%252F%253Fmibextid%253DwwXIfr#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
              <span className="text-gray-300 text-sm">+91 99282 83543</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
              <span className="text-gray-300 text-sm">finolytic@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center border-t border-blue-800">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Finolytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

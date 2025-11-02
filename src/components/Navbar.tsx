import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type TimeoutId = ReturnType<typeof setTimeout>;

const industrySections = [
  { label: "Retail & E-Commerce", hash: "retail" },
  { label: "Healthcare & Medical", hash: "healthcare" },
  { label: "Construction & Contracting", hash: "construction" },
  { label: "Technology & SaaS", hash: "technology" },
  { label: "Professional Services", hash: "professional" },
  { label: "Nonprofit & Associations", hash: "nonprofit" },
];

const resourceSections = [
  { label: "Latest Blog", hash: "latest-blog" },
  { label: "FAQs", hash: "faqs" },
];

const serviceSections = [
  "Virtual CFO",
  "Controller Service",
  "Transactional Accounting",
  "Cloud Accounting Setup",
  "Financial Reporting and Analysis",
  "Tax Preparation and Planning",
  "Compliance and Audit Support",
  "Business Advisory Service",
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<TimeoutId | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(null);
  }, [location.pathname]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      // Close dropdowns when scrolling
      setShowDropdown(null);
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".nav-dropdown")) {
        setShowDropdown(null);
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "Industries", path: "/industries" },
    { name: "Referral & Earn", path: "/referral" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const handleDropdownClick = (
    e: React.MouseEvent,
    page: string,
    hash: string
  ) => {
    e.preventDefault();
    if (location.pathname === page) {
      window.history.replaceState(null, "", `${page}#${hash}`);
      scrollToSection(hash);
    } else {
      navigate(`${page}#${hash}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setShowDropdown(null);
  };

  const DropdownMenu = ({
    items,
    onItemClick,
  }: {
    items: { label: string; hash: string }[] | string[];
    onItemClick: (value: string, hash?: string) => void;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-white/95 backdrop-blur-lg shadow-xl ring-1 ring-gray-200 z-50 overflow-hidden"
      onMouseEnter={() => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
      }}
      onMouseLeave={() => {
        const timeout = setTimeout(() => {
          setShowDropdown(null);
        }, 150);
        setHoverTimeout(timeout);
      }}
    >
      {Array.isArray(items) &&
        items.map((item) =>
          typeof item === "string" ? (
            <button
              key={item}
              onClick={() => onItemClick(item)}
              className="block w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              {item}
            </button>
          ) : (
            <button
              key={item.hash}
              onClick={() => onItemClick(item.label, item.hash)}
              className="block w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              {item.label}
            </button>
          )
        )}
    </motion.div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-gray-900"
        >
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            SNA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navItems.map((item) => {
            const isDropdown =
              item.name === "Services" ||
              item.name === "Resources" ||
              item.name === "Industries";

            return (
              <div
                key={item.name}
                className="relative nav-dropdown"
                onMouseEnter={() => {
                  if (hoverTimeout) {
                    clearTimeout(hoverTimeout);
                  }
                  if (isDropdown) {
                    setShowDropdown(item.name.toLowerCase());
                  }
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setShowDropdown(null);
                  }, 150);
                  setHoverTimeout(timeout);
                }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 transition-colors duration-200 
                    ${
                      location.pathname === item.path
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  onClick={(e) => {
                    if (isDropdown) {
                      e.preventDefault();
                      if (showDropdown === item.name.toLowerCase()) {
                        setShowDropdown(null);
                      } else {
                        setShowDropdown(item.name.toLowerCase());
                      }
                    }
                  }}
                >
                  {item.name}
                  {isDropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        showDropdown === item.name.toLowerCase()
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {showDropdown === item.name.toLowerCase() && (
                    <DropdownMenu
                      items={
                        item.name === "Services"
                          ? serviceSections
                          : item.name === "Resources"
                          ? resourceSections
                          : item.name === "Industries"
                          ? industrySections
                          : []
                      }
                      onItemClick={(val, hash) => {
                        if (item.name === "Services") {
                          navigate(`/services?name=${encodeURIComponent(val)}`);
                        } else {
                          handleDropdownClick(
                            new MouseEvent("click") as any,
                            `/${item.name.toLowerCase()}`,
                            hash!
                          );
                        }
                        setShowDropdown(null);
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2"
            >
              <Calendar size={18} />
              Free Consultation
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-xl shadow-lg overflow-hidden"
          >
            <div className="max-h-[calc(100vh-80px)] overflow-y-auto py-4 px-6 space-y-4">
              {navItems.map((item) => {
                const isDropdownItem =
                  item.name === "Services" ||
                  item.name === "Resources" ||
                  item.name === "Industries";
                return (
                  <div key={item.name} className="space-y-2">
                    <div
                      className="flex items-center justify-between"
                      onClick={() => {
                        if (isDropdownItem) {
                          setShowDropdown((prev) =>
                            prev === item.name.toLowerCase()
                              ? null
                              : item.name.toLowerCase()
                          );
                        } else {
                          navigate(item.path);
                          setIsOpen(false);
                        }
                      }}
                    >
                      <span
                        className={`${
                          location.pathname === item.path
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {item.name}
                      </span>
                      {isDropdownItem && (
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${
                            showDropdown === item.name.toLowerCase()
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                    </div>

                    <AnimatePresence>
                      {showDropdown === "services" &&
                        item.name === "Services" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 space-y-2"
                          >
                            {serviceSections.map((service) => (
                              <div
                                key={service}
                                className="text-gray-600 text-sm py-2"
                                onClick={() => {
                                  navigate(
                                    `/services?name=${encodeURIComponent(
                                      service
                                    )}`
                                  );
                                  setIsOpen(false);
                                }}
                              >
                                {service}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      {showDropdown === "resources" &&
                        item.name === "Resources" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 space-y-2"
                          >
                            {resourceSections.map((section) => (
                              <div
                                key={section.hash}
                                className="text-gray-600 text-sm py-2"
                                onClick={() => {
                                  handleDropdownClick(
                                    new MouseEvent("click") as any,
                                    "/resources",
                                    section.hash
                                  );
                                  setIsOpen(false);
                                }}
                              >
                                {section.label}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      {showDropdown === "industries" &&
                        item.name === "Industries" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 space-y-2"
                          >
                            {industrySections.map((section) => (
                              <div
                                key={section.hash}
                                className="text-gray-600 text-sm py-2"
                                onClick={() => {
                                  handleDropdownClick(
                                    new MouseEvent("click") as any,
                                    "/industries",
                                    section.hash
                                  );
                                  setIsOpen(false);
                                }}
                              >
                                {section.label}
                              </div>
                            ))}
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <Link
                to="/consultation"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-center py-3 px-6 rounded-xl font-semibold shadow-md"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



const whatWeDoSections = [
  { label: "US based CPA firms", path: "/cpa-outsourcing" },
  { label: "US based business solutions", path: "/services?type=business-solutions" },
  { label: "Fund accounting", path: "/fund-accounting" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
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
      setScrolled(window.scrollY > 20);
      setShowDropdown(null);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".nav-dropdown")) {
        setShowDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "What we do", path: "/services" }, 
    { name: "Resources", path: "/resources" },
    { name: "Industries", path: "/industries" },

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
    items: { label: string; hash?: string; path?: string }[];
    onItemClick: (item: { label: string; hash?: string; path?: string }) => void;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-0 mt-3 w-72 rounded-xl bg-white shadow-xl ring-1 ring-black/5 z-50 overflow-hidden"
    >
      <div className="py-2">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onItemClick(item)}
            className="block w-full text-left px-6 py-3 text-sm text-slate-700 hover:bg-blue-50/50 hover:text-blue-700 transition-colors font-medium border-l-2 border-transparent hover:border-blue-600"
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.div>
  );

  const toggleDropdown = (name: string) => {
    setShowDropdown(showDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm"
          : "bg-white border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
          <img
            src="/Finolytic_logo-01.png"
            alt="Finolytic"
            className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isDropdown =
              item.name === "What we do";
            
            const isOpen = showDropdown === item.name.toLowerCase();

            return (
              <div key={item.name} className="relative nav-dropdown group">
                <div
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-200 font-heading tracking-wide cursor-pointer py-2
                    ${
                      location.pathname === item.path && !isDropdown
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  onClick={(e) => {
                    if (isDropdown) {
                      e.preventDefault();
                      toggleDropdown(item.name.toLowerCase());
                    } else {
                       navigate(item.path);
                    }
                  }}
                >
                  {item.name}
                  {isDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-blue-600"
                          : "text-slate-400 group-hover:text-blue-600"
                      }`}
                    />
                  )}
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <DropdownMenu
                      items={
                        item.name === "What we do"
                          ? whatWeDoSections
                          : []
                      }
                      onItemClick={(val) => {
                        if (val.path) {
                          navigate(val.path);
                        } else if (val.hash) {
                           handleDropdownClick(
                              new MouseEvent("click") as any,
                              `/${item.name.toLowerCase()}`,
                              val.hash
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

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/consultation"
              className="bg-blue-900 text-white px-7 py-3 rounded-full shadow-lg shadow-blue-900/20 hover:bg-blue-800 hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm font-bold tracking-wide"
            >
              <Calendar size={16} />
              <span>Free Consultation</span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const isDropdownItem =
                  item.name === "What we do";
                const isActive = location.pathname === item.path;
                const isExpanded = showDropdown === item.name.toLowerCase();

                return (
                  <div key={item.name} className="space-y-2">
                    <div
                      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                      onClick={() => {
                        if (isDropdownItem) {
                          toggleDropdown(item.name.toLowerCase());
                        } else {
                          navigate(item.path);
                          setIsOpen(false);
                        }
                      }}
                    >
                      <span className="font-medium font-heading text-base">
                        {item.name}
                      </span>
                      {isDropdownItem && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-blue-600" : "text-slate-400"
                          }`}
                        />
                      )}
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/50 rounded-xl mx-2">
                            {(item.name === "What we do"
                              ? whatWeDoSections
                              : []
                            ).map((subItem, idx) => (
                                <button
                                  key={idx}
                                  className="w-full text-left px-4 py-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium border-l-2 border-transparent hover:border-blue-600"
                                  onClick={() => {
                                    if (subItem.path) {
                                      navigate(subItem.path);
                                    } else if (subItem.hash) {
                                      handleDropdownClick(
                                        new MouseEvent("click") as any,
                                        `/${item.name.toLowerCase()}`,
                                        subItem.hash
                                      );
                                    }
                                    setIsOpen(false);
                                  }}
                                >
                                  {subItem.label}
                                </button>
                              )
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="pt-4 px-2">
                <Link
                  to="/consultation"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-blue-900 text-white text-center py-3.5 rounded-xl font-bold shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all duration-200"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import logo from "../assets/home/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "how-it-works", label: "How It Works" },
    { id: "why-choose-us", label: "Why Choose Us" }
  ];

  useEffect(() => {
    // Create intersection observer to detect which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when section is 50% visible
    );

    // Observe all sections
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    const subject = "Inquiry from CribHaven Website";
    const body = "Hello CribHaven team,\n\n";
    window.location.href = `mailto:romeobourne211@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white w-full fixed left-0 top-0 z-[1000] shadow-sm"
    >
      <nav className="max-w-6xl mx-auto py-4 px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <img src={logo} alt="CribHaven" className="h-14" />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`relative px-2 py-1 transition-colors ${activeSection === id
                    ? "text-black font-semibold"
                    : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block bg-[#1D1C1C] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
          onClick={handleContactClick}
        >
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          <CiMenuFries />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[10000]"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-2xl"
              >
                <IoClose />
              </button>
              <ul className="mt-16 p-6 space-y-6">
                {navItems.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left ${activeSection === id
                          ? "text-black font-semibold"
                          : "text-gray-600"
                        }`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <li>
                  <button className="w-full bg-[#1D1C1C] text-white px-4 py-2 rounded-lg">
                    Contact Us
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
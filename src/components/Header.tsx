import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-sm shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Code2 className="h-7 w-7 text-accent" />
          <span className="font-medium text-xl">H S Vijay</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex space-x-8 relative">
              {navItems.map((item, index) => (
                <li key={item.name} className="relative">
                  <a
                    href={item.href}
                    className={`nav-link text-sm font-medium block pb-1 transition-colors ${
                      activeSection === item.id ? 'text-accent' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="relative inline-flex items-center h-9 w-16 rounded-full bg-primary-200 transition-colors hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label="Toggle dark mode"
          >
            <motion.div
              className="absolute h-7 w-7 rounded-full bg-white shadow-md flex items-center justify-center"
              animate={{
                x: isDarkMode ? 32 : 4
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
            >
              {isDarkMode ? (
                <Moon className="h-4 w-4 text-primary-700" />
              ) : (
                <Sun className="h-4 w-4 text-accent" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center p-2 md:hidden text-primary-800"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-primary-800 shadow-lg"
        >
          <div className="container-custom py-4">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 nav-link text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Dark/Light Mode Toggle */}
            <div className="mt-4 pt-4 border-t border-primary-200 dark:border-primary-700 flex items-center justify-between">
              <span className="text-sm font-medium text-primary-700 dark:text-primary-200">Theme</span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="relative inline-flex items-center h-9 w-16 rounded-full bg-primary-200 transition-colors hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label="Toggle dark mode"
              >
                <motion.div
                  className="absolute h-7 w-7 rounded-full bg-white shadow-md flex items-center justify-center"
                  animate={{
                    x: isDarkMode ? 32 : 4
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                >
                  {isDarkMode ? (
                    <Moon className="h-4 w-4 text-primary-700" />
                  ) : (
                    <Sun className="h-4 w-4 text-accent" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
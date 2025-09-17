import React from 'react';
import { Code2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-primary-900 text-primary-200 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-6 w-6 text-accent" />
              <span className="font-medium text-white text-xl">H S Vijay</span>
            </div>
            <p className="text-primary-400 max-w-xs">
              Aspiring Full Stack Developer passionate about building elegant and functional web applications.
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center h-12 w-12 mb-6 rounded-full bg-primary-800 hover:bg-primary-700 text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-primary-500 text-sm">
              &copy; {new Date().getFullYear()} H S Vijay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-100/80 to-primary-50/30"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl -top-64 -right-64"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary-200/20 blur-3xl -bottom-64 -left-64"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <p className="text-accent text-sm md:text-base tracking-widest uppercase mb-2">Hello, I'm</p>
            <h1 className="text-primary-900 mb-4">H S Vijay</h1>
            <p className="text-primary-600 text-xl md:text-2xl">
              Aspiring Full Stack Developer | Passionate about Web Design & UI/UX
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-primary-500 text-sm mb-2">Scroll down</p>
          <ChevronDown className="w-5 h-5 text-primary-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
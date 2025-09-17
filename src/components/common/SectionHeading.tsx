import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="section-title"
    >
      <p className="text-accent text-sm uppercase tracking-wider font-medium mb-2">
        {subtitle}
      </p>
      <h2 className="text-primary-900 font-medium">
        {title}
      </h2>
      <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
    </motion.div>
  );
};

export default SectionHeading;
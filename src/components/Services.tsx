import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LayoutGrid, PenTool, Code2 } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  const services: Service[] = [
    {
      title: 'Web Design',
      description: 'Creating responsive and elegant layouts that work across all devices, with a focus on performance and visual appeal.',
      icon: <LayoutGrid className="w-10 h-10" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-centered interfaces that are intuitive, accessible, and provide a seamless experience for your users.',
      icon: <PenTool className="w-10 h-10" />,
    },
    {
      title: 'Full Stack Development',
      description: 'Front-end and back-end integration using the Java stack. Building robust web applications from database to user interface.',
      icon: <Code2 className="w-10 h-10" />,
    },
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <SectionHeading title="Services" subtitle="What I can do for you" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-14 w-14 mb-6 rounded-xl bg-primary-100 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-primary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-primary-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
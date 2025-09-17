import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './common/SectionHeading';

type Skill = {
  name: string;
  icon: React.ReactNode;
  category: 'Languages' | 'Web Technologies' | 'Frameworks' | 'Tools' | 'Databases';
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skills: Skill[] = [
    {
      name: 'Java',
      category: 'Languages',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 2v8m0 0 6-4m-6 4L6 6"></path>
          <path d="M5.5 14s5.5-2.5 13 0"></path>
          <path d="M5.5 18s5.5-2.5 13 0"></path>
          <path d="M5.5 22s5.5-2.5 13 0"></path>
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      category: 'Languages',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M17 18a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v6Z"></path>
          <path d="M17 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
        </svg>
      ),
    },
    {
      name: 'Python',
      category: 'Languages',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M11 11h2.5V5c0-1 0-2-2.5-2S7 4 7 5l.5 1"></path>
          <path d="M14 14h-2.5v6c0 1 0 2 2.5 2s3.5-1 3.5-2-.5-1-.5-1"></path>
          <path d="M8.5 9h7"></path>
          <path d="M8.5 17h7"></path>
          <circle cx="7" cy="12" r="3"></circle>
          <circle cx="17" cy="6" r="3"></circle>
          <circle cx="17" cy="18" r="3"></circle>
        </svg>
      ),
    },
    {
      name: 'HTML',
      category: 'Web Technologies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="m13 9 3 3-3 3"></path>
          <path d="M8 9h8"></path>
          <path d="M8 15h8"></path>
          <path d="M5 3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z"></path>
        </svg>
      ),
    },
    {
      name: 'CSS',
      category: 'Web Technologies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M3 7v2h18V7H3z"></path>
          <path d="M3 11v2h18v-2H3z"></path>
          <path d="M3 15v2h14v-2H3z"></path>
          <path d="M20 16l-1.5 1.5L17 16M22 16l-1.5 1.5L19 16"></path>
        </svg>
      ),
    },
    {
      name: 'JSP',
      category: 'Web Technologies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M14 12h.01"></path>
          <path d="M3 12h.01"></path>
          <rect width="18" height="12" x="3" y="6" rx="2"></rect>
          <path d="M10 6v12"></path>
          <path d="M17 12h.01"></path>
        </svg>
      ),
    },
    {
      name: 'Servlets',
      category: 'Web Technologies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect width="20" height="8" x="2" y="2" rx="2"></rect>
          <rect width="20" height="8" x="2" y="14" rx="2"></rect>
          <path d="M6 14v-4"></path>
          <path d="M18 14v-4"></path>
          <path d="M12 10v4"></path>
        </svg>
      ),
    },
    {
      name: 'Spring Boot',
      category: 'Frameworks',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M6.5 15.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
          <path d="M18.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
          <path d="M18.5 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
          <path d="M8.5 6.5 16.5 7"></path>
          <path d="M8.5 17.5 16.5 17"></path>
        </svg>
      ),
    },
    {
      name: 'Hibernate',
      category: 'Frameworks',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M18 12H6a2 2 0 0 0-2 2v8"></path>
          <path d="M6 12V4a2 2 0 0 1 2-2h12"></path>
          <circle cx="20" cy="2" r="1"></circle>
          <circle cx="4" cy="22" r="1"></circle>
        </svg>
      ),
    },
    {
      name: 'Eclipse',
      category: 'Tools',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a4 4 0 0 0 0 8 4 4 0 0 1 0 8"></path>
          <path d="M12 22a4 4 0 0 1 0-8 4 4 0 0 0 0-8"></path>
        </svg>
      ),
    },
    {
      name: 'VSCode',
      category: 'Tools',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M16 3L8 9L3 8v8l5-1l8 6l5-1V4z"></path>
          <path d="m16 3 5 1M3 8l5 1M3 16l5-1M16 21l5-1"></path>
        </svg>
      ),
    },
    {
      name: 'Git',
      category: 'Tools',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="9"></circle>
          <path d="m8 12 8 0"></path>
          <path d="m12 16 0 -8"></path>
        </svg>
      ),
    },
    {
      name: 'MySQL',
      category: 'Databases',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M10 3 H12 Q16 3 16 6 V7 Q16 10 18 10 T16 13 V14 Q16 17 12 17 H10"></path>
          <line x1="12" y1="7" x2="12" y2="17"></line>
          <path d="M8 3 V17"></path>
          <line x1="4" y1="3" x2="4" y2="17"></line>
          <line x1="4" y1="10" x2="8" y2="10"></line>
        </svg>
      ),
    },
  ];

  // Group skills by category
  const categories = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-10"
        >
          {Object.entries(categories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-medium text-primary-800 mb-6">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="card hover:shadow-md flex flex-col items-center text-center p-6"
                  >
                    <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-accent/5 text-accent">
                      {skill.icon}
                    </div>
                    <h4 className="text-primary-900 font-medium">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
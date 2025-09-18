import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

type ProjectTag = 'Web App' | 'Frontend' | 'Backend' | 'Bolt.ai';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  liveLink?: string;
  githubLink?: string;
};

const Projects = () => {
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

  const projects: Project[] = [
    {
      title: 'Simple Calculator',
      description: 'A clean and intuitive calculator application built with modern web technologies. Features basic arithmetic operations with a responsive design and smooth user experience.',
      image: 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Web App', 'Frontend'],
      liveLink: 'https://simple-calculator-ap-w0wr.bolt.host/',
      githubLink: 'https://github.com/user163737/Simple-Calculator/tree/main/project',
    },
    {
      title: 'Weather Application',
      description: 'A modern weather application that provides real-time weather information for any location. Features current weather conditions, forecasts, and an intuitive user interface with responsive design.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Web App', 'Frontend'],
      liveLink: 'https://glassmorphism-weathe-4ud3.bolt.host/',
      githubLink: 'https://github.com/user163737/Weather-Application/tree/main/Weather%20Application',
    },
    {
      title: 'Tasty Recipes',
      description: 'A recipe-sharing platform that allows users to view, submit, and comment on recipes. Built entirely using Bolt.ai.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Web App', 'Frontend', 'Backend', 'Bolt.ai'],
      liveLink: 'https://cosmic-crepe-64f283.netlify.app/',
      githubLink: 'https://github.com/user163737/Tasty-Recipes/tree/main/Tasty%20Recipies%20Project',
    },
  ];

  return (
    <section id="projects" className="section bg-primary-50">
      <div className="container-custom">
        <SectionHeading title="Projects" subtitle="My recent work" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-xl"
            >
              <div className="md:grid md:grid-cols-2">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 space-x-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="inline-block px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm text-primary-900 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-medium text-primary-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-primary-700 mb-6">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary py-2 px-4"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline py-2 px-4"
                      >
                        <Github size={18} className="mr-2" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
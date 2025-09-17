import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './common/SectionHeading';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            variants={variants}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/10 to-accent/5 rotate-3 transform"></div>
              <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                <img 
                  src="/Linkedin_Profile.jpg" 
                  alt="H S Vijay"
                  className="w-full h-[500px] object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={variants}>
            <h3 className="text-primary-900 text-2xl font-medium mb-4">
              Aspiring Java Full Stack Developer
            </h3>
            
            <p className="text-primary-700 mb-6">
              As a passionate and detail-oriented Java Full Stack Developer in training, I aim to begin my 
              career in a dynamic IT environment. I seek opportunities to apply my knowledge of front-end 
              and back-end technologies to real-world projects. My goal is to continuously learn, grow, 
              and contribute to building innovative software solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-primary-900 font-medium text-lg">Education</h4>
                  <p className="text-primary-600">BCA (Bachelor of Computer Applications), Mother Theresa Degree College, Class of 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-primary-900 font-medium text-lg">Passion</h4>
                  <p className="text-primary-600">I'm deeply passionate about web design and creating intuitive, elegant user interfaces that enhance user experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                    <path d="M2 20h20"></path>
                    <path d="M14 12v.01"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-primary-900 font-medium text-lg">Career Goals</h4>
                  <p className="text-primary-600">Looking to join a forward-thinking tech company where I can apply my full stack development skills and grow professionally.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="btn btn-primary mt-8 inline-flex items-center"
            >
              Let's Connect
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
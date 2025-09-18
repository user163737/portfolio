import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Linkedin, Github , } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeading from './common/SectionHeading';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      await emailjs.sendForm(
        'service_ofmckr6',
        'template_hlke2ww',
        formRef.current!,
        '4d53bfX8aUiFkr4cQ'
      );
      
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submission state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 9121359484',
      href: 'tel:+919121359484',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'hsvijay264737@gmail.com',
      href: 'mailto:hsvijay264737@gmail.com',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/hs-vijay',
      href: 'https://linkedin.com/in/hs-vijay',
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: 'github.com/hsvijay264737',
      href: 'https://github.com/hsvijay264737',
    },
  ];

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <SectionHeading title="Contact Me" subtitle="Let's get in touch" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-medium text-primary-900 mb-6">
              Get In Touch
            </h3>
            <p className="text-primary-700 mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl transition-all hover:bg-primary-100"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-primary-600">{item.label}</p>
                    <p className="text-primary-900 font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-primary-900 mb-4">
                Find me on LeetCode
              </h4>
              <a 
                href="https://leetcode.com/u/vijay1612" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                  <path d="m7 8 10 8"></path>
                  <path d="m7 16 10-8"></path>
                </svg>
                leetcode.com/u/vijay1612
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="text-xl font-medium text-primary-900 mb-6">
                Send Me a Message
              </h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                  Thank you for your message! I'll get back to you as soon as possible.
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors resize-none"
                      placeholder="Your message"
                    />
                  </div>
                  
                  {error && (
                    <div className="text-red-600 text-sm">{error}</div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Data Analyst',
    'AI Specialist', 
    'Insight Generator',
    'ML Engineer',
    'Dashboard Expert'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const shouldDelete = isDeleting;
    
    const timeout = setTimeout(() => {
      if (!shouldDelete) {
        // Typing
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, shouldDelete ? 50 : 100); // 60fps for smooth animation

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, texts]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#64ffda] text-lg md:text-xl mb-4 font-mono"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-7xl font-bold text-[#ccd6f6] mb-4"
          >
            Ankit Ram
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-5xl font-bold text-[#8892b0] mb-8"
          >
            I transform data into insights.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="h-12 mb-8 flex items-center justify-center"
          >
            <p className="text-[#64ffda] text-xl md:text-2xl font-mono">
              {displayedText}
              <span className="animate-pulse text-[#64ffda]">|</span>
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-[#8892b0] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I'm a passionate data analyst specializing in transforming complex datasets into 
            actionable business insights through advanced analytics, machine learning, and 
            compelling data visualizations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              className="bg-transparent border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-8 py-6 text-lg group"
            >
              <a href="#projects">
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              asChild
              className="bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90 px-8 py-6 text-lg group"
            >
              <a href="#contact">
                Get In Touch
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
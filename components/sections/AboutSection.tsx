'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ankitImage from '../../public/Ankit11.png';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Brain, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { icon: Code, name: 'Python', description: 'Data analysis & ML' },
    { icon: Database, name: 'SQL', description: 'Database management' },
    { icon: TrendingUp, name: 'Power BI', description: 'Data visualization' },
    { icon: Brain, name: 'ML/AI', description: 'Predictive modeling' },
  ];

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#64ffda] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto md:mx-0 relative">
                <div className="absolute inset-0 rounded-full border-4 border-[#64ffda] animate-pulse"></div>
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#64ffda]/20 to-[#0a192f] flex items-center justify-center overflow-hidden">
                  <Image
                    src={ankitImage}
                    alt="Ankit Ram - Data Analyst"
                    width={288}
                    height={288}
                    className="rounded-full object-cover border-4 border-[#64ffda]/50"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#8892b0] leading-relaxed">
              Hello! I'm Ankit, a passionate data analyst with 2 years of experience in 
              transforming raw data into actionable business insights. My journey began 
              with a fascination for patterns and numbers, which led me to specialize in 
              advanced analytics and machine learning.
            </p>
            
            <p className="text-lg text-[#8892b0] leading-relaxed">
              I excel at creating comprehensive dashboards using Power BI and Tableau, 
              developing machine learning models with Python, and implementing AI solutions 
              that drive business growth. My expertise in prompt engineering allows me to 
              leverage cutting-edge AI tools effectively.
            </p>
            
            <p className="text-lg text-[#8892b0] leading-relaxed">
              Currently based in Gurugram, I'm always eager to tackle complex data challenges 
              and collaborate on projects that make a meaningful impact. When I'm not analyzing 
              data, you'll find me exploring the latest in AI and machine learning trends.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-[#112240] rounded-lg p-4 border border-[#64ffda]/20 hover:border-[#64ffda]/50 transition-colors group"
                >
                  <skill.icon className="w-8 h-8 text-[#64ffda] mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-[#ccd6f6]">{skill.name}</h3>
                  <p className="text-sm text-[#8892b0]">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
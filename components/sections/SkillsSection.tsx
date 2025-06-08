'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SkillCard from '@/components/ui/SkillCard';
import { Code, Database, BarChart3, Brain, Cpu, Cloud, Github as Git, FileSpreadsheet, TrendingUp, Bot } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = {
    'data-analysis': [
      { name: 'Python', level: 90, icon: Code, description: 'Data manipulation & analysis' },
      { name: 'Power BI', level: 85, icon: BarChart3, description: 'Interactive dashboards' },
      { name: 'Advanced Excel', level: 80, icon: FileSpreadsheet, description: 'Complex formulas & VBA' },
      { name: 'Tableau', level: 75, icon: TrendingUp, description: 'Data visualization' },
    ],
    'ml-ai': [
      { name: 'Machine Learning', level: 85, icon: Brain, description: 'Predictive modeling' },
      { name: 'Deep Learning', level: 80, icon: Cpu, description: 'Neural networks' },
      { name: 'NLP', level: 75, icon: Bot, description: 'Text analysis' },
      { name: 'Prompt Engineering', level: 90, icon: Brain, description: 'AI optimization' },
    ],
    'tools': [
      { name: 'MySQL', level: 85, icon: Database, description: 'Database management' },
      { name: 'Git', level: 80, icon: Git, description: 'Version control' },
      { name: 'AWS', level: 75, icon: Cloud, description: 'Cloud computing' },
      { name: 'Docker', level: 70, icon: Cpu, description: 'Containerization' },
    ],
  };

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-[#64ffda] mx-auto mb-6"></div>
          <p className="text-lg text-[#8892b0] max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            in data analysis, machine learning, and development tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs defaultValue="data-analysis" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#112240] border border-[#64ffda]/20 mb-8">
              <TabsTrigger 
                value="data-analysis"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f] text-[#ccd6f6]"
              >
                Data Analysis
              </TabsTrigger>
              <TabsTrigger 
                value="ml-ai"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f] text-[#ccd6f6]"
              >
                ML/AI
              </TabsTrigger>
              <TabsTrigger 
                value="tools"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f] text-[#ccd6f6]"
              >
                Tools
              </TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <SkillCard skill={skill} isInView={isInView} />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
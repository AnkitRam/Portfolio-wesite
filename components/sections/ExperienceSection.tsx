'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      id: 1,
      title: 'Senior Data Analyst',
      company: 'TechCorp Solutions',
      location: 'Gurugram, India',
      period: '2022 - Present',
      description: 'Leading data analytics initiatives and developing machine learning models for business optimization.',
      achievements: [
        'Developed ML models that increased sales forecasting accuracy by 35%',
        'Built interactive Power BI dashboards reducing report generation time by 60%',
        'Led a team of 3 junior analysts in data visualization projects',
        'Implemented automated data pipelines processing 1M+ records daily'
      ],
      tech: ['Python', 'Power BI', 'SQL', 'Azure', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'DataInsights Pro',
      location: 'Delhi, India',
      period: '2021 - 2022',
      description: 'Focused on business intelligence and data visualization for client projects.',
      achievements: [
        'Created comprehensive dashboards for 15+ client companies',
        'Improved data processing efficiency by 40% through Python automation',
        'Conducted statistical analysis for market research projects',
        'Trained business stakeholders on data interpretation and insights'
      ],
      tech: ['Excel', 'Tableau', 'SQL', 'Python', 'Statistics']
    },
    {
      id: 3,
      title: 'Junior Data Analyst',
      company: 'StartupData Hub',
      location: 'Noida, India',
      period: '2020 - 2021',
      description: 'Entry-level position focusing on data cleaning, analysis, and basic visualization.',
      achievements: [
        'Processed and cleaned datasets containing 500K+ records',
        'Created weekly KPI reports for executive team',
        'Assisted in A/B testing analysis for product optimization',
        'Learned advanced Excel and SQL through hands-on projects'
      ],
      tech: ['Excel', 'SQL', 'Basic Python', 'Data Cleaning']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-[#64ffda] mx-auto mb-6"></div>
          <p className="text-lg text-[#8892b0] max-w-2xl mx-auto">
            My journey in data analytics, from entry-level analyst to leading 
            complex ML projects and business intelligence initiatives.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#64ffda]/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-20 pb-16 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-2 w-4 h-4 bg-[#64ffda] rounded-full border-4 border-[#0a192f]"></div>

              <div className="bg-[#112240] rounded-lg p-6 border border-[#64ffda]/20 hover:border-[#64ffda]/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-[#64ffda] font-semibold mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-[#8892b0] text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-[#8892b0] text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-[#8892b0] mb-4">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h5 className="text-[#ccd6f6] font-semibold mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-[#64ffda]" />
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-[#8892b0] flex items-start">
                        <span className="text-[#64ffda] mr-2 mt-2">▪</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm border border-[#64ffda]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
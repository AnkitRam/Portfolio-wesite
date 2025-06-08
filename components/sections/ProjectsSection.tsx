'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Sales Performance Dashboard',
      description: 'Interactive Power BI dashboard analyzing sales trends, KPIs, and forecasting',
      category: 'dashboard',
      tech: ['Power BI', 'SQL', 'Python'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Customer Churn Prediction',
      description: 'ML model predicting customer churn with 89% accuracy using ensemble methods',
      category: 'ml',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Financial Data Analyzer',
      description: 'Python tool for automated financial statement analysis and ratio calculations',
      category: 'tool',
      tech: ['Python', 'Streamlit', 'Plotly'],
      image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Market Sentiment Analysis',
      description: 'NLP-powered sentiment analysis of social media data for market predictions',
      category: 'ml',
      tech: ['Python', 'NLTK', 'TensorFlow'],
      image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'HR Analytics Dashboard',
      description: 'Comprehensive HR metrics dashboard tracking employee performance and retention',
      category: 'dashboard',
      tech: ['Tableau', 'SQL', 'Excel'],
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Automated Report Generator',
      description: 'Python script automating weekly business reports with data validation',
      category: 'tool',
      tech: ['Python', 'Pandas', 'ReportLab'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'dashboard', name: 'Dashboards' },
    { id: 'ml', name: 'ML Models' },
    { id: 'tool', name: 'Python Tools' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#64ffda] mx-auto mb-6"></div>
          <p className="text-lg text-[#8892b0] max-w-2xl mx-auto">
            A showcase of my data analysis projects, from interactive dashboards 
            to machine learning models that solve real-world problems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={`${
                filter === category.id
                  ? 'bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90'
                  : 'border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              whileHover={{ y: -10 }}
              className={`${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="bg-[#112240] border-[#64ffda]/20 hover:border-[#64ffda]/50 transition-all duration-300 h-full group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#64ffda]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button
                        size="sm"
                        className="bg-[#0a192f]/80 text-[#64ffda] hover:bg-[#0a192f]"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#0a192f]/80 text-[#64ffda] hover:bg-[#0a192f]"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[#8892b0]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-[#64ffda]/30 text-[#64ffda] hover:bg-[#64ffda]/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
    icon: LucideIcon;
    description: string;
  };
  isInView: boolean;
}

const SkillCard = ({ skill, isInView }: SkillCardProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level]);

  // Calculate the circle progress
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotateY: 10,
        rotateX: 10,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-[#112240]/70 to-[#0a192f]/90 backdrop-blur-sm rounded-xl p-6 border border-[#64ffda]/20 hover:border-[#64ffda]/50 transition-all duration-300 h-full shadow-lg hover:shadow-[#64ffda]/25">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        
        <div className="relative z-10">
          {/* Icon and Progress Circle */}
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              {/* Progress Circle */}
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="#64ffda"
                  strokeWidth="3"
                  fill="transparent"
                  opacity="0.2"
                />
                {/* Progress Circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="drop-shadow-[0_0_6px_#64ffda]"
                />
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#64ffda" />
                    <stop offset="100%" stopColor="#00b3b3" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Icon in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <skill.icon 
                  className="w-8 h-8 text-[#64ffda] group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            </div>
          </div>

          {/* Percentage Counter */}
          <div className="text-center mb-3">
            <motion.span
              className="text-2xl font-bold text-[#64ffda]"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>

          {/* Skill Name */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-semibold text-[#ccd6f6] text-center mb-2 group-hover:text-[#64ffda] transition-colors"
          >
            {skill.name}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-[#8892b0] text-center leading-relaxed"
          >
            {skill.description}
          </motion.p>

          {/* Mini Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-[#64ffda]/20 rounded-full h-1">
              <motion.div
                className="bg-gradient-to-r from-[#64ffda] to-[#00b3b3] h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: isInView ? `${skill.level}%` : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.7 }}
              />
            </div>
          </div>
        </div>

        {/* Hover Effect Particles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#64ffda] rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
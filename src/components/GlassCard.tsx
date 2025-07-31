import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`
        bg-white/60 backdrop-blur-md 
        border border-white/30 
        rounded-2xl shadow-xl
        hover:bg-white/70 hover:shadow-2xl
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
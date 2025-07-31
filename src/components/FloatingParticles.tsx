import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Brain, Zap } from 'lucide-react';

const FloatingParticles = () => {
  const particles = [
    { Icon: FileText, delay: 0, x: '10vw', y: '20vh' },
    { Icon: Brain, delay: 2, x: '80vw', y: '60vh' },
    { Icon: Zap, delay: 4, x: '20vw', y: '80vh' },
    { Icon: FileText, delay: 1, x: '90vw', y: '30vh' },
    { Icon: Brain, delay: 3, x: '60vw', y: '10vh' },
    { Icon: Zap, delay: 5, x: '40vw', y: '90vh' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{ left: particle.x, top: particle.y }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        >
          <particle.Icon className="w-8 h-8 text-blue-600" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingParticles;
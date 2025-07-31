import React from 'react';
import { motion } from 'framer-motion';

const NeuralNetwork = () => {
  const nodes = [
    { x: 0, y: 0 },
    { x: 100, y: -50 },
    { x: 100, y: 50 },
    { x: 200, y: 0 },
    { x: 300, y: -25 },
    { x: 300, y: 25 },
  ];

  const connections = [
    [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5]
  ];

  return (
    <div className="relative w-80 h-40 opacity-60">
      <svg width="320" height="160" className="absolute inset-0">
        {connections.map(([start, end], index) => (
          <motion.line
            key={index}
            x1={nodes[start].x + 40}
            y1={nodes[start].y + 80}
            x2={nodes[end].x + 40}
            y2={nodes[end].y + 80}
            stroke="url(#gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: index * 0.2 }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
      </svg>
      
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg"
          style={{ left: node.x, top: node.y + 60 }}
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 0 0 rgba(59, 130, 246, 0.7)",
              "0 0 0 10px rgba(59, 130, 246, 0)",
              "0 0 0 0 rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3
          }}
        />
      ))}
    </div>
  );
};

export default NeuralNetwork;
import React from 'react';
import { motion } from 'framer-motion';

interface ConfidenceScoreProps {
  score: number;
}

const ConfidenceScore: React.FC<ConfidenceScoreProps> = ({ score }) => {
  const percentage = Math.round(score * 100);
  const circumference = 2 * Math.PI * 20;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score * circumference);

  return (
    <div className="flex items-center space-x-3">
      <div className="relative w-12 h-12">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-gray-200"
          />
          <motion.circle
            cx="22"
            cy="22"
            r="20"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={`${
              score >= 0.8 ? 'text-green-500' : 
              score >= 0.6 ? 'text-yellow-500' : 'text-red-500'
            }`}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-700">
            {percentage}%
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-700">Confidence Score</p>
        <p className="text-xs text-gray-500">
          {score >= 0.8 ? 'High' : score >= 0.6 ? 'Medium' : 'Low'} accuracy
        </p>
      </div>
    </div>
  );
};

export default ConfidenceScore;
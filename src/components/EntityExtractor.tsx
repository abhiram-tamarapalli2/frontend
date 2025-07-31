import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const EntityExtractor = () => {
  const entities = [
    {
      text: '46-year-old male',
      label: 'PERSON_DEMOGRAPHIC',
      confidence: 0.95,
      start: 0,
      end: 15,
      method: 'NER'
    },
    {
      text: 'knee surgery',
      label: 'MEDICAL_PROCEDURE',
      confidence: 0.92,
      start: 17,
      end: 29,
      method: 'Custom Model'
    },
    {
      text: 'Pune',
      label: 'LOCATION',
      confidence: 0.98,
      start: 33,
      end: 37,
      method: 'NER'
    },
    {
      text: '₹3,50,000',
      label: 'MONEY',
      confidence: 0.89,
      start: 45,
      end: 54,
      method: 'Pattern Match'
    },
    {
      text: '10%',
      label: 'PERCENTAGE',
      confidence: 0.94,
      start: 60,
      end: 63,
      method: 'Pattern Match'
    }
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return 'bg-green-100 text-green-800';
    if (confidence >= 0.8) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Entity Extractor
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-700">Text</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Label</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Confidence</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Start</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">End</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Method</th>
            </tr>
          </thead>
          <tbody>
            {entities.map((entity, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="border-b border-gray-100 hover:bg-white/50 transition-colors duration-200"
              >
                <td className="py-3 px-4">
                  <span className="font-medium text-gray-800">
                    {entity.text}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {entity.label}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(entity.confidence)}`}>
                    {(entity.confidence * 100).toFixed(0)}%
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600">{entity.start}</td>
                <td className="py-3 px-4 text-gray-600">{entity.end}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    {entity.method}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
};

export default EntityExtractor;
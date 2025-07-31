import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Send, Mic, FileText, CheckCircle, AlertCircle, Zap } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import TypingEffect from '../components/TypingEffect';
import ConfidenceScore from '../components/ConfidenceScore';
import EntityExtractor from '../components/EntityExtractor';

const AssistantInterface = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [confidence, setConfidence] = useState(0.92);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...uploadedFiles]);
  };

  const handleQuery = () => {
    if (!query.trim()) return;
    
    setIsProcessing(true);
    setShowResponse(false);
    
    setTimeout(() => {
      setResponse(`Based on your query about coverage for a 46-year-old male requiring knee surgery in Pune, I can confirm that this procedure is covered under your policy. 

The coverage includes:
• Pre and post-operative care
• Hospital accommodation (private room)
• Surgeon and anesthesiologist fees
• Diagnostic tests and medications

Coverage Amount: ₹3,50,000
Co-payment: 10% (₹35,000)
Network Hospital Discount: Available at 15+ hospitals in Pune

Source: Policy Document Section 4.2.1 - Orthopedic Procedures`);
      
      setIsProcessing(false);
      setShowResponse(true);
    }, 2000);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ask Your Query
          </h1>
          <p className="text-xl text-gray-600">
            Upload documents and get instant AI-powered insights
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <GlassCard className="p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-green-500" />
                System Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">System Ready</span>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Initialize RAG</span>
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Upload className="w-5 h-5 mr-2 text-blue-500" />
                Upload Documents
              </h3>
              
              <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-300">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    Drag & drop files here or click to browse
                  </p>
                </label>
              </div>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-white/50 rounded-lg">
                      <FileText className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-700 truncate flex-1">{file.name}</span>
                      <span className="text-xs text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(1)}MB
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <button
                className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                disabled={files.length === 0}
              >
                Process Documents
              </button>
            </GlassCard>
          </motion.div>

          {/* Main Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-6 min-h-96">
              <div className="flex flex-col h-full">
                <div className="flex-1 mb-6">
                  <AnimatePresence>
                    {showResponse && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                          <TypingEffect text={response} />
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <ConfidenceScore score={confidence} />
                          <div className="flex-1">
                            <div className="flex space-x-2">
                              <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                Policy Section 4.2.1
                              </div>
                              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                Coverage Table A3
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {isProcessing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center py-12"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                        <span className="text-gray-600">Processing your query...</span>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="E.g., 46-year-old male, knee surgery in Pune — is this covered?"
                    className="w-full px-4 py-4 pr-20 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleQuery()}
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-200">
                      <Mic className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleQuery}
                      className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>

            {showResponse && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6"
              >
                <EntityExtractor />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AssistantInterface;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, FileSearch, MessageSquare, Target, Shield, Zap, CheckCircle, TrendingUp, Award } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import NeuralNetwork from '../components/NeuralNetwork';
import GlassCard from '../components/GlassCard';

const Homepage = () => {
  const features = [
    {
      icon: FileSearch,
      title: 'Extract Complex Policy Details',
      description: 'Advanced AI parsing of insurance documents with 94% accuracy'
    },
    {
      icon: MessageSquare,
      title: 'Query Insurance Docs in Plain English',
      description: 'Natural language processing for intuitive document queries'
    },
    {
      icon: Target,
      title: 'High Accuracy with Source Mapping',
      description: 'Precise answers with direct source references and confidence scores'
    }
  ];

  const benefits = [
    { icon: Shield, text: 'Secure cloud-based deployment' },
    { icon: CheckCircle, text: '94%+ accuracy from AI model' },
    { icon: Zap, text: 'Compliant with insurance data regulations' },
    { icon: TrendingUp, text: '5x faster query processing' }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      <FloatingParticles />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <GlassCard className="p-12 max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Unlock Insurance Intelligence with Generative AI
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Built for Bajaj Finserv. Powered by Mistral 7B. Designed for speed, clarity, and insight.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link
                  to="/assistant"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Try Demo</span>
                  <Play className="w-5 h-5" />
                </Link>
                
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                  How It Works
                </button>
              </motion.div>
            </GlassCard>
          </motion.div>
          
          <motion.div
            className="absolute -right-32 top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <NeuralNetwork />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What This Platform Solves
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <GlassCard className="p-8 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Preview Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                <div className="text-6xl text-blue-600 opacity-50">▶</div>
              </div>
              <p className="text-lg text-gray-600">
                "See how a simple question becomes an answer with context."
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Why Bajaj Finserv AI Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/80 transition-all duration-300"
                  >
                    <benefit.icon className="w-8 h-8 text-blue-600 mb-3" />
                    <p className="text-sm font-medium text-gray-700">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Trusted by India's Financial Powerhouse
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;